import { StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "../../Themes/";

export default StyleSheet.create({
  colorAktif: {
    backgroundColor: Colors.utama,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  colorNonAktif: {
    backgroundColor: Colors.clear,
    borderColor: Colors.background,
    borderWidth: 0.3
  },
  button: {
    height: 45,
    borderRadius: Metrics.buttonRadius,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.smallMargin,
    justifyContent: "center"
  },
  buttonText: {
    color: Colors.snow,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.smallMargin
  },
  colorTextAktif: {
    color: Colors.snow
  },
  colorTextNonAktif: {
    color: Colors.charcoal
  }
});
