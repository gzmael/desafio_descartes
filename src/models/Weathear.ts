export interface Weather {
  description: string
  icon: string
  temperature: number
  feels: number
  min: number
  max: number
  wind: number
  humidity: number
  pressure: number
  clouds: number
  sunrise: number
  sunset: number
  visibility: number
}

export interface WeatherResponse {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    icon: string
    description: string
  }[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
  }
  clouds: {
    all: number
  }
  sys: {
    sunrise: number
    sunset: number
  }
  name: string
}
