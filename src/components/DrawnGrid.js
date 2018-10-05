import React from 'react';
import { View } from 'react-native'
import HrLine from './HrLine';

const DrawnGrid = () =>
  [...Array(24)].map((val, i) => <HrLine key={i} />)

export default DrawnGrid;
