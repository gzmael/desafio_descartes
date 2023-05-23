import { Weather, WeatherResponse } from 'models/Weathear'
import { formatMsToKmH, formatTemperature } from './formatNumbers'
import { Forecast, ForecastReponse } from 'models/Forecast'

export const getDetailListFromWeather = (weather: Weather) => {
  return [
    {
      title: 'Vento',
      value: formatMsToKmH(weather.wind) + ' km/h',
    },
    {
      title: 'Umidade',
      value: weather.humidity + ' %',
    },
    {
      title: 'Sensação',
      value: formatTemperature(weather.feels) + ' ºC',
    },
    {
      title: 'Min - Máx',
      value: `${formatTemperature(weather.min, 0)}ºC - ${formatTemperature(
        weather.max,
        0,
      )}ºC`,
    },
    {
      title: 'Visibilidade',
      value: weather.visibility / 1000 + ' km',
    },
    {
      title: 'Nuvens',
      value: weather.clouds + ' %',
    },
  ]
}

export const getWeatherFromData = (data: WeatherResponse) => {
  const { clouds, main, visibility, weather, wind, sys } = data
  return {
    clouds: clouds.all,
    description: weather[0].description,
    feels: main.feels_like,
    humidity: main.humidity,
    icon: weather[0].icon,
    max: main.temp_max,
    min: main.temp_min,
    temperature: main.temp,
    wind: wind.speed,
    pressure: main.pressure,
    sunrise: sys.sunrise,
    sunset: sys.sunset,
    visibility,
  }
}

export const getForecastsFromData = (data: ForecastReponse): Forecast[] => {
  return data.list.map((forecast) => {
    const {
      clouds,
      dt_txt: date,
      main,
      visibility,
      weather,
      wind,
      dt,
    } = forecast
    return {
      clouds: clouds.all,
      description: weather[0].description,
      feels: main.feels_like,
      humidity: main.humidity,
      icon: weather[0].icon,
      max: main.temp_max,
      min: main.temp_min,
      temperature: main.temp,
      wind: wind.speed,
      pressure: main.pressure,
      visibility,
      date,
      timestamp: dt,
    }
  })
}
