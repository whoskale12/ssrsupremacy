import { BAND, LINKS, BANDCAMP_ALBUM_ID } from '../data/site.js'
import PageHeader from '../components/PageHeader.jsx'
import { BandcampIcon, SpotifyIcon } from '../components/Icons.jsx'

export default function Music() {
  const embedSrc = `https://bandcamp.com/EmbeddedPlayer/album=${BANDCAMP_ALBUM_ID}/size=large/bgcol=0a0a0a/linkcol=c1272d/tracklist=true/transparent=true/`

  return (
    <div>
      <PageHeader
        kicker="Music"
        title="Listen"
        subtitle={`“${BAND.album.title}” — ${BAND.album.year} · ${BAND.label}`}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 grid gap-10 lg:grid-cols-2 items-start">
        {/* Bandcamp player */}
        <div className="hard-border bg-panel p-2">
          <iframe
            title="SSR SUPREMACY — Bandcamp player"
            className="w-full"
            style={{ border: 0, height: 470 }}
            src={embedSrc}
            seamless
          >
            <a href={LINKS.bandcamp}>{BAND.album.title} by SSR SUPREMACY</a>
          </iframe>
        </div>

        {/* Tracklist + links */}
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-olive">{'// Tracklist'}</span>
          <h2 className="display-title text-4xl md:text-5xl mt-2 mb-6">{BAND.album.title}</h2>
          <ul className="divide-y divide-bone/15 border-y-2 border-bone">
            {BAND.album.tracks.map((t) => (
              <li key={t.n} className="flex items-center justify-between py-4">
                <span className="font-heavy uppercase text-lg md:text-xl">
                  <span className="text-olive mr-3">{String(t.n).padStart(2, '0')}</span>
                  {t.title}
                </span>
                <span className="font-mono text-sm text-bone/60">{t.len}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href={LINKS.bandcamp} target="_blank" rel="noreferrer" className="btn-punk flex items-center gap-2">
              <BandcampIcon className="w-4 h-4" /> Bandcamp
            </a>
            <a href={LINKS.spotify} target="_blank" rel="noreferrer" className="btn-ghost flex items-center gap-2">
              <SpotifyIcon className="w-4 h-4" /> Spotify
            </a>
          </div>
          <p className="font-mono text-xs text-bone/40 mt-6">
            Name your price on Bandcamp — every stream and share helps us keep the amps on.
          </p>
        </div>
      </section>
    </div>
  )
}
