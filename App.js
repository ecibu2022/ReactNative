import {React} from 'react';
import { 
  StyleSheet, 
  Text,
   View, 
   TextInput, 
   Image, 
   ImageBackground,
    Button, 
    Pressable, ActivityIndicator
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Modals from './Components/Modals.jsx';

const App = () => {

  return (
    <View style={styles.container}>

      <View style={styles.back}>
        <Image
          source={require('./assets/back.jpg')}
          style={styles.back.image}
        />
      </View>

{/* Modal */}
<Modals />

      <Image
        source={require('./assets/favicon.png')}
        style={{ width: 100, height: 100, margin: 20 }}
      />
      
      {/* Activity Indicator show a loading that shows what is happening in the activity  it is the same as Circular Loading dialog*/}
      <ActivityIndicator />
      <ActivityIndicator size='small'/>
      <ActivityIndicator size='large'/>
      {/* Adding a color */}
      <ActivityIndicator size='large' color='red'/>

      <TextInput
        style={{ height: 40, margin: 10, backgroundColor: '#ffffff', width: 350, padding: 15, borderColor: '#000000', borderRadius: 12 }}
        placeholder="Password" secureTextEntry
      />    

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
      source={require('./assets/favicon.png')}
      style={{ width: 100, height: 100, margin: 20 }}
    />
    </Pressable>

      <Button
        title='Press'
        onPress={() => {
          alert('Danger Waau thanks again')
        }} />

      <ImageBackground
        source={require('./assets/favicon.png')}
        style={{ width: 300, height: 300, margin: 20, padding: 20, backgroundColor: '#000000', borderRadius: 20 }}>
        <Text style={{ justifyContent: 'center', textAlign: 'center', margin: 60, color: 'green' }}>background image</Text>
      </ImageBackground>

{/* Status bar */}
      <StatusBar backgroundColor='#fff' />
      {/* Hidding StatusBar use hidden attribute */}
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    marginLeft: -340,
    image: {
      width: 30,
      height: 30,
      backgroundColor: '#eee',
    },
  }, 
});
