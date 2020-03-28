import 'chai/register-should.js'
import durationToMs from '../src/index.js'

describe('durationToMs', () => {
  it('should convert 1w into ms', function() {
    durationToMs('1w').should.eql(604800000)
  })

  it('should convert 1m to ms', function() {
    durationToMs('1m').should.eql(60000)
  })

  it('should convert 1d to ms', function() {
    durationToMs('1d').should.eql(86400000)
  })

  it('should convert 24h to ms', function() {
    durationToMs('24h').should.eql(86400000)
  })

  it('should convert 12h35m7s to ms', function() {
    durationToMs('12h35m7s').should.eql(45307000)
  })
})
