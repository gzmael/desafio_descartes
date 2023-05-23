import { Forecast } from 'models/Forecast'

export const getDayByDate = (date: string) =>
  new Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    timeZone: 'America/Fortaleza',
  }).format(new Date(date))

export const getHourByTimestamp = (time: number) =>
  new Intl.DateTimeFormat('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Fortaleza',
  }).format(new Date((time + 10800) * 1000))

export const getDayWeekByDate = (
  date: string,
  style?: 'short' | 'long' | 'narrow',
) =>
  new Intl.DateTimeFormat('pt-br', {
    weekday: style ?? 'long',
    timeZone: 'America/Fortaleza',
  }).format(new Date(date))

export const getWeekAndDaysFromForecasts = (forecasts: Forecast[]) => {
  const dates = [
    ...new Set(forecasts.map((forecast) => forecast.date.split(' ')[0])),
  ]
  return dates.map((date) => {
    return {
      date,
      day: getDayByDate(date + ' 12:00:00'),
      week: getDayWeekByDate(date + ' 12:00:00', 'short'),
    }
  })
}
