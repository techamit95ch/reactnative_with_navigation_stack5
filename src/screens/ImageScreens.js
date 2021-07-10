import React, { Component } from "react";
import { Text, StyleSheet, View,FlatList } from "react-native";
import ImageDetails from "../components/ImageDetails";
export default ImageScreens = () => {
  // render() {
  const imageDetails = [
    {
      id: 1,
      key: 1,
      title: "Forest",
      src: require("../../assets/Autumn_forest-800x450.jpg"),
    },
    {
        id: 2,
        key: 2,
        title: "Sea",
        src: require("../../assets/wave-ocean-sea-waves-hurricane-cyclone-storm.jpg"),
      },
    {
        id: 3,
        key: 3,
        title: "Mountain",
        src: require("../../assets/3.jpg"),
      },
    {
        id: 4,
        key: 4,
        title: "Desert",
        src: require("../../assets/p0973lkk.jpg"),
      }
  ];
  return (
    <View>
      <FlatList style
                data={imageDetails}
                keyExtractor={ friend=>friend.key }
                renderItem ={({item}) =>(<ImageDetails imageSrc={item.src} title={item.title} id={item.id}/>)}
                />
    </View>
  );
  // }
};

const styles = StyleSheet.create({});
