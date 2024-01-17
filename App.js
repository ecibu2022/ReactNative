import {React} from 'react';
import { 
  StyleSheet,
   View,
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Alerts from './Components/Alerts.jsx';
import Modals from './Components/Modals.jsx';
import TextInputs from './Components/TextInputs.jsx';
import Images from './Components/Images.jsx';
import ActivityIndicators from './Components/ActivityIndicators.jsx';
import PressableImages from './Components/PressableImages.jsx';
import Buttons from './Components/Buttons.jsx';
import BackgroundImages from './Components/BackgroundImages.jsx';
import StyleSheetAPI from './Components/StyleSheetAPI.jsx';

const App = () => {

  return (
    <View style={styles.container}>

      {/* <Alerts/> */}
      {/* <TextInputs/>
      <Images/>
      <Modals />
      <ActivityIndicators />
      <PressableImages/>
      <Buttons/>
      <BackgroundImages/> */}
      <StyleSheetAPI/>

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
});
