import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import PropTypes from "prop-types";

// styles
import { Fonts, Colors, Metrics, ApplicationStyles } from "../Themes/";

export default class LoginScreen extends Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
  };

  getText() {
    const placeholder = this.props.placeholder || "";
    //return buttonText.toUpperCase();
    return placeholder;
  }

  render() {
    return (
      <TextInput
        style={{
          borderBottomColor: Colors.utama,
          borderWidth: 0.5,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          padding: Metrics.smallMargin,
          marginBottom: Metrics.doubleBaseMargin
        }}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}
