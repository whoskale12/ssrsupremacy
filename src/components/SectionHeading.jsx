// Zine-style section heading with a kicker label and big display title.
export default function SectionHeading({ kicker, title, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {kicker && (
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-olive">
          {`// ${kicker}`}
        </span>
      )}
      <h2 className="display-title text-5xl md:text-7xl mt-2">{title}</h2>
    </div>
  )
}
