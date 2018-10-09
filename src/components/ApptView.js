import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import tinycolor from 'tinycolor2';
import Colors from '../constants/colors';

const ApptView = ({appt, hour_size}) =>{
  const color = tinycolor(appt.color).isValid() ? tinycolor(appt.color).toHexString() : Colors.red;
  return <View
    style={{
      width: '100%',
      height: endProc(appt.start, appt.end, hour_size),
      marginTop: startProc(appt.start, hour_size),
      backgroundColor: color,
      position: 'absolute',
      borderRadius: 5,
      padding: 2,
      overflow: 'hidden',
    }}
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

  </View>
}
const startProc = (start, hour_size) => {
  var midnight = new Date(start.getTime());
  midnight.setHours(0,0,0,0);
  return (((start-midnight)/3600000) * hour_size)
}

const endProc = (start, end, hour_size) => ((end-start)/3600000) * hour_size

export default ApptView
