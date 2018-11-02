import {hrsToStart} from './hrsToPx';

const procRows = (inputData) => { // Predicated on appts sorted by start
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
    console.log('output data', outputData)
  })

  return outputData;
}

const overlaps = (a, b) => (a.start <= b.start && b.start <= a.end) || (a.start <= b.end && b.end <= a.end);

const addToEnd = (sumEnd, addedEnd) => sumEnd > addedEnd ? sumEnd : addedEnd

export default procRows;