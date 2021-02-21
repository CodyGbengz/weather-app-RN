import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Loading = () => (
    <View style={styles.container}>
      <MaterialCommunityIcons size={150} name="weather-pouring" color={'#000'} />
    </View>
  )


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBDB7C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});