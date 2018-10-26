import procRows from './procRows';

const todayData = (dataArray, date1) => {
  
  if (!dataArray) { return [] }
    let date = new Date(date1)
    const today = dataArray.filter(appt => {
      apptStart = new Date(appt.start)
      apptEnd = new Date(appt.end)
      ret = sameDay(apptStart, date);
      ret1 = sameDay(apptEnd, date);
      return ret || ret1
    });
    return procRows(today);
}

function sameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

export default todayData;
