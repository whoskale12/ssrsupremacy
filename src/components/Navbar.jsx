import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV, LINKS } from '../data/site.js'
import { InstagramIcon, BandcampIcon, MenuIcon, CloseIcon } from './Icons.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { totals } = useCart()

  const linkClass = ({ isActive }) =>
    `font-heavy uppercase text-sm tracking-widest px-1 transition-colors ${
      isActive ? 'text-blood' : 'text-bone hover:text-blood'
    }`

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b-2 border-bone">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/LOGO.png" alt="SSR SUPREMACY" className="h-14 w-auto" />
          <span className="hidden sm:block font-heavy uppercase text-sm tracking-widest leading-none">
            SSR<br />Supremacy
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Socials + Cart + mobile toggle */}
        <div className="flex items-center gap-4">
          <a href={LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-blood transition-colors">
            <InstagramIcon />
          </a>
          <a href={LINKS.bandcamp} target="_blank" rel="noreferrer" aria-label="Bandcamp" className="hover:text-blood transition-colors">
            <BandcampIcon />
          </a>
          <Link
            to="/cart"
            className="relative font-heavy uppercase text-sm tracking-widest text-bone hover:text-blood transition-colors"
            onClick={() => setOpen(false)}
          >
            🛒
            {totals.count > 0 && (
              <span className="absolute -top-1 -right-2 bg-blood text-ink w-5 h-5 flex items-center justify-center text-xs font-heavy rounded-full">
                {totals.count}
              </span>
            )}
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t-2 border-bone bg-ink">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to} className="border-b border-panel">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 font-heavy uppercase tracking-widest ${
                      isActive ? 'text-blood' : 'text-bone'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
