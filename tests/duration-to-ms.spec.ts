import durationToMs from '../src/index'
// import { expect } from 'chai'

describe('durationToMs', () => {
  it('should convert 1w into ms', function() {
    expect(durationToMs('1w')).toEqual(604800000)
  })

  it('should convert 1m to ms', function() {
    expect(durationToMs('1m')).toEqual(60000)
  })

  it('should convert 1d to ms', function() {
    expect(durationToMs('1d')).toEqual(86400000)
  })

  it('should convert 24h to ms', function() {
    expect(durationToMs('24h')).toEqual(86400000)
  })

  it('should convert 12h35m7s to ms', function() {
    expect(durationToMs('12h35m7s')).toEqual(45307000)
  })
})
