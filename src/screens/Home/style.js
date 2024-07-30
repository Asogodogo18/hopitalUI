import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constant";

const dashboardStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: "#fff",
    borderBottomWidth: 2.5,
    borderColor: COLORS.main,
    elevation: 5,
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 2.5,
    borderColor: COLORS.main,
  },
  userName: { fontSize: 18,color:COLORS.main,fontWeight: '600',
   },
  title: {
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
 
  },
  titleBold: {
    fontWeight: "bold",
  },
  title_space_between: {
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
  },
  link: {
    color: COLORS.main,
    fontWeight: "bold",
  },
  doctorsContainer: {
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
    marginTop: 10,
  },
  docotrsCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginBottom: 15,
    borderRadius: 10,
  },
  docotImg: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    marginBottom: 15,
    marginRight: 15,
    borderWidth: 2.5,
    borderColor: COLORS.main,
  },
  dictorsInfo: {
    flexDirection: "column",
  },
  dictorsName: { fontWeight: "bold", fontSize: 18, marginBottom: 8 },
  dictorsSpec: {
    backgroundColor: COLORS.main,
    padding: 5,
    borderRadius: 15,
    fontSize: 16,
    color: "white",
    // paddingHorizontal: PADDING.horizontal,
    // paddingVertical: PADDING.vertical,
    textAlign: "center",
  },
});
export default dashboardStyles;
