import Marquee from './Marquee.jsx'

// Consistent top banner for inner pages.
export default function PageHeader({ kicker, title, subtitle }) {
  return (
    <>
      <section className="border-b-2 border-bone bg-panel">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          {kicker && (
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-olive">{`// ${kicker}`}</span>
          )}
          <h1 className="display-title text-6xl md:text-8xl mt-2">{title}</h1>
          {subtitle && <p className="font-mono text-sm md:text-base text-bone/70 mt-4 max-w-2xl">{subtitle}</p>}
        </div>
      </section>
      <Marquee text={title} />
    </>
  )
}
