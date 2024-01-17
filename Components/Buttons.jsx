import React from 'react'
import { Button, View } from 'react-native'

function Buttons() {
  return (
    <View>
        <Button
        title='Press'
        onPress={() => {
          alert('Danger Waau thanks again')
        }} />

    </View>
  )
}

export default Buttons