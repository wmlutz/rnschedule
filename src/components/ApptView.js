import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tinycolor from 'tinycolor2';
import Colors from '../constants/colors';
import {hrsToStart} from '../services/hrsToPx';

const ApptView = ({topTime, appt, hour_size, onEventPress}) => {
  const color = tinycolor(appt.color).isValid() ? tinycolor(appt.color).toHexString() : Colors.red;
  const margin = hrsToStart(appt.start, topTime) * hour_size;

  return <View
    style={{
      flex: 1,
      marginTop: margin,
      height: appt.height,
      backgroundColor: color,
      borderRadius: 5,
      padding: 2,
      overflow: 'hidden',
    }}
  >
    <TouchableOpacity
      onPress={() => onEventPress(appt)}
      style={{margin: 0, padding: 0, flex: 1}}
    >
      <Text style={[{fontWeight: '600'},tinycolor(color).isDark() && {color: 'white'}]}>
        {appt.title}
      </Text>
      { !!appt.subtitle
        ? <Text style={[{fontWeight: '200'},tinycolor(color).isDark() && {color: 'white'}]}>
            {appt.subtitle}
          </Text>
        : null
      }
    </TouchableOpacity>
  </View>
}

export default ApptView;
