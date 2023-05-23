import { Marker, Popup, useMapEvent } from 'react-leaflet'
import { LatLngLiteral, Map, Marker as MarkerType } from 'leaflet'
import { useEffect, useRef } from 'react'
import { Weather } from 'models/Weathear'
import { PopupWeather } from '../PopupWeather'

interface CustomMarkerProps {
  map: Map
  weather: Weather
  position: LatLngLiteral
  updatePosition: (position: LatLngLiteral) => void
}

const CustomMarker = ({
  map,
  position,
  updatePosition,
  weather,
}: CustomMarkerProps) => {
  const markerRef = useRef<MarkerType>(null)

  useMapEvent('click', (e) => {
    updatePosition(e.latlng)
    if (map) {
      map.flyTo(e.latlng, map.getZoom())
    }
  })

  useEffect(() => {
    try {
      if (markerRef.current !== null && !markerRef.current.isPopupOpen()) {
        markerRef.current.openPopup()
      }
    } catch (error) {}
  }, [position.lat, position.lng])

  return (
    <Marker position={position} ref={markerRef}>
      <Popup className="popover" offset={[0, 0]}>
        <PopupWeather weather={weather} />
      </Popup>
    </Marker>
  )
}

export { CustomMarker }
