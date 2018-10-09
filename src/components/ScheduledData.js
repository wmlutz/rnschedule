import React from 'react';
import {View} from 'react-native'
import {AppContext} from './ContextProvider';
import ApptView from './ApptView';
import todayData from '../services/todayData';

const ScheduledData = ({dataArray}) =>
  <AppContext.Consumer>
    {(context) => {
      const data = todayData(dataArray, context.date);
      return (
        <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
          {data.map((appt, i) => <ApptView key={i} appt={appt} />)}
        </View>
      )
    }}
  </AppContext.Consumer>

export default ScheduledData
