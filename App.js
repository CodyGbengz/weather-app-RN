import React, { useState, } from 'react';
import { StyleSheet, View } from 'react-native';
import { Loading } from './components/Loading';
import Weather from './components/Weather'
import { registerRootComponent } from 'expo';


const App = () => {
  const [isLoading, setLoading] = useState(false)
  return (
    <View style={styles.container}>
      { isLoading ? <Loading /> : <Weather /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBDB7C',
    justifyContent: 'center',
  },
});

export default App;