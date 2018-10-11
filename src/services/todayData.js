import procRows from './procRows';

const todayData = (dataArray, date) => {
  if (!dataArray) { return [] }
  const today = dataArray.filter(appt => date.isSame(appt.start, 'day') || date.isSame(appt.end, 'day'));
  return procRows(today);
}

export default todayData;
