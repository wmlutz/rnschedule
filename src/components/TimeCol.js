import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

const TimeCol = ({hour_size}) =>
  <View style={{paddingTop: hour_size / 2}}>
    {[...Array(24)].map((val, i) =>
      <View style={[styles.box, {height: hour_size}]} key={i}>
        <Text style={styles.textStyle}>{moment().startOf('day').add(i + 1, 'hours').format("h A")}</Text>
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
