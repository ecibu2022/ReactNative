import React from 'react'
import { View, Pressable, Image } from 'react-native'

function PressableImages() {
  return (
    <View>
        {/* Making Image to be clicked */}
    <Pressable 
    onPress={()=>{
      alert('Image Clicked')
    }}

    onLongPress={()=>{
      alert('Image long pressed')
    }}
    
    onPressOut={()=>{
      alert('Image Pressed Out')
    }}
    > 
    <Image
    source={require('../assets/favicon.png')}
    style={{ width: 100, height: 100, margin: 20 }}
  />
  </Pressable>
  
  </View>
  )
}

export default PressableImages