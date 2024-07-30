import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styles from "./style";
import { Text, View } from "react-native";
import { COLORS } from "../../outils/constant";

const MessageView = ({ item }) => {
  const isMine = () => {
    return item.user.id === 1;
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMine() ? COLORS.main : "white",
          alignSelf: isMine() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text
        style={{
          color: isMine() ? "white" : null,
        }}
      >
        {item.message}
      </Text>
      <Text >{dayjs(item.creatAt).fromNow(true)}</Text>
    </View>
  );
};

export default MessageView;
