import React, { useState  } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Weather = () => {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>
            <MaterialCommunityIcons size={16} name="map-marker" color={'#000'} />
            Bali
        </Text>
        <MaterialCommunityIcons size={16} name="calendar" colo={'#000'} ></MaterialCommunityIcons>
      </View>
      <View style={styles.currentIcon}>
        <MaterialCommunityIcons size={180} name="weather-pouring" color={'#00'} />
      </View>
      <View style={styles.currentWeather}>
          <Text>Raining</Text>
          <Text style={{fontSize: 60}}>23<MaterialCommunityIcons size={30} name="temperature-celsius"></MaterialCommunityIcons></Text>
          <View style={{flex: 1, flexDirection: 'row', marginLeft: '30%', marginRight: '30%'}}>
          <Text style={{flex: 0.5, fontSize: 10}}><MaterialCommunityIcons size={16} name="weather-windy"></MaterialCommunityIcons> 22km/h</Text>
          <Text style={{flex: 0.5, fontSize: 10}}><MaterialCommunityIcons size={16} name="water-percent"></MaterialCommunityIcons> 32%</Text>
          </View>
      </View>
      <View style={styles.list}>
          <View style={styles.listCard}>
              <Text style={{fontSize: 10}}>9:00 AM</Text>
              <MaterialCommunityIcons size={50} name="weather-cloudy" color={'#fff'}></MaterialCommunityIcons>
              <Text style={{fontSize: 25, fontWeight: 'bold' }}>30<MaterialCommunityIcons size={10} name="temperature-celsius"></MaterialCommunityIcons></Text>
          </View>
          <View style={styles.listCard}>
              <Text style={{fontSize: 10}}>9:00 AM</Text>
              <MaterialCommunityIcons size={50} name="weather-sunny" color={'#fff'}></MaterialCommunityIcons>
              <Text style={{fontSize: 25, fontWeight: 'bold' }}>30<MaterialCommunityIcons size={10} name="temperature-celsius"></MaterialCommunityIcons></Text>
          </View>
          <View style={styles.listCard}>
              <Text style={{fontSize: 10}}r>9:00 AM</Text>
              <MaterialCommunityIcons size={50} name="weather-sunny" color={'#fff'}></MaterialCommunityIcons>
              <Text style={{fontSize: 25, fontWeight: 'bold' }}>30<MaterialCommunityIcons size={10} name="temperature-celsius"></MaterialCommunityIcons></Text>
          </View>
          <View></View>
          <View></View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6DFAE5',
      justifyContent: 'center',
      padding: '5%'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
    },
    location: {
      flex: 1,
      justifyContent: 'center',
      fontWeight: 'bold',
    },
    currentIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '15%',
        marginBottom: '5%'
    },
    currentWeather: {
        flex: 1,
        textAlign: 'center',
        marginBottom: '10%'
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '60%'
        
    },
    listCard: {
        flex: 0.3,
        borderRadius: '9%',
        backgroundColor: '#ddd',
        opacity: '0.7',
        textAlign: 'center',
        height: '145px',
        justifyContent: 'space-evenly'
    }

  });

export default Weather;