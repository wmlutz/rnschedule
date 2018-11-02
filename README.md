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

```js
import React from 'react';
import RNSchedule from 'rnschedule';

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
    onEventPress={(appt) => console.log(appt)}
  />

export default App
```

## Demo

![Gif Demo](https://github.com/wmlutz/rnschedule/blob/screenshots/assets/demo1.gif)

## Features

* Moving "now" bar.
* Initial loads view on today centered on "now."
* Customizable appointment colors.
* Scaled size of an hour to improve readability on various device sizes.
* Adjustable hour sizing to make it size to whatever you want.

## Properties API

None of the following properties are required. A simple <RNSchedule /> Will still render an empty schedule.

| Prop | Description | Default | Type |
|---|---|---|---|
|**`hourSize`**|Change the width of lines between hours.|`depends on screen size`| Number |
|**`headerColor`**|Background color of the calendar header strip. Acceptable formats: Hex, RGB(A), HSL(A), HSV(A), and named strings. See [Tinycolor](https://github.com/bgrins/TinyColor) for all formats.|`#F5F5F6`| String or Object |
|**`dataArray`**|Array of date appointment objects. See below example.|`Empty Array`| Array |
|**`leftIcon`**|Include your own icon to the left of the day number.|`Null`| React Component |
|**`accentColor`**|Color of day circle in top left. Accepts [Tinycolor](https://github.com/bgrins/TinyColor) formats.|`#1976d2`| String or Object |
|**`status_bar`**|Do you want extra margin for the status bar for iOS?|`true`| Boolean |
|**`onEventPress`**|Return function for pressing a schedule event. Returns original data.|`null`| Function |

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

For onEventPress function - additional properties may be passed so long as they don't interfere with the above api.

## Built With

* [React Native Calendars (Wix)](https://github.com/wix/react-native-calendars) - Day selection
* [Tinycolor](https://github.com/bgrins/TinyColor) - Smart Color Management
* [Moment](http://momentjs.com/) - Date/Time manipulation
* [React Native Collapsible](https://github.com/oblador/react-native-collapsible) - Calendar drop down

Thanks to these wonderful people for making some great stuff.

## Contributing

I'm looking to add new contributors/maintainers to help out. So if you like this repo and want to help make it better let me know.

## To-Do List

The component is very much under-construction. Want to help build something? Here is my to-do list:

* Provide more control over Day Selector Styling.
* Work on speed optimization.
* Swipe to change days.
* Full Day appointments.
* Multi-Day appointments.
* Option for dots on days with appts.
* Events longer than 24 hours.
* Spec UI to Material Design.
* Build out testing.
* Contribution guidelines.
* Break out schedule view as stand-alone without cal select header.
* Fix Shadowing on Header - feels weird.

## Special Thanks

* Special thanks to Wix's RN Calendar for getting things started and providing inspiration.
