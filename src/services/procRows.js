import {hrsToStart} from './hrsToPx';

const procRows = (inputData) => {
  let outputData = [];

  inputData.forEach(appt => {
    let index = outputData.findIndex((el) => !!el.range && el.range.overlaps(appt.range));

    if (index >= 0) {
      outputData[index].rowAppts.push(appt);
      outputData[index].range = outputData[index].range.add(appt.range);
      outputData[index].hrsBefore = hrsToStart(outputData[index].range.start);
    } else {
      outputData.push({
        hrsBefore: hrsToStart(appt.start),
        range: appt.range.clone(),
        rowAppts: [appt]
      })
    }
  })

  return outputData;
}

export default procRows;
