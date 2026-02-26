import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  useMapEvents,
  useMap
} from 'react-leaflet'

import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png?url'
import markerShadow from 'leaflet/dist/images/marker-shadow.png?url'

/* ---- Custom Marker ---- */
const customIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
})

/* ---- Click Handler ---- */
function ClickHandler({ onSelect }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng)
    }
  })
  return null
}

/* ---- Fly To Selected ---- */
function FlyToLocation({ selectedLocation }) {
  const map = useMap()

  if (selectedLocation) {
    map.flyTo(selectedLocation, 13)
  }

  return null
}

/* ---- Main Component ---- */
function MapPicker({ onSelect, selectedLocation, extent }) {
  return (
    <MapContainer
      center={[47.4979, 19.0402]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ClickHandler onSelect={onSelect} />
      <FlyToLocation selectedLocation={selectedLocation} />

      {selectedLocation && (
        <>
          <Marker position={selectedLocation} icon={customIcon} />

          <Circle
            center={selectedLocation}
            radius={extent}
            pathOptions={{
              color: '#2563eb',
              fillColor: '#2563eb',
              fillOpacity: 0.1,
              weight: 2
            }}
          />
        </>
      )}
    </MapContainer>
  )
}

export default MapPicker