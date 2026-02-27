import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function AccordionSection({ title, defaultOpen = false, children }) {

  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-zinc-200/60 pb-6">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wide text-zinc-700 font-medium">
          {title}
        </span>

        <span className="text-xs text-zinc-400">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default AccordionSection