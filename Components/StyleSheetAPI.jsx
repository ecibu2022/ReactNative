import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function StyleSheetAPI() {
  return (
    <View>
        <Text style={myStyles.container}>StyleSheet API</Text>
    </View>
  )
}

export default StyleSheetAPI;

const myStyles=StyleSheet.create({
    container:{
        color: 'red',
        padding: 20,
        fontSize: 20
    }
})