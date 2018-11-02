import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TimeArr from '../constants/time';

const TimeCol = ({hour_size}) =>
  <View style={{paddingTop: hour_size / 2}}>
    {TimeArr.map(val =>
      <View style={[styles.box, {height: hour_size}]} key={val}>
        <Text style={styles.textStyle}>{val}</Text>
      </View>
    )}
  </View>

let styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems:'center',
  },
  textStyle:{
    textAlign:'center',
    color: '#BABABA',
  }
})



export default TimeCol;
