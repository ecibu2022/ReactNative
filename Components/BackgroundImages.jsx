import React from 'react'
import { ImageBackground, View, Text } from 'react-native'

function BackgroundImages() {
  return (
    <View>

        <ImageBackground
        source={require('../assets/favicon.png')}
        style={{ width: 300, height: 300, margin: 20, padding: 20, backgroundColor: '#000000', borderRadius: 20 }}>
        <Text style={{ justifyContent: 'center', textAlign: 'center', margin: 60, color: 'green' }}>background image</Text>
      </ImageBackground>

    </View>
  )
}

export default BackgroundImages