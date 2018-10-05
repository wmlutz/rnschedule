import React from 'react';
import {View} from 'react-native'
import {AppContext} from './ContextProvider';
import ApptView from './ApptView';

const ScheduledData = ({dataArray}) =>
  <AppContext.Consumer>
    {(context) => {
      const data = procData(dataArray, context.date);
      return (
        <View style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
          {data.map((appt, i) => <ApptView key={i} appt={appt} hour_size={context.hour_size}/>)}
        </View>
      )
    }}
  </AppContext.Consumer>

const procData = (dataArray, date) =>
  dataArray.filter(appt =>
    date.isSame(appt.start, 'day') || date.isSame(appt.end, 'day')
  )

export default ScheduledData
