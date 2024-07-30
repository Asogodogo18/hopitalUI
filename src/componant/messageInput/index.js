import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import style from "./style";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const MessageInput = () => {
    return (
        <View style={style.container}>
            <TextInput style={style.input} placeholder="Message ici !!!!!"/>
            <TouchableOpacity>

            <MaterialCommunityIcons name="send" style={style.send} size={24}/>
            </TouchableOpacity>
        </View>
    )
}

export default MessageInput
