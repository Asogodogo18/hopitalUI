import FakeCoversation from "../../fakeData/fakeConversation";
import MessageInput from "../../componant/messageInput";
import MessageView from "../../componant/message";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";

const MessageDetails = ({ route }) => {
  const { item } = route.params;
  console.log(route);
  const naviagtion = useNavigation();
  useEffect(() => {
    naviagtion.setOptions({title:item.fullname});
  }, []);
  return (
    <View style={{flex:1}}>
     <FlatList data={FakeCoversation} keyExtractor={item=>item.id} renderItem={({item})=>{
        return<MessageView item={item}/>
     }}/>
     <MessageInput/>
    </View>
  );
};

export default MessageDetails;
