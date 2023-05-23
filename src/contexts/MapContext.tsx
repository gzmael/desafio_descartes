import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { LatLngLiteral } from 'leaflet'
import { apiGoogleMaps, apiUnsplash, apiWeather } from 'lib/axios'
import { Weather, WeatherResponse } from 'models/Weathear'
import { getForecastsFromData, getWeatherFromData } from 'utils/weather'
import { Forecast, ForecastReponse } from 'models/Forecast'
import { useDebounce } from 'hooks/useDebounce'

export interface MapContextProps {
  position: LatLngLiteral
  address: string
  isLoading: boolean
  weather: Weather | null
  forecasts: Forecast[]
  backgroundUrl: string | null
  updatePosition: (position: LatLngLiteral) => void
  getLocation: () => void
  getLocationByAddress: (address: string) => void
  updateAddress: (address: string) => void
}

export const MapContext = createContext({} as MapContextProps)

interface MapProviderProps {
  children: ReactNode
}

const MapProvider = ({ children }: MapProviderProps) => {
  const [position, setPosition] = useState<LatLngLiteral>({
    lat: -6.7931,
    lng: -39.307373,
  })
  const [address, setAddress] = useState('')
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [weather, setWeather] = useState<Weather | null>(null)
  const [forecasts, setForecasts] = useState<Forecast[]>([])
  const debouncedSearchTerm = useDebounce<string>(address, 2000)

  const updatePosition = useCallback((position: LatLngLiteral) => {
    setPosition(() => position)
  }, [])

  const updateAddress = useCallback((address: string) => {
    setAddress(() => address)
  }, [])

  const getLocation = useCallback(() => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      },
      (error) => {
        console.log(error)
      },
      {
        maximumAge: 1000,
        timeout: 3000,
        enableHighAccuracy: true,
      },
    )
    setIsLoading(false)
  }, [])

  const getLocationByAddress = useCallback(async (address: string) => {
    setIsLoading(true)

    const params = new URLSearchParams({ address })
    params.set('key', import.meta.env.VITE_GOOGLE_GEOCODING_KEY)

    try {
      const { data } = await apiGoogleMaps.get(`/json?${params.toString()}`)

      if (data && data?.status === 'OK') {
        const { lat, lng } = data.results[0].geometry.location
        setPosition({
          lat,
          lng,
        })
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    async function getWeather() {
      setIsLoading(true)

      const params = new URLSearchParams({
        lat: `${position.lat}`,
        lon: `${position.lng}`,
        lang: 'pt_br',
        appid: import.meta.env.VITE_OPENWEATHER_KEY,
        units: 'metric',
      })

      try {
        const resultWeather = await apiWeather.get(
          `/weather?${params.toString()}`,
        )
        if (resultWeather?.data) {
          const data = resultWeather.data as WeatherResponse
          setWeather(() => getWeatherFromData(data))
          setAddress(data.name)
        }
        const resultForecast = await apiWeather.get(
          `/forecast?${params.toString()}`,
        )
        if (resultForecast?.data) {
          setForecasts(() =>
            getForecastsFromData(resultForecast.data as ForecastReponse),
          )
        }
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    if (position) {
      getWeather()
    }
  }, [position])

  useEffect(() => {
    async function getBackground() {
      const params = new URLSearchParams({
        orientation: 'landscape',
        count: '1',
        client_id: import.meta.env.VITE_UNSPLAH_KEY,
        query: address.replaceAll(',', '') + ' Paisagem',
      })
      const result = await apiUnsplash.get(`/random?${params.toString()}`)

      if (result) {
        setBackgroundUrl(result.data[0].urls.regular)
      }
    }

    if (debouncedSearchTerm) {
      getBackground()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm])

  return (
    <MapContext.Provider
      value={{
        position,
        address,
        backgroundUrl,
        isLoading,
        weather,
        forecasts,
        updatePosition,
        updateAddress,
        getLocation,
        getLocationByAddress,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

export { MapProvider }
