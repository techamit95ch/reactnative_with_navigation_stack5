// import { StatusBar } from 'expo-status-bar';
import * as React from "react";
// import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ paddingBottom: 48 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator> */}
      <HomeStack.Navigator initialRouteName="List">
        <HomeStack.Screen name="Home"
          component={HomeScreen}/>
          <HomeStack.Screen name="List"
          component={ListScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

