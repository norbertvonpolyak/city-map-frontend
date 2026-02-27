import { MapContainer, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const geoTagIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:16px;
      height:16px;
      background:black;
      border-radius:50%;
      box-shadow:
        0 0 0 4px white,
        0 4px 14px rgba(0,0,0,0.25);
    "></div>
  `,
  iconSize: [16, 16],
  iconAnchor: [8, 8]
})

function ProductCanvas({ size, location }) {

  const defaultCenter = [47.4979, 19.0402]
  const center = location
    ? [location.lat, location.lng]
    : defaultCenter

  return (
    <div className="relative">

      {/* FRAME */}
      <div className="bg-white p-8 shadow-[0_40px_120px_rgba(0,0,0,0.15)]">

        <div className="aspect-[4/5] bg-white overflow-hidden relative">

          <MapContainer
            center={center}
            zoom={13}
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            attributionControl={false}
            className="h-full w-full pointer-events-none"
          >
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />

            {location && (
              <Marker
                position={[location.lat, location.lng]}
                icon={geoTagIcon}
              />
            )}
          </MapContainer>

          {/* tone overlay */}
          <div className="absolute inset-0 pointer-events-none bg-white/35 mix-blend-multiply" />

        </div>
      </div>

    </div>
  )
}

export default ProductCanvas