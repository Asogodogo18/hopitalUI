import React from "react";
import style from "./style";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

const MessageList = ({ item }) => {
  return (
    <TouchableOpacity key={item.id} style={style.messageContainer}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
        }}
        style={style.msgImg}
      />

      <View style={style.messageInfo}>
        <View style={style.date_name}>
          <Text style={style.name}>{item.fullname}</Text>
          <Text>{item.date}</Text>
        </View>
        <Text>{item.last_msg}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageList;
