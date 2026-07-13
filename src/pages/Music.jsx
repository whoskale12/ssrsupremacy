import { BAND, LINKS } from '../data/site.js'
import PageHeader from '../components/PageHeader.jsx'
import { BandcampIcon } from '../components/Icons.jsx'
import { ScrollReveal, HoverScale, StaggerContainer, StaggerItem } from '../components/ScrollReveal.jsx'

export default function Music() {
  return (
    <div>
      <PageHeader
        kicker="Music"
        title="Listen"
        subtitle={`“${BAND.album.title}” — ${BAND.album.year} · ${BAND.label}`}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 grid gap-10 lg:grid-cols-2 items-start">
        {/* Album cover */}
        <ScrollReveal delay={0} duration={0.8} direction="left">
          <div className="hard-border bg-panel overflow-hidden">
            <img src="/Cover Maxi-Single.webp" alt={BAND.album.title} className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>

        {/* Tracklist + links */}
        <ScrollReveal delay={0.2} duration={0.8} direction="right">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-olive">{'// Tracklist'}</span>
            <h2 className="display-title text-4xl md:text-5xl mt-2 mb-6">{BAND.album.title}</h2>
            <StaggerContainer staggerDelay={0.05}>
              <ul className="divide-y divide-bone/15 border-y-2 border-bone">
                {BAND.album.tracks.map((t) => (
                  <StaggerItem key={t.n}>
                    <li className="flex items-center justify-between py-4">
                      <span className="font-heavy uppercase text-lg md:text-xl">
                        <span className="text-olive mr-3">{String(t.n).padStart(2, '0')}</span>
                        {t.title}
                      </span>
                      <span className="font-mono text-sm text-bone/60">{t.len}</span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>

            <div className="flex flex-wrap gap-3 mt-8">
              <HoverScale scale={1.05}>
                <a href={LINKS.bandcamp} target="_blank" rel="noreferrer" className="btn-punk flex items-center gap-2">
                  <BandcampIcon className="w-4 h-4" /> Bandcamp
                </a>
              </HoverScale>
            </div>
            <p className="font-mono text-xs text-bone/40 mt-6">
              Name your price on Bandcamp — every stream and share helps us keep the amps on.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}