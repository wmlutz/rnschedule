# React Native Schedule View

This React Native component provides a scheduling view with space for unused time. Similar to Google Calendar's Day View.

## Installing

Installing is pretty simple:

```
npm install rnschedule
```

OR

```
yarn add rnschedule
```

## Example

```
import React from 'react';
import RNSchedule from './component/RNSchedule';

const data = [
    {
      title: 'Lunch Appointment',
      subtitle: 'With Harry',
      start: new Date(2018, 11, 2, 13, 20),
      end: new Date(2018, 11, 2, 14, 20),
      color: '#390099',
    }
  ]

const App = () =>
  <RNSchedule
    dataArray={data}
  />

export default App
```

## Features

* Moving "now" bar.
* Initial loads view on today centered on "now."
* Customizable appointment colors.
* Scaled size of an hour to improve readability on various device sizes.
* Adjustable hour sizing to make it whatever you want.

## Properties API

None of the following properties are required. A simple <RNSchedule /> Will still render an empty schedule.

| Prop | Description | Default |
|---|---|---|
|**`hourSize`**|Change the width of lines between hours.|`depends on screen size`|
|**`headerColor`**|Color of the calendar header strip. Acceptable formats: Hex, RGB(A), HSL(A), HSV(A), and named strings. See [Tinycolor](https://github.com/bgrins/TinyColor) for all formats.|`#476889`|
|**`dataArray`**|Array of date appointment objects. See below example.|`Empty Array`|

## Data Array Appt Objects

The dataArray prop must be an Array of appointment objects with the following format.
```
[
  {
    title: 'Lunch Appointment',
    subtitle: 'With Harry',
    start: new Date(2018, 11, 2, 13, 20),
    end: new Date(2018, 11, 2, 14, 20),
    color: '#390099'
  }
]
```

##### Appt Object API

| Key | Description | Type | Req |
|---|---|---|---|
|**`title`**|Top title for the appointment.| String |`Required`|
|**`subtitle`**|Slightly less bolded subtitle.| String |`Not Required`|
|**`start`**|When the appointment starts.| Date |`Required`|
|**`end`**|When the appointment ends.| Date |`Required`|
|**`color`**|Background color for the appointment.| [Tinycolor](https://github.com/bgrins/TinyColor) Accepted String/Object |`Not Required`|

## Built With

* [React Native Calendar Strip](https://github.com/BugiDev/react-native-calendar-strip) - Calendar section strip
* [Tinycolor](https://github.com/bgrins/TinyColor) - Smart Color Management
* [moment](http://momentjs.com/) - Time manipulation

Thanks to these wonderful people for making some great stuff.

## Contributing

I'm looking to add new contributors/maintainers to help out. So if you like this repo and want to help make it better let me know.

## To-Do List

The component is very much under-construction. Want to help build something? Here is my to-do list:

* Fix overlapping appointment issues.
* Provide more control over Calendar Strip Styling.
* Work on speed optimization.
* Make momentjs date objects acceptable inputs.
* Add drop down calendar picker to date selection strip.
* Add onPress method for appointments.
* Swipe to change days.
* Full Day appointments.
* Multi-Day appointments.
* Events longer than 24 hours.
* Spec UI to Material Design
* Build out testing.
* Contribution guidelines.

## Special Thanks

* Special thanks to Wix's RN Calendar for getting things started and providing inspiration.
