import React, {Component} from 'react';
import { View } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';
import {AppContext} from './ContextProvider';
import tinycolor from 'tinycolor2';

class CalStrip extends Component {
  render() {
    const {header_color} = this.props;
    var color1 = tinycolor(header_color);
    var text_color = color1.isDark() ? 'white' : 'black'
    return (
      <View>
        <AppContext.Consumer>
          {(context) =>
            <CalendarStrip
              calendarAnimation={{type: 'sequence', duration: 10}}
              daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: text_color}}
              style={{height: 100, paddingTop: 20, paddingBottom: 10}}
              calendarHeaderStyle={{color: text_color}}
              calendarColor={color1.toHexString()}
              dateNumberStyle={{color: text_color}}
              dateNameStyle={{color: text_color}}
              highlightDateNumberStyle={{color: text_color}}
              highlightDateNameStyle={{color: text_color}}
              disabledDateNameStyle={{color: 'grey'}}
              disabledDateNumberStyle={{color: 'grey'}}
              iconContainer={{flex: 0.1}}
              onDateSelected={(value) => context.setDate(value)}
              selectedDate={context.date}
            />
          }
        </AppContext.Consumer>
      </View>
    )
  }
}

export default CalStrip;
