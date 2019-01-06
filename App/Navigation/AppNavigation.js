import {
  createStackNavigator,
  createAppContainer,
  HeaderBackButton
} from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import LoginScreen from "../Containers/LoginScreen";
import RegisterScreen from "../Containers/RegisterScreen";
import ListPaketDataScreen from "../Containers/ListPaketDataScreen";

import styles from "./Styles/NavigationStyles";

import React, { Component } from "react";
import { Button, Dimensions } from "react-native";
import { Colors, Metrics } from "../Themes";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor={Colors.utama}
            onPress={() => {
              navigation.popToTop();
              navigation.goBack(null);
            }}
          />
        )
      })
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor={Colors.utama}
            onPress={() => {
              navigation.popToTop();
              navigation.goBack(null);
            }}
          />
        )
      })
    },
    ListPaketDataScreen: {
      screen: ListPaketDataScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Data Pengguna",
        headerTitleStyle: {
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          textAlignVertical: "center",
          paddingRight: Metrics.doubleSection,
          flex: 1,
          color: Colors.ketiga
          //width: Dimensions.get("window").width - 110
        },
        headerLeft: (
          <HeaderBackButton
            tintColor={Colors.utama}
            onPress={() => {
              navigation.popToTop();
              navigation.goBack(null);
            }}
          />
        )
      })
    }
  },
  {
    // Default config for all screens
    headerMode: "screen", // show header App Bar
    initialRouteName: "ListPaketDataScreen",
    defaultNavigationOptions: {
      // hide shadow from header AppBar
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      }
    }
  }
);

export default createAppContainer(PrimaryNav);
