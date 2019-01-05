import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Styles/RoundedButtonStyles";
import ExamplesRegistry from "../Services/ExamplesRegistry";

// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Rounded Button", () => (
  <RoundedButton
    text="real buttons have curves"
    onPress={() => window.alert("Rounded Button Pressed!")}
  />
));

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  };

  getText() {
    const buttonText = this.props.text || this.props.children || "";
    //return buttonText.toUpperCase();
    return buttonText;
  }

  render() {
    let buttonColor = styles.colorAktif;
    let buttonTextColor = styles.colorTextAktif;

    if (this.props.aktif == null || this.props.aktif != 1) {
      buttonColor = styles.colorNonAktif;
      buttonTextColor = styles.colorTextNonAktif;
    }

    return (
      <TouchableOpacity
        style={[styles.button, buttonColor]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.buttonText, buttonTextColor]}>
          {this.getText()}
        </Text>
      </TouchableOpacity>
    );
  }
}
