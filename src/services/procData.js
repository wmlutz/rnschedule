import {duration} from './hrsToPx'
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

const procData = (dataArray, hour_size) => {
  let setData = dataArray.map(appt => {
    appt.start = moment(appt.start);
    appt.end = moment(appt.end);
    appt.height = duration(appt.start, appt.end) * hour_size;
    appt.range = moment.range(appt.start, appt.end);
    return appt;
  })

  setData.sort((a, b) => a.start - b.start);

  return setData;
}

export default procData;
