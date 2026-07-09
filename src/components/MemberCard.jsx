export default function MemberCard({ member }) {
  return (
    <div className="group relative hard-border bg-panel overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden bg-ink">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover photo-bw group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 border-t-2 border-bone">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-olive">{member.role}</span>
        <h3 className="font-display uppercase text-2xl leading-none mt-1">{member.name}</h3>
        <p className="font-mono text-xs text-bone/70 mt-3 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  )
}
