import axios from 'axios'

export const apiWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export const apiUnsplash = axios.create({
  baseURL: 'https://api.unsplash.com/photos',
})

export const apiGoogleMaps = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
})
