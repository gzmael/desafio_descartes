import { formatTemperature, formatMsToKmH } from './formatNumbers'
describe('utils/formatNumbers', () => {
  it('Should be able to format temperature', () => {
    const temp = 36.489
    expect(formatTemperature(temp)).toBe('36,5')
  })

  it('Should be able to format temperature with two fraction digits', () => {
    const temp = 36.489
    expect(formatTemperature(temp, 2)).toBe('36,49')
  })

  it('Should be able to format m/s to km/h with defaults', () => {
    const velocity = 23
    expect(formatMsToKmH(velocity)).toBe('82,8')
  })

  it('Should be able to format m/s to km/h with two fraction digits', () => {
    const velocity = 23.26
    expect(formatMsToKmH(velocity, 2)).toBe('83,74')
  })
})
