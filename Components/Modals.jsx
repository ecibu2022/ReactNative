import {React, useState} from 'react'
import { StyleSheet, View, Button, Modal, Text, Image } from 'react-native';

function Modals() {
    const [isModalVisible, setisModalVisible] = useState(false);

  return (
   <View>
    <Button
      title='Open Modal'
      onPress={()=>setisModalVisible(true)}/>

      {/* Modal */}
      <Modal 
      visible={isModalVisible}
      animationType='slide'
      // Closes the Modal immediately
      onRequestClose={()=>setisModalVisible(false)}
      presentationStyle='formSheet'>
        {/* Modal Content */}
        <View style={styles.modal}>
          <Text>This is  a modal</Text>
          <Image
          source={
            require('../assets/favicon.png')
          }
           style={{
            width: 100,
            height: 100,
            margin: 40,
           }}
        />
          <Button
          title='Close' 
          color='red'
          onPress={()=>setisModalVisible(false)}
          style={{
            width: 100,
            height: 40
          }}/>
        </View>
      </Modal>

   </View>
  )
}

const styles=StyleSheet.create({
    modal: {
        backgroundColor: '#eee',
        alignItems: 'center',
        padding: 40,
        justifyContent: 'center',
        marginTop: 200,
        marginLeft:100,
        marginRight: 100,
      },
    }
)

export default Modals