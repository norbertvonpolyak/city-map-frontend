import { useState } from "react"
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// ─────────────────────────────
// GEO TAG MINIMAL MARKER
// ─────────────────────────────
const geoTagIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:18px;
      height:18px;
      background:black;
      border-radius:50%;
      box-shadow:
        0 0 0 4px white,
        0 6px 18px rgba(0,0,0,0.25);
    "></div>
  `,
  iconSize: [18, 18],
  iconAnchor: [9, 9]
})

// ─────────────────────────────
// CLICK HANDLER
// ─────────────────────────────
function MapClickHandler({ setSelected }) {
  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        )
        const data = await res.json()

        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.county ||
          "Unknown location"

        setSelected({ lat, lng, city })

      } catch {
        setSelected({ lat, lng, city: "Unknown location" })
      }
    }
  })

  return null
}

// ─────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────
function LocationModal({ onClose, onSelect }) {

  const defaultCenter = [47.4979, 19.0402]
  const [selected, setSelected] = useState(null)

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">

      <div className="w-[90vw] h-[85vh] bg-white rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-zinc-200">
          <h2 className="text-lg font-light tracking-tight">
            Choose a location
          </h2>

          <button
            onClick={onClose}
            className="text-sm text-zinc-400 hover:text-black transition"
          >
            Close
          </button>
        </div>

        {/* MAP */}
        <div className="flex-1 relative">

          <MapContainer
            center={defaultCenter}
            zoom={12}
            zoomControl={false}
            className="h-full w-full"
          >
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            <MapClickHandler setSelected={setSelected} />

            {selected && (
              <Marker
                position={[selected.lat, selected.lng]}
                icon={geoTagIcon}
              />
            )}
          </MapContainer>

          {/* 🎨 CONTROLLED MINIMAL TONE OVERLAY */}
          <div className="absolute inset-0 pointer-events-none bg-white/35 mix-blend-multiply" />

        </div>

        {/* FOOTER */}
        <div className="px-8 py-6 border-t border-zinc-200 flex items-center justify-between">

          {selected ? (
            <div className="text-sm text-zinc-600">
              <p className="font-medium">{selected.city}</p>
              <p className="text-xs tracking-wider text-zinc-400">
                {selected.lat.toFixed(4)} / {selected.lng.toFixed(4)}
              </p>
            </div>
          ) : (
            <p className="text-sm text-zinc-400">
              Click anywhere on the map
            </p>
          )}

          <button
            disabled={!selected}
            onClick={() => onSelect(selected)}
            className={`
              px-6 py-3 rounded-xl text-sm
              ${selected
                ? "bg-black text-white hover:bg-zinc-900"
                : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
              }
              transition
            `}
          >
            Confirm Location
          </button>

        </div>

      </div>
    </div>
  )
}

export default LocationModal