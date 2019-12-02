import 'chai/register-should'
import durationToMs from '../src/index.js'

describe('ms(string)', () => {
  it('should preserve ms', function() {
    durationToMs('1w').should.eql(604800000)
  })

  it('should preserve ms', function() {
    durationToMs('1m').should.eql(60000)
  })
})