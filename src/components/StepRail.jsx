import { motion } from "framer-motion"

const steps = [
  { id: "place", label: "01" },
  { id: "character", label: "02" },
  { id: "typography", label: "03" },
  { id: "finish", label: "04" },
]

function StepRail({ activeStep, setActiveStep, setPanelOpen }) {
  return (
    <div className="fixed left-0 top-0 h-screen w-24 flex flex-col items-center justify-center gap-12 z-20">

      {steps.map((step) => {
        const isActive = activeStep === step.id

        return (
          <button
            key={step.id}
            onClick={() => {
              setActiveStep(step.id)
              setPanelOpen(true)
            }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: isActive ? 1.1 : 1,
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{ duration: 0.25 }}
              className="
                text-xl font-light tracking-widest
                text-zinc-900
              "
            >
              {step.label}
            </motion.div>
          </button>
        )
      })}

    </div>
  )
}

export default StepRail