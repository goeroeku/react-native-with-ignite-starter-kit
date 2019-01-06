import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import RoundedButton from "../Components/RoundedButton";
import { HeaderBackButton } from "react-navigation";
import TextInput from "../Components/TextInput";

// Styles
import styles from "./Styles/LaunchScreenStyles";
import { Fonts, Colors, Metrics, ApplicationStyles } from "../Themes/";

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { textEmail: "Email", textPassword: "Password" };
  }
  render() {
    return (
      <View style={ApplicationStyles.mainContainer}>
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
          <TextInput placeholder="Nama Usaha" />
          <TextInput placeholder="Nama Pemilik" />
          <TextInput placeholder="Nomor HP" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Alamat Lengkap" />
        </View>
        <View
          style={{
            marginLeft: Metrics.section,
            marginRight: Metrics.section,
            marginBottom: Metrics.section
          }}
        >
          <RoundedButton
            text="Daftar"
            aktif="1"
            onPress={() => window.alert("Rounded Button Pressed!")}
          />
          <Text style={{ textAlign: "center" }}>
            Sudah Punya Akun?
            <Text
              style={{ paddingLeft: Metrics.baseMargin, color: Colors.kedua }}
              onPress={() => this.props.navigation.navigate("LoginScreen")}
            >
              LOGIN
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const stylesCurrent = {
  wrapper: {}
};
