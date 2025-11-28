
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
  y: YEAR,
}

/**
 * Convert duration string to milliseconds
 * @param {string} duration - The duration string to convert
 * @returns {number} The duration in milliseconds
 */
export default (duration: string) => {
  if (typeof duration !== 'string') {
    throw new Error('Duration must be a non-empty string')
  }

  return duration
  .match(/[0-9]+(ms|[smhdwy])/g)
  ?.reduce(
    (acc, value) => {
      // Extract the numeric part and the unit part of the match
      const match = value.match(/^([0-9]+)(ms|[smhdwy])$/);
      if (!match) return acc;
      const num = Number(match[1]);
      const unit = match[2] as keyof typeof PERIOD;
      return acc + num * PERIOD[unit];
    },
    0,
  ) || 0
}
