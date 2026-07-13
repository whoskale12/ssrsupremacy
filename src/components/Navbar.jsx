import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
           <motion.img 
             src="/LOGO.png" 
             alt="SSR SUPREMACY" 
             className="h-14 w-auto" 
             whileHover={{ scale: 1.1 }}
             transition={{ duration: 0.3 }}
           />
           <motion.span 
             className="hidden sm:block font-heavy uppercase text-sm tracking-widest leading-none"
             whileHover={{ color: '#d1334f' }}
             transition={{ duration: 0.2 }}
           >
             SSR<br />Supremacy
           </motion.span>
         </Link>

         {/* Desktop nav */}
         <ul className="hidden lg:flex items-center gap-6">
           {NAV.map((item, idx) => (
             <motion.li 
               key={item.to}
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.05, duration: 0.4 }}
             >
               <NavLink to={item.to} end={item.to === '/'} className={linkClass}>
                 {item.label}
               </NavLink>
             </motion.li>
           ))}
         </ul>

         {/* Socials + Cart + mobile toggle */}
         <div className="flex items-center gap-4">
           <motion.a 
             href={LINKS.instagram} 
             target="_blank" 
             rel="noreferrer" 
             aria-label="Instagram" 
             className="hover:text-blood transition-colors"
             whileHover={{ scale: 1.2, rotate: 5 }}
             transition={{ duration: 0.2 }}
           >
             <InstagramIcon />
           </motion.a>
           <motion.a 
             href={LINKS.bandcamp} 
             target="_blank" 
             rel="noreferrer" 
             aria-label="Bandcamp" 
             className="hover:text-blood transition-colors"
             whileHover={{ scale: 1.2, rotate: -5 }}
             transition={{ duration: 0.2 }}
           >
             <BandcampIcon />
           </motion.a>
           <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
             <Link
               to="/cart"
               className="relative font-heavy uppercase text-sm tracking-widest text-bone hover:text-blood transition-colors"
               onClick={() => setOpen(false)}
             >
               🛒
               {totals.count > 0 && (
                 <motion.span 
                   className="absolute -top-1 -right-2 bg-blood text-ink w-5 h-5 flex items-center justify-center text-xs font-heavy rounded-full"
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                 >
                   {totals.count}
                 </motion.span>
               )}
             </Link>
           </motion.div>
           <motion.button
             className="lg:hidden"
             onClick={() => setOpen((v) => !v)}
             aria-label={open ? 'Close menu' : 'Open menu'}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
           >
             {open ? <CloseIcon /> : <MenuIcon />}
           </motion.button>
         </div>
      </nav>

       {/* Mobile drawer */}
       <AnimatePresence>
         {open && (
           <motion.div 
             className="lg:hidden border-t-2 border-bone bg-ink"
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: 'auto' }}
             exit={{ opacity: 0, height: 0 }}
             transition={{ duration: 0.3 }}
           >
             <ul className="flex flex-col">
               {NAV.map((item, idx) => (
                 <motion.li 
                   key={item.to} 
                   className="border-b border-panel"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.05, duration: 0.3 }}
                 >
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
                 </motion.li>
               ))}
             </ul>
           </motion.div>
         )}
       </AnimatePresence>
    </header>
  )
}
