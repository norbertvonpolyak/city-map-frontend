# City Map Frontend

Interactive city map configurator built with React + Vite + Leaflet.

This frontend allows users to:

- Search for cities using autocomplete (OpenStreetMap Nominatim)
- Enter coordinates manually (lat,lng format)
- Select a location directly on the map
- Adjust dynamic map extent (radius in meters)
- Preview the selected bounding area in real time

---

## 🚀 Tech Stack

- React
- Vite
- React-Leaflet
- OpenStreetMap (tile layer)
- Nominatim (geocoding API)

---

## ✨ Features

- 🔍 Autocomplete city search (debounced, 3+ characters)
- 📍 Coordinate search (e.g. `47.4979, 19.0402`)
- 🗺 Click-to-select location
- 📐 Dynamic extent slider (1km–15km)
- 🔵 Live preview circle rendering
- ✈ Auto map fly-to on selection

---

## 🛠 Installation

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
Then open:
```bash
[npm run dev](http://localhost:5173)
```

---

## 🧠 Architecture Overview

State is lifted to App.jsx:
- selectedLocation
- extent
- searchQuery
- suggestions

MapPicker handles:
- Map rendering
- Marker
- Circle
- Fly-to behavior
- Click events

Autocomplete logic uses a debounced useEffect.

---

## ⚠️ Notes

The project currently uses the public OpenStreetMap Nominatim API.

For production use:
- A backend proxy should be implemented
- Rate limiting should be handled server-side

---

## 📌 Future Improvements

- Backend preview endpoint integration
- Bounding box computation
- Style preset selector
- Keyboard navigation for autocomplete
- Production-ready geocoding proxy

---

## 📄 License
MIT
