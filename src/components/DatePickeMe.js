import React, {Component} from 'react';
import {View, Modal, Text} from 'react-native';
import {AppContext} from './ContextProvider';
import DateTimePicker from 'react-native-modal-datetime-picker';

class DatePickeMe extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) =>
          <DateTimePicker
            isVisible={context.isDatePickerVisible}
            onConfirm={context.setDate}
            onCancel={context.hideDateTimePicker}
          />
        }
      </AppContext.Consumer>
    )
  }
}

export default DatePickeMe;
