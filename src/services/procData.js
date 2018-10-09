import moment from 'moment';

const procData = (dataArray, hour_size) => {
  return dataArray.map(appt => {
    appt.start = moment(appt.start);
    appt.end = moment(appt.end);
    appt.marginTop = hoursToStart(appt.start) * hour_size
    appt.height = duration(appt.start, appt.end) * hour_size;
    return appt;
  })
}

const hoursToStart = (start) => start.diff(start.clone().startOf('day'), 'hours', true)

const duration = (start, end) => end.diff(start, 'hours', true)

export default procData;


// {
//   title: 'Appointment Title',
//   subtitle: 'With a Person',
//   start: new Date(2018, month, day, hour, minute),
//   end: new Date(2018, month, day, hour, minute + 90),
//   color: tinycolor.random().toHexString(),
// }
