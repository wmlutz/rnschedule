import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Header from './components/Header';
import DrawnGrid from './components/DrawnGrid'
import TimeCol from './components/TimeCol'
import styles from './components/styles';
import HrLine from './components/HrLine'
import NowBar from './components/NowBar'
import ScheduledData from './components/ScheduledData'
import SmartScroll from './components/SmartScroll'
import {ContextProvider} from './components/ContextProvider'
import tinycolor from 'tinycolor2';

const RNSchedule = ({hourSize, dataArray, headerColor}) =>
  <ContextProvider hour_size={hourSize}>
    <View style={styles.container}>
      <Header header_color={tinycolor(headerColor).isValid() ? tinycolor(headerColor).toHexString() : '#476889'}/>
      <SmartScroll hour_size={hourSize}>
        <View style={styles.body}>
          <View style={styles.hour_col}>
            <TimeCol hour_size={hourSize}/>
          </View>
          <View style={styles.schedule_col}>
            <DrawnGrid/>
            <NowBar hour_size={hourSize}/>
            { !!dataArray && <ScheduledData dataArray={dataArray}/> }
          </View>
        </View>
      </SmartScroll>
    </View>
  </ContextProvider>

RNSchedule.propTypes = {
  hourSize: PropTypes.number,
  dataArray: PropTypes.array,
  headerColor: PropTypes.string,
}

RNSchedule.defaultProps = {
  hourSize: Dimensions.get('window').height / 13.34,
  headerColor: '#476889',
}

export default RNSchedule
