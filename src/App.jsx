import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Home from "./pages/Home"
import Showroom from "./pages/Showroom"
import Configurator from "./pages/Configurator"
import Blog from "./pages/Blog"

function App() {
  return (
    <div className="min-h-screen bg-warmBg text-zinc-800">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App