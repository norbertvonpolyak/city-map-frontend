import { SIZES_CM } from "../config/sizes"

function ConfigSidebar({ size, setSize, openLocationModal }) {
  return (
    <div className="space-y-12">

      {/* ───────── HEADER ───────── */}
      <div className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight leading-snug">
          Create a place that matters
        </h1>

        <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
          Turn a meaningful location into timeless wall art.
          Designed to live beautifully in your space.
        </p>
      </div>


      {/* ───────── SIZE SECTION ───────── */}
      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <p className="text-xs tracking-[0.25em] text-zinc-700">
            SIZE
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {Object.keys(SIZES_CM).map((key) => (
            <button
              key={key}
              onClick={() => setSize(key)}
              className={`
                relative py-3 rounded-xl border text-sm transition-all duration-200
                ${size === key
                  ? "bg-warmAccent/20 border-warmAccent text-black shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                  : "bg-white border-warmBorder hover:border-zinc-400 hover:shadow-sm"
                }
              `}
            >
              {key}
            </button>
          ))}
        </div>
      </div>


      {/* ───────── LOCATION SECTION ───────── */}
      <div className="space-y-6">

        <p className="text-xs tracking-[0.25em] text-zinc-700">
          LOCATION
        </p>

        <button
          onClick={openLocationModal}
          className="
  w-full py-4 rounded-full
  bg-warmAccent text-white    
  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
  hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
  hover:-translate-y-[1px]
  transition-all duration-300
"
        >
          Choose Location
        </button>

        <p className="text-xs text-zinc-600 leading-relaxed">
          Select any place in the world.  
          We’ll transform it into refined cartographic art.
        </p>
      </div>


      {/* ───────── MATERIAL / QUALITY ───────── */}
      <div className="space-y-4 pt-6 border-t border-warmBorder/60">

        <div className="space-y-1">
          <p className="text-sm text-zinc-600">
            Museum-grade matte paper
          </p>
          <p className="text-sm text-zinc-600">
            Archival pigment printing
          </p>
          <p className="text-sm text-zinc-600">
            Free EU shipping
          </p>
        </div>

      </div>


      {/* ───────── PRICE / CTA PLACEHOLDER ───────── */}
      <div className="pt-4 space-y-4">

        <div className="flex items-baseline justify-between">
          <span className="text-sm text-zinc-400">From</span>
          <span className="text-xl font-light">HUF 14990</span>
        </div>

        <button
          className="
            w-full py-4 rounded-xl
            bg-black text-white
            text-sm tracking-wide
            hover:bg-zinc-800
            transition-all duration-200
          "
        >
          Add to Cart
        </button>

      </div>

    </div>
  )
}

export default ConfigSidebar