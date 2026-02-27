import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-warmBg/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <Link to="/" className="text-lg font-light tracking-tight">
          GEO Tag
        </Link>

        <nav className="space-x-8 text-sm text-zinc-600">
          <Link to="/">Main</Link>
          <Link to="/showroom">Showroom</Link>
          <Link to="/configurator">Configurator</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header