import React from 'react'
import { View, Alert, Button, StyleSheet } from 'react-native'

function Alerts() {
  return (
    <View 
    style={styles.container}>
        <Button
        title='Show Alert'
        onPress={()=>{
            Alert.alert("Alert Dialog example")
        }}
        />

        <View style={styles.container}>
          {/* Alert with title and message */}
        <Button
        title='Alert 2'
        onPress={()=>{
          Alert.alert("Title", "Message")
        }}
        />
        </View>

        <View style={styles.container}>
          {/* Alert with title and message */}
        <Button
        title='Buttons Alert'
        onPress={()=>{
          Alert.alert("Title", "Message", [
            {
              text: 'Cancel',
              onPress: ()=>{
                console.log("Cancel pressed")
              }
            },
            {
              text: 'OK',
              onPress: ()=>{
                console.log("OK pressed")
              }
            }
          ])
        }}
        />
        </View>

    </View>
  )
}

export default Alerts

const styles=StyleSheet.create({
  container:{
    margin: 10,
    justifyContent: 'center',
  }
});