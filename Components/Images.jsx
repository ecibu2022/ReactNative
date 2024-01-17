import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

function Images() {
  return (
      <View style={styles.back}>
        <Image
          source={require('../assets/back.jpg')}
          style={styles.back.image}
        />
      </View> 

  )
}

export default Images

const styles = StyleSheet.create({
    back: {
      marginLeft: -340,
      image: {
        width: 30,
        height: 30,
        backgroundColor: '#eee',
      },
    }, 
  });