import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constant";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    elevation: 5,
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
    borderRadius:20
  },
});

export default style;
