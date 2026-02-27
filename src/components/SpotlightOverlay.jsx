function SpotlightOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-5"
      style={{
        background: `
          radial-gradient(
            circle at center,
            rgba(255,255,255,0) 0%,
            rgba(244,242,239,0.4) 40%,
            rgba(244,242,239,0.85) 75%,
            rgba(244,242,239,1) 100%
          )
        `
      }}
    />
  )
}

export default SpotlightOverlay