import React, {Component} from 'react';
import { View, Platform, Text, StyleSheet } from 'react-native'
import {AppContext} from './ContextProvider';
import tinycolor from 'tinycolor2';

class Header extends Component {
  render() {
    const {header_color} = this.props;
    var color1 = tinycolor(header_color);
    var text_color = color1.isDark() ? '#fff' : '#000'

    return (
      <AppContext.Consumer>
        {(context) =>
          <View style={styles.container} >
            <View style={styles.text_row}>
              <Text style={styles.left_text}>Left with long sd asdf text</Text>
              <Text style={styles.center_text}>Title</Text>
              <Text style={styles.right_text}>Right</Text>
            </View>
          </View>

          //   onDateSelected={(value) => context.setDate(value)}
          //   selectedDate={context.date}
        }
      </AppContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    marginTop: Platform.OS == "ios" ? 20 : 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'green'
  },
  text_row: {
    flexDirection: 'row',
    alignItems:'center',
    borderColor:'red',
    borderWidth:1
  },
  left_text: { flex: 1, borderColor:'red', borderWidth:1},
  center_text: { flex: 1, borderColor:'red', borderWidth:1, textAlign: 'center'},
  right_text: { flex: 1, borderColor:'red', borderWidth:1, textAlign: 'right'}
});

export default Header;
