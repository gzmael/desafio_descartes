import { ReactNode, createContext, useCallback, useState } from 'react'
import { LatLngLiteral } from 'leaflet'
import { apiGoogleMaps } from 'lib/axios'

export interface MapContextProps {
  position: LatLngLiteral
  address: string
  isLoading: boolean
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
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <MapContext.Provider
      value={{
        position,
        address,
        isLoading,
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
