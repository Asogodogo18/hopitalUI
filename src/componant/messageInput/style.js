import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constant";

const style = StyleSheet.create({
    container:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#eee',alignItems:'center'
    },
    input:{ 
        flex:1,
        backgroundColor:"white",
        padding:5,
        borderRadius:15,marginRight: 5,
        
    },
    send:{
        backgroundColor:COLORS.main,padding:8,paddingHorizontal:8,paddingVertical:8,borderRadius:50/2,alignItems:'center',color:"white"
    }
})

export default style