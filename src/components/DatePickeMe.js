import React from 'react';
import {AppContext} from './ContextProvider';
import Collapsible from 'react-native-collapsible';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Colors from '../constants/colors';

const DatePickeMe = () =>
  <AppContext.Consumer>
    {(context) =>
      <Collapsible collapsed={!context.isDatePickerVisible}>
        <Calendar
          onDayPress={(day) => {
            console.log(day, new Date(day.year, day.month, day.day))
            context.setDate(new Date(day.year, day.month, day.day))
          }}
          monthFormat={'MMMM yyyy'}
          hideExtraDays={true}
          firstDay={1}
          markedDates={{
            [moment(context.date.getTime()).format('YYYY-MM-DD')]: {selected: true, selectedColor: Colors.light_blue},
            [moment().format('YYYY-MM-DD')]: {selected: true, selectedColor: Colors.blue},
          }}
        />
        <View style={{backgroundColor: 'black', width: '100%', height: 1}} />
      </Collapsible>
    }
  </AppContext.Consumer>


export default DatePickeMe;
