import { Forecast } from 'models/Forecast'
import {
  getDayByDate,
  getDayWeekByDate,
  getHourByTimestamp,
  getWeekAndDaysFromForecasts,
} from './forecasts'
describe('utils/forecasts', () => {
  it('Should be able to get day by Date string', () => {
    expect(getDayByDate('2023-05-22 12:00')).toBe('22')
  })

  it('Should be able to get time from a timestamp', () => {
    const timestamp = 1684801273 // Tuesday May 23, 2023 00:21:13 (am)
    expect(getHourByTimestamp(timestamp)).toBe('00:21')
  })

  it('Should be able to get week day by Date string', () => {
    expect(getDayWeekByDate('2023-05-22 12:00')).toBe('segunda-feira')
    expect(getDayWeekByDate('2023-05-22 12:00', 'short')).toBe('seg.')
    expect(getDayWeekByDate('2023-05-22 12:00', 'narrow')).toBe('S')
    expect(getDayWeekByDate('2023-05-22 12:00', 'long')).toBe('segunda-feira')
  })

  it('Should be able to get week and day by Forecasts', () => {
    const forecasts: Forecast[] = [
      {
        temperature: 25.6,
        feels: 26.02,
        min: 25.6,
        max: 25.6,
        pressure: 1013,
        humidity: 69,
        clouds: 100,
        date: '2023-05-22 18:00:00',
        description: 'nublado',
        icon: '04d',
        timestamp: 1685210400,
        visibility: 10000,
        wind: 3.46,
      },
      {
        temperature: 25.6,
        feels: 26.02,
        min: 25.6,
        max: 25.6,
        pressure: 1013,
        humidity: 69,
        clouds: 100,
        date: '2023-05-24 18:00:00',
        description: 'nublado',
        icon: '04d',
        timestamp: 1685210400,
        visibility: 10000,
        wind: 3.46,
      },
    ]
    const result = getWeekAndDaysFromForecasts(forecasts)
    expect(result[0].day).toBe('22')
    expect(result[0].week).toBe('seg.')
    expect(result[1].day).toBe('24')
    expect(result[1].week).toBe('qua.')
  })
})
