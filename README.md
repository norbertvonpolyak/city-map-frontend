# 🗺️ City Map Frontend

Interactive webshop-ready city map configurator built with **React + Vite + Leaflet**, connected to a FastAPI rendering backend.

This frontend allows users to:

- 🔍 Search for cities using autocomplete (OpenStreetMap Nominatim)
- 📍 Enter coordinates manually (`lat,lng` format)
- 🗺 Select a location directly on the map
- 📐 Adjust dynamic map extent (radius in meters)
- 🎨 Select style presets (palette)
- 📏 Select product size
- 🖼 Request live PNG preview from backend
- 🔵 Preview the selected bounding area in real time

The frontend is designed to integrate directly with the `city_map_generator` backend preview API.

---

# 🚀 Tech Stack

- React
- Vite
- React-Leaflet
- OpenStreetMap (tile layer)
- Nominatim (geocoding API)
- TailwindCSS
- FastAPI backend integration (preview endpoint)

---

# 🏗️ Architecture

```
User Interaction
        ↓
   React State
        ↓
 Map + Config Sidebar
        ↓
 POST /preview (FastAPI)
        ↓
 PNG Response
        ↓
 Live Product Preview
```

The frontend is UI-only and stateless regarding rendering logic.  
All heavy computation (OSM fetch, polygonize, styling, PDF generation) is handled by the backend.

---

# ✨ Features

## 🔍 Location Selection

- Autocomplete city search (debounced, 3+ characters)
- Public Nominatim API integration
- Coordinate search (`47.4979, 19.0402`)
- Click-to-select location on map
- Auto fly-to animation

---

## 📐 Dynamic Extent Control

- Adjustable radius slider (1km–15km)
- Live preview circle overlay
- Immediate UI feedback

---

## 🎨 Style & Product Configuration

- Palette selector (backend-supported styles)
- Size selector (`30x40`, `50x70`, etc.)
- Extent control
- Real-time preview requests

---

## 🖼 Backend Preview Integration

The frontend calls:

```
POST /preview
```

Example payload:

```json
{
  "lat": 48.1351,
  "lon": 11.5820,
  "size_key": "30x40",
  "extent_m": 2000,
  "palette": "urban_modern"
}
```

Response:

```
image/png
```

This enables:

- Live product mockup
- Palette switching
- Size switching
- Dynamic extent visualization

---

# 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/norbertvonpolyak/city-map-frontend.git
cd city-map-frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

# 🧠 State Architecture

State is lifted to `App.jsx`:

- `selectedLocation`
- `extent`
- `sizeKey`
- `palette`
- `searchQuery`
- `suggestions`
- `previewImage`

Core components:

- `MapPicker` – map rendering, marker, circle, click handling
- `ConfigSidebar` – product configuration
- `ProductCanvas` – preview image container
- `LocationModal` – search UI
- `FloatingPanel` – UI container logic

Autocomplete uses debounced `useEffect`.

Preview requests are triggered on relevant state change.

---

# ⚠️ Notes

The project currently uses the public OpenStreetMap Nominatim API.

For production use:

- A backend geocoding proxy is recommended
- Server-side rate limiting should be implemented
- Caching of frequent locations is advised

---

# 🔌 Backend Dependency

This frontend requires the backend:

```
city_map_generator
```

Running locally at:

```
http://localhost:8000
```

Ensure CORS is enabled in FastAPI.

---

# 📌 Future Improvements

- Production geocoding proxy
- Optimistic preview rendering
- Loading state & request cancelation
- Keyboard navigation for autocomplete
- Preset-based layout selector
- Mobile UX refinement
- Payment & checkout integration
- Product mockup rendering layer

---

# 🧭 Roadmap

## Phase 1
- Stable backend preview connection
- Palette + size switching
- Production geocoding strategy

## Phase 2
- Full webshop integration
- Cart system
- Order pipeline

## Phase 3
- Premium layout presets
- SVG/DXF manufacturing export
- Performance optimization

---

# 📄 License

MIT

---

# 👤 Author

**Norbert von Polyák**

---

# 🧠 Vision

The frontend is not just a map picker.

It is the interactive configuration layer of a scalable, deterministic, print-grade map production system designed for real-world webshop deployment.
