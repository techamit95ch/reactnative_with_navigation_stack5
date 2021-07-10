import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default ImageDetails = ({ imageSrc,title }) => {
//   export default  ImageDetails =props=> {

  return (
    <View>
      <Image source={imageSrc} />
      <Text> Title : {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
 