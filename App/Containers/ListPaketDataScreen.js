import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { ListItem, Icon } from "react-native-elements";

import RoundedButton from "../Components/RoundedButton";
import { HeaderBackButton } from "react-navigation";
import TextInput from "../Components/TextInput";

import axios from "axios";
import { API_URL } from "react-native-dotenv";

// Styles
import styles from "./Styles/LaunchScreenStyles";
import { Fonts, Colors, Metrics, ApplicationStyles } from "../Themes/";
import { red } from "ansi-colors";
import { from } from "rxjs";

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    const textColorTitle = this.props.selected ? "red" : Colors.ketiga;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View
          style={[
            stylesCurrent.wrapperList,
            {
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }
          ]}
        >
          <View>
            <Text style={{ color: textColorTitle }}>{this.props.data.id}</Text>
            <Text style={{ color: textColor, fontWeight: "bold" }}>
              {this.props.data.name}
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ color: textColor, fontWeight: "bold" }}>
              {this.props.data.username}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class ListPaketDataScreen extends Component {
  constructor(props) {
    super(props);

    pengguna: [];
  }

  state = { selected: (new Map(): Map<string, boolean>) };

  _renderSeparator = ({ item }) => {
    return (
      <View
        key={item}
        style={{
          height: 1,
          backgroundColor: Colors.cloud
        }}
      />
    );
  };

  _renderItem = ({ item }) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      data={item}
    />
  );

  _renderItemListItem = ({ item }) => (
    <TouchableOpacity onPress={this._onPress}>
      <ListItem
        roundAvatar
        title={`${item.name}`}
        //subtitle={item.email}
        subtitle={
          <View style={stylesCurrent.subtitleView}>
            {/* <Image
              source={require("../Images/Icons/icon-home@2x.png")}
              style={stylesCurrent.ratingImage}
            /> */}
            <Text style={stylesCurrent.ratingText}>5 months ago</Text>
          </View>
        }
        avatar={require("../Images/Icons/faq-icon.png")}
        containerStyle={{ borderBottomWidth: 0 }}
        //rightIcon={<Icon name={"done"} size={20} />}
        rightElement={
          <View>
            <Text>5 months ago</Text>
          </View>
        }
      />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => item.id.toString();

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState(state => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return { selected };
    });
  };

  componentWillMount() {
    axios
      .get(API_URL + "/api/user", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTQ2NzU1ODk4LCJleHAiOjE1NDY4NDIyOTh9.JC9yG6i2SYfJTU3srvxvRkq0ne6jLd24w72mZ0DHMB0"
        }
      })
      .then(res => {
        const pengguna = res.data.user;
        this.setState({ pengguna });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <View style={ApplicationStyles.mainContainer}>
        <View
          style={[
            ApplicationStyles.section,
            {
              //padding: Metrics.doubleBaseMargin
              paddingBottom: Metrics.doubleBaseMargin
            }
          ]}
        >
          <FlatList
            data={this.state.pengguna}
            showsVerticalScrollIndicator={false}
            renderItem={this._renderItem}
            // renderItem={({ item }) => (
            //   <ListItem
            //     roundAvatar
            //     title={`${item.name}`}
            //     subtitle={item.email}
            //     //avatar={{ uri: item.picture.thumbnail }}
            //     containerStyle={{ borderBottomWidth: 0 }}
            //   />
            // )}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const stylesCurrent = {
  wrapper: {},
  flatview: {},
  wrapperList: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18
  },
  email: {
    color: "red"
  },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey"
  }
};
