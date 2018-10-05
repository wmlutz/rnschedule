import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {AppContext} from './ContextProvider';

const HrLine = ({color, width}) =>
  <AppContext.Consumer>
    {(context) =>
      <View
        style={{
          width: '100%',
          paddingTop: context.hour_size - width,
          borderBottomColor: color,
          borderBottomWidth: width,
        }}
      />
    }
  </AppContext.Consumer>

HrLine.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

HrLine.defaultProps = {
  color: '#BABABA',
  width: 1,
};

export default HrLine;
