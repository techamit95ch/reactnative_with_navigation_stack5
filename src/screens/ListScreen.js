import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

export default ListScreen =()=> {
    const friends = [ 
        {_id:1, name: '#F1'},
        {_id:2, name: '#F2'},
        {_id:3, name: '#F3'},
        {_id:4, name: '#F4'},
        {_id:5, name: '#F5'},
        {_id:6, name: '#F6'},
        {_id:7, name: '#F7'},
        {_id:8, name: '#F8'},
];
    // render() {
        return (
            <View>
                <FlatList style
                data={friends}
                keyExtractor={ friend=>friend.name }
                renderItem ={({item}) =>(<Text>{item.name}</Text>)}
                />
            </View>
        )
    // }
}

const styles = StyleSheet.create({})
