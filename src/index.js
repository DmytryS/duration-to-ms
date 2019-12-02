
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const YEAR = DAY * 365.25

const PERIOD = {
  ms: 1,
  s: SECOND,
  m: MINUTE,
  h: HOUR,
  d: DAY,
  w: WEEK,
  y: YEAR
}

export default (duration) => duration.match(/[0-9]+(ms|[smhdwy])/g)
  .reduce(
    (acc, value) => acc += value.replace(/(ms|[smhdwy])/g, '') * PERIOD[value.slice(-1)],
    0,
  )