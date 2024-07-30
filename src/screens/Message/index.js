import MessageList from "../../componant/messageListe";
import React from "react";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FakeChat } from "../../fakeData/fakeChat";

const Mressage = ({}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={FakeChat}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={style.root}
      renderItem={({ item }) => {
        return <MessageList item={item} navigation={navigation} />;
      }}
    />
  );
};

export default Mressage;
