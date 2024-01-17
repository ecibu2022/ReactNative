import React from 'react'
import { View, Alert, Button } from 'react-native'

function Alerts() {
  return (
    <View>
        <Button
        title='Show Alert'
        onPress={()=>{
            Alert.alert("Alert Dialog example")
        }}
        />
    </View>
  )
}

export default Alerts