import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BAND, LINKS } from '../data/site.js'
import { MERCH } from '../data/merch.js'
import Marquee from '../components/Marquee.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import MerchCard from '../components/MerchCard.jsx'
import { InstagramIcon, BandcampIcon } from '../components/Icons.jsx'
import { ScrollReveal, HoverScale, StaggerContainer, StaggerItem } from '../components/ScrollReveal.jsx'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden border-b-2 border-bone">
        <img src="/band-1.webp" alt="SSR SUPREMACY" className="absolute inset-0 w-full h-full object-cover photo-bw opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <motion.div 
          className="relative mx-auto max-w-7xl w-full px-4 md:px-8 pb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span 
            className="font-mono text-xs uppercase tracking-[0.3em] text-olive block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {`// ${BAND.origin} — ${BAND.genre}`}
          </motion.span>
          <motion.h1 
            className="display-title text-[18vw] md:text-[12rem] leading-[0.8] mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            SSR<br />SUPREMACY
          </motion.h1>
          <motion.p 
            className="font-mono text-sm md:text-base text-bone/80 mt-4 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            New record "{BAND.album.title}" — out now on {BAND.label}.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-3 mt-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <HoverScale scale={1.05}>
              <a href={LINKS.bandcamp} target="_blank" rel="noreferrer" className="btn-punk flex items-center gap-2">
                <BandcampIcon className="w-4 h-4" /> Listen Now
              </a>
            </HoverScale>
            <HoverScale scale={1.05}>
              <Link to="/store" className="btn-ghost">Merch</Link>
            </HoverScale>
            <HoverScale scale={1.05}>
              <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="btn-ghost flex items-center gap-2">
                <InstagramIcon className="w-4 h-4" /> Follow
              </a>
            </HoverScale>
          </motion.div>
        </motion.div>
      </section>

      <Marquee text="SSR SUPREMACY" fast />

       {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-10 md:grid-cols-2 items-center">
        <ScrollReveal delay={0} duration={0.8} distance={50} direction="left">
          <div className="relative aspect-[4/5] hard-border overflow-hidden">
            <img src="/band-2.webp" alt="The band" className="w-full h-full object-cover photo-bw" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} duration={0.8} distance={50} direction="right">
          <div>
            <SectionHeading kicker="Who We Are" title="Loud, Honest, Broken" />
            <p className="font-mono text-sm md:text-base text-bone/80 mt-6 leading-relaxed">
              SSR SUPREMACY is a five-piece from {BAND.origin}, dealing in {BAND.genre.toLowerCase()} —
              equal parts heartbreak and adrenaline. Big hooks, bigger amps, and songs built to be screamed
              back in a crowded room.
            </p>
            <p className="font-mono text-sm md:text-base text-bone/80 mt-4 leading-relaxed">
              Our debut "{BAND.album.title}" is a short, sharp shot of everything we are.
            </p>
            <HoverScale scale={1.05}>
              <Link to="/profile" className="btn-ghost mt-7">Meet the Band</Link>
            </HoverScale>
          </div>
        </ScrollReveal>
      </section>

       {/* ALBUM FEATURE */}
      <section className="border-y-2 border-bone bg-panel">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-10 md:grid-cols-[1fr_1.2fr] items-center">
          <ScrollReveal delay={0} duration={0.8} direction="left">
            <div className="relative aspect-square hard-border overflow-hidden bg-ink">
              <img src="/Cover Maxi-Single.webp" alt={BAND.album.title} className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} duration={0.8} direction="right">
            <div>
              <SectionHeading kicker="New Album" title="Now Streaming" />
              <StaggerContainer staggerDelay={0.05}>
                <ul className="mt-6 divide-y divide-bone/15 border-y border-bone/15">
                  {BAND.album.tracks.map((t) => (
                    <StaggerItem key={t.n}>
                      <li className="flex items-center justify-between py-3">
                        <span className="font-heavy uppercase text-lg">
                          <span className="text-olive mr-3">{String(t.n).padStart(2, '0')}</span>
                          {t.title}
                        </span>
                        <span className="font-mono text-sm text-bone/60">{t.len}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
              <motion.div className="flex flex-wrap gap-3 mt-7">
                <HoverScale scale={1.05}>
                  <Link to="/music" className="btn-punk">Play Album</Link>
                </HoverScale>
                <HoverScale scale={1.05}>
                  <a href={LINKS.bandcamp} target="_blank" rel="noreferrer" className="btn-ghost">Buy on Bandcamp</a>
                </HoverScale>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

       {/* MERCH TEASER */}
      <section className="border-t-2 border-bone bg-panel">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <ScrollReveal delay={0} duration={0.8}>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <SectionHeading kicker="Store" title="Grab Merch" />
              <HoverScale scale={1.05}>
                <Link to="/store" className="btn-ghost">Full Store</Link>
              </HoverScale>
            </div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
              {MERCH.slice(0, 4).map((item) => (
                <StaggerItem key={item.id}>
                  <HoverScale scale={1.05}>
                    <MerchCard item={item} />
                  </HoverScale>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
