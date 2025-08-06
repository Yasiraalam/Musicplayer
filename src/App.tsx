import { JSX } from 'react';
import React,{useState,useEffect} from 'react';
import MusicPlayer from './screens/MusicPlayer';
import {
  StatusBar,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator
} from 'react-native';
import {setupPlayer,addTracks} from '../musicPlayerServices'; 

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  async function setup() {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTracks();
    }

    setIsPlayerReady(isSetup);
  }
  useEffect(()=>{
     setup();
  },[])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },

});

export default App;
