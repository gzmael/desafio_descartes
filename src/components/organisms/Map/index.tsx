import { CustomMarker } from 'components/molecules/CustomMarker'
import { MapContext } from 'contexts/MapContext'
import { Map as MapType } from 'leaflet'
import { useContext, useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const Map = () => {
  const { position, updatePosition, weather } = useContext(MapContext)
  const [map, setMap] = useState<MapType | null>(null)

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
        className="h-full min-h-[438px] w-full bg-white md:min-h-[600px]"
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {map && position && weather && (
          <CustomMarker
            map={map}
            position={position}
            updatePosition={updatePosition}
            weather={weather}
          />
        )}
      </MapContainer>
    </div>
  )
}

export { Map }
