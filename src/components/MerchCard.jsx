export default function MerchCard({ item }) {
  return (
    <div className="group hard-border bg-panel overflow-hidden flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-ink">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.soldOut && (
          <span className="absolute top-3 left-3 bg-ink text-blood border-2 border-blood font-heavy uppercase text-xs tracking-widest px-3 py-1">
            Sold Out
          </span>
        )}
        <span className="absolute top-3 right-3 bg-olive text-ink font-mono uppercase text-[10px] tracking-widest px-2 py-1">
          {item.type}
        </span>
      </div>
      <div className="p-4 border-t-2 border-bone flex flex-col gap-3 flex-1">
        <div className="flex-1">
          <h3 className="font-heavy uppercase text-lg leading-tight">{item.name}</h3>
          <p className="font-mono text-sm text-olive mt-1">{item.price}</p>
        </div>
        <button
          disabled={item.soldOut}
          className={`w-full font-heavy uppercase text-xs tracking-widest px-4 py-3 border-2 transition-all ${
            item.soldOut
              ? 'border-bone/30 text-bone/30 cursor-not-allowed'
              : 'border-blood bg-blood text-bone hover:bg-transparent hover:text-blood'
          }`}
        >
          {item.soldOut ? 'Unavailable' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
