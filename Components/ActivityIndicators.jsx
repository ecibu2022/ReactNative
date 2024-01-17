import React from 'react'
import { View, ActivityIndicator } from 'react-native'

function ActivityIndicators() {
  return (
    <View>
         {/* Activity Indicator show a loading that shows what is happening in the activity  it is the same as Circular Loading dialog*/}
      <ActivityIndicator />
      <ActivityIndicator size='small'/>
      <ActivityIndicator size='large'/>
      {/* Adding a color */}
      <ActivityIndicator size='large' color='red'/> 
    </View>
  )
}

export default ActivityIndicators