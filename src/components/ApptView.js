import React from 'react';
import { View, Text } from 'react-native';
import tinycolor from 'tinycolor2';
import Colors from '../constants/colors';

const ApptView = ({appt}) =>{
  const color = tinycolor(appt.color).isValid() ? tinycolor(appt.color).toHexString() : Colors.red;
  return <View
    style={{
      width: '100%',
      height: appt.height,
      marginTop: appt.marginTop,
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

export default ApptView
