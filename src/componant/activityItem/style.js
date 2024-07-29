import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constant";

const Styles = StyleSheet.create({
    // styler du flatlist
  scrollable: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    paddingBottom:10
  },
  scrollableItem: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 10,
    backgroundColor: "white",
    elevation: 3,
    borderRadius:60/2
  },
  mainTex: {
    fontWeight:"bold",
    fontSize:16
  },
  subText: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default Styles;
