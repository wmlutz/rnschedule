import React, {Component} from 'react';
import { View, Platform, Text, StyleSheet } from 'react-native'
import {AppContext} from './ContextProvider';
import tinycolor from 'tinycolor2';

const Header = ({header_color, left_icon, accent}) => {
    var color1 = tinycolor(header_color);
    var text_color = color1.isDark() ? '#fff' : '#000'
    var accent_color = tinycolor(accent);
    var accent_text_color = accent_color.isDark() ? '#fff' : '#000'

    return (
      <AppContext.Consumer>
        {(context) => {
          return (
            <View style={[styles.container, {backgroundColor: header_color}]} >
              <View style={styles.text_row}>
                { left_icon }
                <View style={styles.center}>
                  <View style={styles.day_box}>
                    <Text style={[styles.dotw, {color: accent_color}]}>{context.date.format("ddd")}</Text>
                    <View style={[styles.circle, {backgroundColor: accent_color}]}>
                      <Text style={[styles.day, {color: accent_text_color}]}>{context.date.format("D")}</Text>
                    </View>
                  </View>
                  <Text style={[styles.month, {color: text_color}]}>{context.date.format("MMMM")}</Text>
                </View>
                <Text style={[styles.right_text, {color: text_color}]}>Right</Text>
              </View>
            </View>
          )
        }}
      </AppContext.Consumer>
    )
  }

const styles = StyleSheet.create({
  container: {
    height: 56,
    marginTop: Platform.OS == "ios" ? 20 : 0,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 999,
  },
  text_row: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  center: {
    paddingLeft: 10,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    alignItems:'center',
    justifyContent: 'center',
  },
  day_box: {
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  day: {
    margin: 0,
    padding: 0,
    fontWeight: 'bold',
    fontSize: 15,
  },
  dotw: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  month: {
    fontSize: 20,
    paddingLeft: 10,
  },
  right_text: {
    textAlign: 'right',
  }
});

//   onDateSelected={(value) => context.setDate(value)}
//   selectedDate={context.date}

export default Header;
