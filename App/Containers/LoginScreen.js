import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import RoundedButton from "../Components/RoundedButton";
import { HeaderBackButton } from "react-navigation";
import TextInput from "../Components/TextInput";

import axios from "axios";

import RegisterScreen from "../Containers/RegisterScreen";

// Styles
import styles from "./Styles/LaunchScreenStyles";
import { Fonts, Colors, Metrics, ApplicationStyles } from "../Themes/";
import { empty } from "rxjs";

// env
import { API_URL } from "react-native-dotenv";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }
  async onSubmit() {
    if (this.state.email == "" || this.state.password == "") {
      window.alert("Silakan isi email dan password dahulu !!!");
      return;
    }
    var res = await axios
      .post(API_URL + "/api/auth/signin", {
        username: this.state.email,
        password: this.state.password
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
    if (res.data && res.data.auth) {
      this.props.navigation.replace("RegisterScreen");
    } else {
      window.alert("Gagal login ...");
    }
  }
  render() {
    return (
      <View style={ApplicationStyles.mainContainer}>
        <Text
          style={[
            Fonts.style.h1,
            { marginTop: Metrics.doubleSection, textAlign: "center" }
          ]}
        >
          LOGIN
        </Text>
        <View
          style={[
            ApplicationStyles.section,
            {
              padding: Metrics.doubleBaseMargin,
              marginTop: Metrics.section,
              marginBottom: Metrics.doubleSection
            }
          ]}
        >
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View
          style={{
            marginLeft: Metrics.section,
            marginRight: Metrics.section,
            marginBottom: Metrics.section
          }}
        >
          <RoundedButton
            text="Login"
            aktif="1"
            onPress={() => this.onSubmit()}
          />
          <RoundedButton
            text="Lupa Password"
            // onPress={() => window.alert("Rounded Jos Pressed!")}
            onPress={() => this.props.navigation.replace("RegisterScreen")}
          />
        </View>
      </View>
    );
  }
}

const stylesCurrent = {
  wrapper: {}
};
