import {hrsToStart} from './hrsToPx';

const procRows = (inputData) => { // Predicated on sorting appts by start time
  let outputData = [];

  inputData.forEach(appt => {
    let index = outputData.findIndex((el) => overlaps(appt, el));

    if (index >= 0) {
      outputData[index].rowAppts.push(appt);;
      outputData[index].end = addToEnd(outputData[index].end, appt.end)
    } else {
      outputData.push({
        hrsBefore: hrsToStart(appt.start),
        start: appt.start,
        end: appt.end,
        rowAppts: [appt]
      })
    }
  })

  return outputData;
}

const overlaps = (a, b) => {
  // if ()
  // if b.start is between (and including) a.start and a.end
  // OR b.end is between (and including) a.start and a.end
}

const addToEnd = (sumEnd, addedEnd) => {
  // if addedEnd is before sumEnd return sumEnd
  // else return addedEnd
}

export default procRows;

// {
//   title: 'Appointment Alpha',
//   subtitle: '1st Appt',
//   start: moment(new Date(2018, new Date().getMonth(), new Date().getDate(), 13, 15)),
//   end: moment(new Date(2018, new Date().getMonth(), new Date().getDate(), 13, 105)),
//   color: 'red',
// }