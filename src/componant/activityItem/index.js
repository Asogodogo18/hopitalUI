import React from "react";
import SVG_HOSPITAL from "../../../assets/hospital.svg";
import Styles from "./style";
import { Text, TouchableOpacity, View } from "react-native";

const ActivityItem = ({item}) => {
    return (
        <TouchableOpacity style={Styles.scrollableItem}>
        <SVG_HOSPITAL width={60} height={60}/>
        <Text style={Styles.mainTex}>{item.mainText}</Text>
        <Text style={Styles.subText}>{item.subText}</Text>
      </TouchableOpacity>
    )
}

export default ActivityItem
