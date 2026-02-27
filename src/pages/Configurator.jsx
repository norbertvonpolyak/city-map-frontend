import { useState } from "react"
import FloatingPanel from "../components/FloatingPanel"
import ProductCanvas from "../components/ProductCanvas"
import LifestyleSection from "../components/LifestyleSection"
import LocationModal from "../components/LocationModal"
import BackgroundMap from "../components/BackgroundMap"
import SpotlightOverlay from "../components/SpotlightOverlay"
import AccordionSection from "../components/AccordionSection"

function Configurator() {

  const [size, setSize] = useState("50x70")

  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  )

  const [location, setLocation] = useState(null)
  const [panelOpen, setPanelOpen] = useState(true)
  const [isLocationOpen, setIsLocationOpen] = useState(false)

  return (
    <div className="min-h-screen bg-warmBg relative">

      {/* BACKGROUND SYSTEM – NEM NYÚLUNK HOZZÁ */}
      <BackgroundMap location={location} imageUrl={imageUrl} />
      <SpotlightOverlay />

      <div className="relative z-10 min-h-screen">

  <div className="max-w-7xl mx-auto px-8 pt-36 pb-24">

    <div className="grid grid-cols-[440px_1fr] gap-24 items-center">

      {/* BAL PANEL */}
      <FloatingPanel>
        <AccordionSection title="Location" defaultOpen>
          <button
            onClick={() => setIsLocationOpen(true)}
            className="w-full py-3 bg-black text-white rounded-x1"
          >
            Select Location
          </button>
        </AccordionSection>

        <AccordionSection title="Style">
          <button className="w-full py-3 border rounded-xl">
            Minimal White
          </button>
        </AccordionSection>

        <AccordionSection title="Typography">
          <button className="w-full py-3 border rounded-xl">
            Playfair Display
          </button>
        </AccordionSection>

        <AccordionSection title="Composition">
          <button className="w-full py-3 border rounded-xl">
            Radial Overlay
          </button>
        </AccordionSection>

        <AccordionSection title="Finish">
          <button className="w-full py-3 bg-zinc-900 text-white rounded-xl">
            Add to Cart
          </button>
        </AccordionSection>
      </FloatingPanel>

      {/* JOBB CANVAS */}
      <div className="flex justify-end">
        <div className="max-w-4xl w-full translate-x-16">
          <ProductCanvas
            size={size}
            imageUrl={imageUrl}
            location={location}
          />
        </div>
      </div>

    </div>

  </div>

</div>

      {/* LIFESTYLE */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pb-24">
        <LifestyleSection imageUrl={imageUrl} />
      </div>

      {/* LOCATION MODAL */}
      {isLocationOpen && (
        <LocationModal
          onClose={() => setIsLocationOpen(false)}
          onSelect={(data) => {
            setLocation(data)
            setIsLocationOpen(false)
          }}
        />
      )}

    </div>
  )
}

export default Configurator