import { PADDING } from "../../outils/constant";

const { StyleSheet } = require("react-native");
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  header: {
    elevation:5,backgroundColor:'white',
    borderRadius: 20,
    flexDirection:'row',padding:10,alignItems:'center'
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  userInfo:{
    marginLeft:15
  },
  userName:{
    fontWeight: 'bold',
    marginBottom:5
    
  },
  userEmail:{
    marginBottom:5

  }
});

export default style;
