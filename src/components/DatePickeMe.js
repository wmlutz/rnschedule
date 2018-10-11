import React from 'react';
import {AppContext} from './ContextProvider';
import Collapsible from 'react-native-collapsible';
import { Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Colors from '../constants/colors';

const DatePickeMe = () =>
  <AppContext.Consumer>
    {(context) =>
      <Collapsible collapsed={!context.isDatePickerVisible}>
        <Calendar
          onDayPress={(day) => context.setDate(day.dateString)}
          monthFormat={'MMMM yyyy'}
          hideExtraDays={true}
          firstDay={1}
          markedDates={{
            [context.date.format('YYYY-MM-DD')]: {selected: true, selectedColor: Colors.light_blue},
            [moment().format('YYYY-MM-DD')]: {selected: true, selectedColor: Colors.blue},
          }}
        />
      </Collapsible>
    }
  </AppContext.Consumer>


export default DatePickeMe;
