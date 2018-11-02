import {duration} from './hrsToPx'

const procData = (dataArray, hour_size) => {
  let setData = dataArray.map(appt => {
    appt.height = duration(appt.start, appt.end) * hour_size;
    return appt;
  })

  setData.sort((a, b) => a.start - b.start);

  return setData;
}

export default procData;
