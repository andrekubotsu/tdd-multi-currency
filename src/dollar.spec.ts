import { Dollar } from './dollar'
import { Euro } from './euro'

describe('Money', () => {
  it('should return 10 when five dollars multiplied by 2 and 15 when multiplied by 3', () => {
    const five: Dollar = new Dollar(5)

    expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
  })

  it('should return 10 when five euros multiplied by 2 and 15 when multiplied by 3', () => {
    const five: Euro = new Euro(5)

    expect(five.times(2).equals(new Euro(10))).toBeTruthy()
    expect(five.times(3).equals(new Euro(15))).toBeTruthy()
  })

  it('should return true when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})
