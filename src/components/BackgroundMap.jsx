import { MapContainer, TileLayer, useMap } from "react-leaflet"
import { useEffect } from "react"

const defaultCenter = [47.4979, 19.0402] // Budapest default

function FlyToLocation({ location }) {
  const map = useMap()

  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 13, {
        duration: 1.2,
      })
    }
  }, [location, map])

  return null
}

function BackgroundMap({ location }) {
  const center = location
    ? [location.lat, location.lng]
    : defaultCenter

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">

      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        style={{ height: "100%", width: "100%" }}
        className="blur-md scale-110"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToLocation location={location} />
      </MapContainer>

      {/* Subtle dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(0,0,0,0) 40%,
              rgba(0,0,0,0.08) 70%,
              rgba(0,0,0,0.18) 100%
            )
          `,
        }}
      />

    </div>
  )
}

export default BackgroundMap