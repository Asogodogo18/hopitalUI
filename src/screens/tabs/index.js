import Home from "../Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Mressage from "../Message";
import Parametre from "../Parametre";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown:false
      }}
    >
      <Tab.Screen
        name="tabs_home"
        component={Home}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
           name="Messages"
           component={Mressage}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
       name="Parametre"
       component={Parametre}

    
        options={{
          tabBarLabel: "Parametre",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
