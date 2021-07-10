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
import ImageScreens from "./src/screens/ImageScreens";
import { View } from "react-native";
import { Appbar } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
export default App = () => {
  return (
    // <View>
    
    <NavigationContainer>
      {/* <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ paddingBottom: 0  }}
        
        
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }
          }
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarLabel: "List",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-list" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator> */}
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home"
          component={HomeScreen}/>
          <HomeStack.Screen name="List"
          component={ListScreen}/>
          <HomeStack.Screen name="Image" component={ImageScreens}/>
      </HomeStack.Navigator>
    </NavigationContainer>
    // </View>
  );
};

