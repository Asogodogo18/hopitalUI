import BottomTabs from "../screens/tabs";
import Home from "../screens/Home";
import MessageDetails from "../screens/MessageDetails";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="MessageDetails" component={MessageDetails} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
