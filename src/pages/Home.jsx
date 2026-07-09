import { Link } from 'react-router-dom'
import { BAND, LINKS } from '../data/site.js'
import { MERCH } from '../data/merch.js'
import Marquee from '../components/Marquee.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import MerchCard from '../components/MerchCard.jsx'
import { InstagramIcon, BandcampIcon } from '../components/Icons.jsx'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden border-b-2 border-bone">
        <img src="/band-1.jpg" alt="SSR SUPREMACY" className="absolute inset-0 w-full h-full object-cover photo-bw opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative mx-auto max-w-7xl w-full px-4 md:px-8 pb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-olive">
            {`// ${BAND.origin} — ${BAND.genre}`}
          </span>
          <h1 className="display-title text-[18vw] md:text-[12rem] leading-[0.8] mt-3">
            SSR<br />SUPREMACY
          </h1>
          <p className="font-mono text-sm md:text-base text-bone/80 mt-4 max-w-xl">
            New record “{BAND.album.title}” — out now on {BAND.label}.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a href={LINKS.bandcamp} target="_blank" rel="noreferrer" className="btn-punk flex items-center gap-2">
              <BandcampIcon className="w-4 h-4" /> Listen Now
            </a>
            <Link to="/store" className="btn-ghost">Merch</Link>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="btn-ghost flex items-center gap-2">
              <InstagramIcon className="w-4 h-4" /> Follow
            </a>
          </div>
        </div>
      </section>

      <Marquee text="SSR SUPREMACY" fast />

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div className="relative aspect-[4/5] hard-border overflow-hidden">
          <img src="/band-2.jpg" alt="The band" className="w-full h-full object-cover photo-bw" />
        </div>
        <div>
          <SectionHeading kicker="Who We Are" title="Loud, Honest, Broken" />
          <p className="font-mono text-sm md:text-base text-bone/80 mt-6 leading-relaxed">
            SSR SUPREMACY is a five-piece from {BAND.origin}, dealing in {BAND.genre.toLowerCase()} —
            equal parts heartbreak and adrenaline. Big hooks, bigger amps, and songs built to be screamed
            back in a crowded room.
          </p>
          <p className="font-mono text-sm md:text-base text-bone/80 mt-4 leading-relaxed">
            Our debut “{BAND.album.title}” is a short, sharp shot of everything we are.
          </p>
          <Link to="/profile" className="btn-ghost mt-7">Meet the Band</Link>
        </div>
      </section>

      {/* ALBUM FEATURE */}
      <section className="border-y-2 border-bone bg-panel">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-10 md:grid-cols-[1fr_1.2fr] items-center">
           <div className="relative aspect-square hard-border overflow-hidden bg-ink">
             <img src="/Cover Maxi-Single.jpg" alt={BAND.album.title} className="w-full h-full object-cover" />
           </div>
          <div>
            <SectionHeading kicker="New Album" title="Now Streaming" />
            <ul className="mt-6 divide-y divide-bone/15 border-y border-bone/15">
              {BAND.album.tracks.map((t) => (
                <li key={t.n} className="flex items-center justify-between py-3">
                  <span className="font-heavy uppercase text-lg">
                    <span className="text-olive mr-3">{String(t.n).padStart(2, '0')}</span>
                    {t.title}
                  </span>
                  <span className="font-mono text-sm text-bone/60">{t.len}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/music" className="btn-punk">Play Album</Link>
              <a href={LINKS.bandcamp} target="_blank" rel="noreferrer" className="btn-ghost">Buy on Bandcamp</a>
            </div>
          </div>
        </div>
      </section>

      {/* MERCH TEASER */}
      <section className="border-t-2 border-bone bg-panel">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionHeading kicker="Store" title="Grab Merch" />
            <Link to="/store" className="btn-ghost">Full Store</Link>
          </div>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {MERCH.slice(0, 4).map((item) => (
              <MerchCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
