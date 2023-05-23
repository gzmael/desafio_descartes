import { Weather, WeatherResponse } from './Weathear'

type ForecastWeatherReponseItem = Omit<WeatherResponse, 'coord'> & {
  dt_txt: string
  dt: number
}

export type Forecast = Omit<Weather, 'coord' | 'sunrise' | 'sunset'> & {
  date: string
  timestamp: number
}

export interface ForecastReponse {
  list: ForecastWeatherReponseItem[]
}

export interface DayWeekType {
  isSelected: boolean
  date: string
  day: string
  week: string
}
