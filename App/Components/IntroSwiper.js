import React, { Component } from "react";
import { Text, Image, View } from "react-native";

// Styles
import { Fonts, Colors, Metrics } from "../Themes/";
import { widthPercentageToDP, heightPercentageToDP } from "../Utils/Dimensions";

export default class IntroSwiper extends Component {
  render() {
    let gambarIntro = require("../Images/intro-1.png");
    let titleColor = Colors.kedua;
    if (this.props.jenis == 2) {
      titleColor = Colors.utama;
      gambarIntro = require("../Images/intro-2.png");
    } else if (this.props.jenis == 3) {
      titleColor = Colors.ketiga;
      gambarIntro = require("../Images/intro-3.png");
    }

    return (
      <View style={[stylesCurrent.slide]}>
        <View style={[stylesCurrent.centered, {}]}>
          <Image source={gambarIntro} style={stylesCurrent.bannerIntro} />
        </View>

        <Text style={[stylesCurrent.textTitle, { color: titleColor }]}>
          {this.props.title}
        </Text>

        <Text style={[stylesCurrent.textDescription, {}]}>
          {this.props.description}
        </Text>
      </View>
    );
  }
}

const stylesCurrent = {
  wrapper: {},
  slide: {
    alignItems: "center",
    margin: Metrics.baseMargin,
    textAlign: "center",
    height: Metrics.screenHeight
  },
  textTitle: {
    fontWeight: "bold",
    marginBottom: Metrics.smallMargin
  },
  textDescription: {
    textAlign: "center",
    fontSize: Fonts.size.small,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin
  },
  centered: {
    alignItems: "center"
  },
  bannerIntro: {
    height: 250,
    resizeMode: "contain",
    margin: Metrics.doubleBaseMargin
  }
};
