import { BAND } from '../data/site.js'
import { MEMBERS } from '../data/members.js'
import PageHeader from '../components/PageHeader.jsx'
import MemberCard from '../components/MemberCard.jsx'
import { ScrollReveal, HoverScale, StaggerContainer, StaggerItem } from '../components/ScrollReveal.jsx'

export default function Profile() {
  return (
    <div>
      <PageHeader
        kicker="Profile"
        title="The Band"
        subtitle={`Five people, one loud idea. ${BAND.genre} from ${BAND.origin}.`}
      />

      {/* Bio band */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
        <ScrollReveal delay={0} duration={0.8} direction="left">
          <div>
            <p className="font-mono text-sm md:text-base text-bone/80 leading-relaxed">
              SSR SUPREMACY started the way most good things do — too many feelings and not enough ways to say them.
              What came out was fast, honest, and a little bit unhinged: {BAND.genre.toLowerCase()} that lives somewhere
              between a diary entry and a broken amp.
            </p>
            <p className="font-mono text-sm md:text-base text-bone/80 leading-relaxed mt-4">
              Since day one we've believed in small rooms, loud nights, and songs you can scream back word for word.
              "{BAND.album.title}" is the first chapter — and we're just getting started.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} duration={0.8} direction="right">
          <div className="relative aspect-[4/3] hard-border overflow-hidden">
            <img src="/band-1.webp" alt="SSR SUPREMACY" className="w-full h-full object-cover photo-bw" />
          </div>
        </ScrollReveal>
      </section>

       {/* Members */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20">
        <ScrollReveal delay={0} duration={0.8}>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-olive">{'// Lineup'}</span>
          <h2 className="display-title text-4xl md:text-5xl mt-2 mb-10">Meet the Five</h2>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.08}>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {MEMBERS.map((m) => (
              <StaggerItem key={m.id}>
                <HoverScale scale={1.08}>
                  <MemberCard member={m} />
                </HoverScale>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </div>
  )
}
