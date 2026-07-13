import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BAND, LINKS, NAV } from '../data/site.js'
import { InstagramIcon, BandcampIcon, YoutubeIcon } from './Icons.jsx'
import Marquee from './Marquee.jsx'
import { ScrollReveal, HoverScale } from './ScrollReveal.jsx'

export default function Footer() {
  return (
    <footer className="mt-24">
      <Marquee text="NOW I SEE YOU · NOW I DON’T" />
       <div className="bg-ink border-t-2 border-bone">
         <motion.div 
           className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid gap-10 md:grid-cols-3"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
         >
           <ScrollReveal delay={0} duration={0.8} direction="up">
             <div>
               <motion.img 
                 src="/LOGO.png" 
                 alt="SSR SUPREMACY" 
                 className="h-24 w-auto mb-4"
                 whileHover={{ scale: 1.1 }}
                 transition={{ duration: 0.3 }}
               />
               <p className="font-mono text-sm text-bone/70 leading-relaxed">
                 {BAND.genre}
                 <br />
                 {BAND.origin}
                 <br />
                 {BAND.label}
               </p>
             </div>
           </ScrollReveal>

           <ScrollReveal delay={0.1} duration={0.8} direction="up">
             <div>
               <h4 className="font-heavy uppercase text-sm tracking-widest mb-4 text-olive">Navigate</h4>
               <ul className="grid grid-cols-2 gap-2">
                 {NAV.map((item, idx) => (
                   <motion.li 
                     key={item.to}
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.05, duration: 0.4 }}
                     viewport={{ once: true }}
                   >
                     <Link to={item.to} className="font-mono text-sm text-bone/80 hover:text-blood transition-colors">
                       {item.label}
                     </Link>
                   </motion.li>
                 ))}
               </ul>
             </div>
           </ScrollReveal>

           <ScrollReveal delay={0.2} duration={0.8} direction="up">
             <div>
               <h4 className="font-heavy uppercase text-sm tracking-widest mb-4 text-olive">Connect</h4>
               <div className="flex gap-4 mb-5">
                 <HoverScale scale={1.2}>
                   <a href={LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-blood transition-colors">
                     <InstagramIcon className="w-6 h-6" />
                   </a>
                 </HoverScale>
                 <HoverScale scale={1.2}>
                   <a href={LINKS.bandcamp} target="_blank" rel="noreferrer" aria-label="Bandcamp" className="hover:text-blood transition-colors">
                     <BandcampIcon className="w-6 h-6" />
                   </a>
                 </HoverScale>
                 <HoverScale scale={1.2}>
                   <a href={LINKS.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-blood transition-colors">
                     <YoutubeIcon className="w-6 h-6" />
                   </a>
                 </HoverScale>
               </div>
               <a href={LINKS.email} className="font-mono text-sm text-bone/80 hover:text-blood transition-colors break-all">
                 ssrsupremacy@gmail.com
               </a>
             </div>
           </ScrollReveal>
         </motion.div>

         <motion.div 
           className="border-t border-panel"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
         >
           <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
             <p className="font-mono text-xs text-bone/50">
               © {BAND.name} — All rights reserved.
             </p>
             <p className="font-mono text-xs text-bone/50">Built loud. Played louder.</p>
           </div>
         </motion.div>
      </div>
    </footer>
  )
}
