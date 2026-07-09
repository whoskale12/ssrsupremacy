// Scrolling zine-style ticker. Duplicates content so the loop is seamless.
export default function Marquee({ text = 'SSR SUPREMACY', fast = false, className = '' }) {
  const items = Array.from({ length: 8 })
  return (
    <div className={`overflow-hidden border-y-2 border-bone bg-ink py-3 ${className}`}>
      <div className={`flex w-max ${fast ? 'animate-marquee-fast' : 'animate-marquee'}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {items.map((_, i) => (
              <span
                key={i}
                className="font-display uppercase text-2xl md:text-3xl tracking-wider px-6 whitespace-nowrap text-bone"
              >
                {text}
                <span className="text-blood px-6">✶</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
