import React, { Component } from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

export default HomeScreen = ({navigation}) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text> Home Screen textInComponent </Text>
      <Button title="View to List" onPress={()=>navigation.navigate('List')}/>
      <Button title="View to Image" onPress={()=>navigation.navigate('Image')}/>
      <TouchableOpacity  >
        <Text > Go to List</Text>
        <Text > Go to Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
