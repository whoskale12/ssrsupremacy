import { MERCH } from '../data/merch.js'
import PageHeader from '../components/PageHeader.jsx'
import MerchCard from '../components/MerchCard.jsx'
import { StaggerContainer, StaggerItem, HoverScale, ScrollReveal } from '../components/ScrollReveal.jsx'

export default function Store() {
  return (
    <div>
      <PageHeader kicker="Store" title="Merch" subtitle="Wear it loud. Every purchase funds the next record and the next tour." />

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
            {MERCH.map((item) => (
              <StaggerItem key={item.id}>
                <HoverScale scale={1.05}>
                  <MerchCard item={item} />
                </HoverScale>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        <ScrollReveal delay={0.3} duration={0.8}>
          <div className="mt-10 hard-border bg-panel p-6 text-center">
            <p className="font-mono text-sm text-bone/70">
              By purchasing and using our merchandise, you support the continuous growth of the ssrsupremacy ecosystem. Made with 100% pure heart🤍✨
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
