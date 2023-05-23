import { WeatherResponse } from 'models/Weathear'
import {
  getDetailListFromWeather,
  getForecastsFromData,
  getWeatherFromData,
} from './weather'
import { ForecastReponse } from 'models/Forecast'

const demoData: WeatherResponse = {
  coord: {
    lon: -39.3102,
    lat: -6.7984,
  },
  weather: [
    {
      description: 'nublado',
      icon: '04n',
    },
  ],
  main: {
    temp: 25.6,
    feels_like: 26.02,
    temp_min: 25.6,
    temp_max: 25.6,
    pressure: 1013,
    humidity: 69,
  },
  visibility: 10000,
  wind: {
    speed: 2.69,
  },
  clouds: {
    all: 100,
  },
  sys: {
    sunrise: 1684658425,
    sunset: 1684700850,
  },
  name: 'Caririaçu',
}

const demoForecast: ForecastReponse = {
  list: [
    {
      dt: 1684789200,
      main: {
        temp: 27.6,
        feels_like: 28.78,
        temp_min: 27.6,
        temp_max: 28.02,
        pressure: 1011,
        humidity: 59,
      },
      weather: [
        {
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 3.52,
      },
      visibility: 10000,
      sys: {
        sunrise: 2,
        sunset: 2,
      },
      dt_txt: '2023-05-22 21:00:00',
      name: 'name',
    },
    {
      dt: 1684800000,
      main: {
        temp: 26.83,
        feels_like: 28.07,
        temp_min: 25.28,
        temp_max: 26.83,
        pressure: 1012,
        humidity: 63,
      },
      weather: [
        {
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 3.29,
      },
      visibility: 10000,
      sys: {
        sunrise: 2,
        sunset: 2,
      },
      dt_txt: '2023-05-23 00:00:00',
      name: 'name',
    },
  ],
}

describe('utils/weather', () => {
  it('should be able to format weather from api response', () => {
    const result = getWeatherFromData(demoData)
    expect(result).toHaveProperty('clouds')
    expect(result).toHaveProperty('description')
    expect(result).toHaveProperty('feels')
    expect(result).toHaveProperty('humidity')
    expect(result).toHaveProperty('icon')
    expect(result).toHaveProperty('max')
    expect(result).toHaveProperty('min')
    expect(result).toHaveProperty('temperature')
    expect(result).toHaveProperty('wind')
    expect(result).toHaveProperty('pressure')
    expect(result).toHaveProperty('sunrise')
    expect(result).toHaveProperty('sunset')
    expect(result).toHaveProperty('visibility')
  })

  it('should be able to format forecast from api response', () => {
    const result = getForecastsFromData(demoForecast)
    expect(result[0]).toHaveProperty('clouds')
    expect(result[0]).toHaveProperty('description')
    expect(result[0]).toHaveProperty('feels')
    expect(result[0]).toHaveProperty('humidity')
    expect(result[0]).toHaveProperty('icon')
    expect(result[0]).toHaveProperty('max')
    expect(result[0]).toHaveProperty('min')
    expect(result[0]).toHaveProperty('temperature')
    expect(result[0]).toHaveProperty('wind')
    expect(result[0]).toHaveProperty('pressure')
    expect(result[0]).toHaveProperty('visibility')
    expect(result[0]).toHaveProperty('date')
    expect(result[0]).toHaveProperty('timestamp')
  })

  it('should be able to get detail list from a weather', () => {
    const result = getWeatherFromData(demoData)
    const details = getDetailListFromWeather(result)
    expect(details[0].title).toBe('Vento')
    expect(details[0].value).toBe('9,68 km/h')
    expect(details[1].title).toBe('Umidade')
    expect(details[1].value).toBe('69 %')
    expect(details[2].title).toBe('Sensação')
    expect(details[2].value).toBe('26 ºC')
    expect(details[3].title).toBe('Min - Máx')
    expect(details[3].value).toBe('26ºC - 26ºC')
    expect(details[4].title).toBe('Visibilidade')
    expect(details[4].value).toBe('10 km')
    expect(details[5].title).toBe('Nuvens')
    expect(details[5].value).toBe('100 %')
  })
})
