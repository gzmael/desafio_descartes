import { MapContext } from 'contexts/MapContext'
import { Map as MapType } from 'leaflet'
import { useContext, useEffect, useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from 'react-leaflet'

const Map = () => {
  const { position, updatePosition } = useContext(MapContext)
  const [map, setMap] = useState<MapType | null>(null)

  function LocationMaker() {
    useMapEvent('click', (e) => {
      updatePosition(e.latlng)
      if (map) {
        map.flyTo(e.latlng, map.getZoom())
      }
    })

    return (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  useEffect(() => {
    if (map) {
      map.flyTo(position, map.getZoom())
    }
  }, [map, position])

  return (
    <div data-testid="map" className="min-h-[438px] w-full bg-white">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="min-h-full w-full bg-white"
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMaker />
      </MapContainer>
    </div>
  )
}

export { Map }
