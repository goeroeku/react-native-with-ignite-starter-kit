import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: "contain"
  },
  bannerIntro: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.bannerIntro,
    width: Metrics.images.bannerIntro,
    resizeMode: "contain"
  },
  centered: {
    alignItems: "center"
  }
});
