import { Dollar } from './dollar'

describe('Dollar', () => {
  it('should return 10 when five dollars multiplied by 2', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toEqual(10)
  })
})
