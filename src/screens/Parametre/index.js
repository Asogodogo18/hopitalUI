import FakeSetting from "../../fakeData/fakeSetting";
import React from "react";
import SettingsItem from "../../componant/settingsItem";
import style from "./style";
import { FlatList, Image, Text, View } from "react-native";

const Parametre = () => {
  return (
    <View style={style.container}>
      {/* header */}
      <View style={style.header}>
        <Image source={require("../../../assets/12.jpg")} style={style.img} />
        <View style={style.userInfo}>
          <Text style={style.userName}>Cheick abba Sogodogo</Text>
          <Text style={style.userEmail}>abbasogodogo@gmail.com</Text>
          <Text>90614731</Text>
        </View>
      </View>
      {/* fi header */}
      <FlatList
        data={FakeSetting}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SettingsItem item={item} />;
        }}
      />
    </View>
  );
};

export default Parametre;
