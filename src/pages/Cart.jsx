import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

function makeWhatsappMessage(cartItems, buyer) {
  const lines = [
    'Halo SSR Supremacy, saya mau order merch:',
    '',
    ...cartItems.map((item, index) => `${index + 1}. ${item.name} - Size: ${item.size} - Qty: ${item.quantity} - ${item.price}`),
    '',
    `Nama: ${buyer.name || '-'}`,
    `No. HP: ${buyer.phone || '-'}`,
    `Alamat: ${buyer.address || '-'}`,
    `Catatan: ${buyer.notes || '-'}`,
  ]

  return lines.join('\n')
}

export default function Cart() {
  const { cartItems, totals, updateQuantity, removeFromCart, clearCart } = useCart()
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  })

  const whatsappUrl = useMemo(() => {
    const phoneNumber = '6281234567890'
    const message = encodeURIComponent(makeWhatsappMessage(cartItems, buyer))
    return `https://wa.me/${phoneNumber}?text=${message}`
  }, [cartItems, buyer])

  function handleChange(event) {
    const { name, value } = event.target
    setBuyer((current) => ({ ...current, [name]: value }))
  }

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="mb-10">
          <p className="font-mono text-blood uppercase tracking-[0.3em] text-xs mb-3">Checkout</p>
          <h1 className="font-heavy uppercase text-4xl md:text-6xl leading-none">Your Cart</h1>
          <p className="text-bone/70 mt-4 max-w-2xl">
            Review pesanan kamu, isi data pemesan, lalu checkout via WhatsApp. Nomor WhatsApp masih dummy dan bisa
            diganti nanti.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="hard-border bg-panel p-8 text-center">
            <h2 className="font-heavy uppercase text-2xl mb-3">Cart masih kosong</h2>
            <p className="font-mono text-sm text-bone/70 mb-6">Pilih merch dulu dari store.</p>
            <Link
              to="/store"
              className="inline-block border-2 border-blood bg-blood px-6 py-3 font-heavy uppercase text-xs tracking-widest text-bone hover:bg-transparent hover:text-blood transition-all"
            >
              Back to Store
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="hard-border bg-panel p-4 flex gap-4">
                  <img src={item.image} alt={item.name} className="h-24 w-24 object-cover hard-border bg-ink" />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h2 className="font-heavy uppercase text-lg leading-tight">{item.name}</h2>
                        <p className="font-mono text-sm text-olive mt-1">{item.price}</p>
                        <p className="font-mono text-xs text-bone/60 mt-1">Size: {item.size}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="font-mono text-xs uppercase text-blood hover:text-bone self-start"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-2 hard-border w-fit">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="px-3 py-1 font-heavy hover:bg-bone/10"
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-heavy border-x border-bone/30 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="px-3 py-1 font-heavy hover:bg-bone/10"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button onClick={clearCart} className="font-mono text-xs uppercase text-bone/60 hover:text-blood">
                Clear cart
              </button>
            </div>

            <aside className="hard-border bg-panel p-6 h-fit">
              <h2 className="font-heavy uppercase text-2xl mb-5">Order Details</h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="block font-heavy uppercase text-xs tracking-widest mb-2">Nama</span>
                  <input
                    name="name"
                    value={buyer.name}
                    onChange={handleChange}
                    className="w-full hard-border bg-ink px-4 py-3 font-mono text-sm focus:outline-none focus:border-blood"
                    placeholder="Nama kamu"
                  />
                </label>

                <label className="block">
                  <span className="block font-heavy uppercase text-xs tracking-widest mb-2">No. HP</span>
                  <input
                    name="phone"
                    value={buyer.phone}
                    onChange={handleChange}
                    className="w-full hard-border bg-ink px-4 py-3 font-mono text-sm focus:outline-none focus:border-blood"
                    placeholder="08xxxxxxxxxx"
                  />
                </label>

                <label className="block">
                  <span className="block font-heavy uppercase text-xs tracking-widest mb-2">Alamat</span>
                  <textarea
                    name="address"
                    value={buyer.address}
                    onChange={handleChange}
                    className="w-full min-h-24 hard-border bg-ink px-4 py-3 font-mono text-sm focus:outline-none focus:border-blood"
                    placeholder="Alamat lengkap"
                  />
                </label>

                <label className="block">
                  <span className="block font-heavy uppercase text-xs tracking-widest mb-2">Catatan</span>
                  <textarea
                    name="notes"
                    value={buyer.notes}
                    onChange={handleChange}
                    className="w-full min-h-20 hard-border bg-ink px-4 py-3 font-mono text-sm focus:outline-none focus:border-blood"
                    placeholder="Catatan tambahan"
                  />
                </label>
              </div>

              <div className="my-6 border-t-2 border-bone/30 pt-5">
                <div className="flex justify-between font-mono text-sm text-bone/70">
                  <span>Total item</span>
                  <span>{totals.count}</span>
                </div>
                <div className="flex justify-between font-heavy uppercase text-xl mt-3">
                  <span>Subtotal</span>
                  <span className="text-blood">{totals.subtotalLabel}</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full border-2 border-blood bg-blood px-6 py-4 text-center font-heavy uppercase text-xs tracking-widest text-bone hover:bg-transparent hover:text-blood transition-all"
              >
                Checkout via WhatsApp
              </a>

              <p className="font-mono text-xs text-bone/50 mt-4 leading-relaxed">
                Setelah klik checkout, pesanan akan dikirim ke WhatsApp admin. Ganti nomor dummy di file
                `src/pages/Cart.jsx` nanti.
              </p>
            </aside>
          </div>
        )}
      </section>
    </div>
  )
}