import { useState, useEffect } from 'react'
import MapPicker from './components/MapPicker'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [extent, setExtent] = useState(5000)

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)

  /* ---- Debounced Search ---- */
  useEffect(() => {
    if (searchQuery.length < 3) {
      setSuggestions([])
      return
    }

    const timeout = setTimeout(async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(searchQuery)}`
        )

        const data = await response.json()
        setSuggestions(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }, 400)

    return () => clearTimeout(timeout)
  }, [searchQuery])

  /* ---- Select Suggestion ---- */
  function selectSuggestion(place) {
    const lat = parseFloat(place.lat)
    const lon = parseFloat(place.lon)

    setSelectedLocation({ lat, lng: lon })
    setSearchQuery(place.display_name)
    setSuggestions([])
  }

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      
      {/* LEFT PANEL */}
      <div
        style={{
          width: "320px",
          borderRight: "1px solid #ddd",
          padding: "20px",
          background: "#1e1e1e",
          color: "white",
          boxSizing: "border-box",
          position: "relative"
        }}
      >
        <h2>Controls</h2>

        {/* SEARCH INPUT */}
        <div style={{ marginBottom: "20px", position: "relative" }}>
          <input
            type="text"
            placeholder="Search city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #444",
              background: "#2a2a2a",
              color: "white"
            }}
          />

          {loading && (
            <div style={{ fontSize: "12px", marginTop: "4px" }}>
              Searching...
            </div>
          )}

          {/* DROPDOWN */}
          {suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "38px",
                left: 0,
                right: 0,
                background: "#2a2a2a",
                border: "1px solid #444",
                borderRadius: "4px",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 1000
              }}
            >
              {suggestions.map((place) => (
                <div
                  key={place.place_id}
                  onClick={() => selectSuggestion(place)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #333",
                    fontSize: "13px"
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#3a3a3a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  {place.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* LOCATION INFO */}
        {selectedLocation && (
          <>
            <p><strong>Lat:</strong> {selectedLocation.lat.toFixed(5)}</p>
            <p><strong>Lng:</strong> {selectedLocation.lng.toFixed(5)}</p>
          </>
        )}

        {/* EXTENT SLIDER */}
        <div style={{ marginTop: "20px" }}>
          <label>Extent: {extent / 1000} km</label>
          <input
            type="range"
            min="1000"
            max="15000"
            step="500"
            value={extent}
            onChange={(e) => setExtent(Number(e.target.value))}
            style={{ width: "100%", marginTop: "8px" }}
          />
        </div>
      </div>

      {/* MAP */}
      <div style={{ flex: 1, height: "100%" }}>
        <MapPicker
          onSelect={setSelectedLocation}
          selectedLocation={selectedLocation}
          extent={extent}
        />
      </div>
    </div>
  )
}

export default App