import React from "react";
import style from "./style";
import { Image, Text, TouchableOpacity, View } from "react-native";

const SymptomItem = ({ item }) => {
  return (
    <TouchableOpacity style={style.item}>
      <Image source={require("../../../assets/12.jpg")} style={style.itemImg} />
      <Text> {item.libelle} </Text>
    </TouchableOpacity>
  );
};

export default SymptomItem;
