const todayData = (dataArray, date) =>
  dataArray.filter(appt => date.isSame(appt.start, 'day') || date.isSame(appt.end, 'day'))

export default todayData;
