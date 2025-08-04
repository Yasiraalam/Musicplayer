import { JSX } from 'react';
import React from 'react';
import {
  StatusBar,
  Text,
  StyleSheet,
  SafeAreaView,
  View
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View> 
        <Text>
          Welcome to the New App Screen!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
