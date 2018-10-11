export const hrsToStart = (appt_start, top = null) => {
  const begin = !!top ? top : appt_start.clone().startOf('day')
  return appt_start.diff(begin, 'hours', true)
}

export const duration = (start, end) => end.diff(start, 'hours', true)
