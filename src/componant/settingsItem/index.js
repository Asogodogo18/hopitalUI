import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";
import style from "./style";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../outils/constant";

const SettingsItem = ({item}) => {
    return (
        <TouchableOpacity style={style.container}>
            <Text>{item.libelle}</Text>
            <AntDesign name="arrowright" style={{}} size={24} color={COLORS.main}/>
        </TouchableOpacity>
    )
}

export default SettingsItem
