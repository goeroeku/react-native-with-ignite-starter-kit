import React, { Component } from "react";
import { Text, View } from "react-native";

import RoundedButton from "../Components/RoundedButton";
import IntroPage from "../Components/Pages/IntroPage";
//import Button from "apsl-react-native-button";

// Styles
import styles from "./Styles/LaunchScreenStyles";
import { Fonts, Colors, Metrics } from "../Themes/";
//import { widthPercentageToDP, heightPercentageToDP } from "../Utils/Dimensions";

export default class LaunchScreen extends Component {
  // hide header AppBar
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <IntroPage />
        <View
          style={{
            marginLeft: Metrics.section,
            marginRight: Metrics.section,
            marginBottom: Metrics.section
          }}
        >
          <RoundedButton
            text="Akun Baru"
            aktif="1"
            onPress={() => this.props.navigation.navigate("RegisterScreen")}
          />
          <RoundedButton
            text="Login"
            // onPress={() => window.alert("Rounded Jos Pressed!")}
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          />
        </View>
      </View>
    );
  }
}

const stylesCurrent = {
  wrapper: {}
};
