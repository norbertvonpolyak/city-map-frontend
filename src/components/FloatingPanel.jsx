function FloatingPanel({ children }) {
  return (
    <div
      className="
        w-[440px]
        bg-white/90
        backdrop-blur-xl
        rounded-3xl
        shadow-[0_30px_80px_rgba(0,0,0,0.15)]
        border border-white/50
        p-8
      "
    >
      {children}
    </div>
  )
}

export default FloatingPanel