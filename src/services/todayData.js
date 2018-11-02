import procRows from './procRows';

const todayData = (dataArray, date) => {
  console.log('today data', date, dataArray)
  if (!dataArray) { return [] }

  const today = dataArray.filter(appt => {
    ret = sameDay(appt.start, date);
    ret1 = sameDay(appt.end, date);
    return ret || ret1;
  });
  return procRows(today);
}

const sameDay = (d1, d2) => {
  let boolDay = d1.getDate() === d2.getDate() &&
  d1.getMonth() === d2.getMonth() && 
  d1.getFullYear() === d2.getFullYear();
  console.log('same-day', d1, d2, boolDay)
  return boolDay
}

export default todayData;
