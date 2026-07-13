import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'
import { X } from 'lucide-react'
import { ScrollReveal, HoverScale, StaggerContainer, StaggerItem } from '../components/ScrollReveal.jsx'

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
  const [showQrisModal, setShowQrisModal] = useState(false)
  const [qrisConfirmed, setQrisConfirmed] = useState(false)

   const whatsappUrl = useMemo(() => {
     const phoneNumber = '6285711631027'
     const message = encodeURIComponent(makeWhatsappMessage(cartItems, buyer))
     return `https://wa.me/${phoneNumber}?text=${message}`
   }, [cartItems, buyer])

  function handleChange(event) {
    const { name, value } = event.target
    setBuyer((current) => ({ ...current, [name]: value }))
  }

  function handleQrisClick() {
    setShowQrisModal(true)
    setQrisConfirmed(false)
  }

  function handleCloseQrisModal() {
    setShowQrisModal(false)
    setQrisConfirmed(false)
  }

  function handleQrisConfirmed() {
    window.open(whatsappUrl, '_blank')
    handleCloseQrisModal()
  }

  return (
    <div>
       <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
         <ScrollReveal delay={0} duration={0.8}>
           <div className="mb-10">
             <p className="font-mono text-blood uppercase tracking-[0.3em] text-xs mb-3">Checkout</p>
             <h1 className="font-heavy uppercase text-4xl md:text-6xl leading-none">Your Cart</h1>
              <p className="text-bone/70 mt-4 max-w-2xl">
                Review pesanan kamu, isi data pemesan, lalu checkout via WhatsApp.
              </p>
           </div>
         </ScrollReveal>

         {cartItems.length === 0 ? (
           <ScrollReveal delay={0.2} duration={0.8}>
             <div className="hard-border bg-panel p-8 text-center">
               <h2 className="font-heavy uppercase text-2xl mb-3">Cart masih kosong</h2>
               <p className="font-mono text-sm text-bone/70 mb-6">Pilih merch dulu dari store.</p>
               <HoverScale scale={1.05}>
                 <Link
                   to="/store"
                   className="inline-block border-2 border-blood bg-blood px-6 py-3 font-heavy uppercase text-xs tracking-widest text-bone hover:bg-transparent hover:text-blood transition-all"
                 >
                   Back to Store
                 </Link>
               </HoverScale>
             </div>
           </ScrollReveal>
         ) : (
           <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
             <StaggerContainer staggerDelay={0.08}>
               <div className="space-y-4">
                 {cartItems.map((item) => (
                   <StaggerItem key={`${item.id}-${item.size}`}>
                     <motion.div className="hard-border bg-panel p-4 flex gap-4" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
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
                     </motion.div>
                   </StaggerItem>
                 ))}

                 <button onClick={clearCart} className="font-mono text-xs uppercase text-bone/60 hover:text-blood">
                   Clear cart
                 </button>
               </div>
             </StaggerContainer>

             <motion.aside 
               className="hard-border bg-panel p-6 h-fit"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
             >
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

               <div className="space-y-3">
                 <HoverScale scale={1.05}>
                   <button
                     onClick={handleQrisClick}
                     className="block w-full border-2 border-blood bg-blood px-6 py-4 text-center font-heavy uppercase text-xs tracking-widest text-bone hover:bg-transparent hover:text-blood transition-all"
                   >
                     Checkout via QRIS
                   </button>
                 </HoverScale>
                 <HoverScale scale={1.05}>
                   <a
                     href={whatsappUrl}
                     target="_blank"
                     rel="noreferrer"
                     className="block w-full border-2 border-blood bg-transparent px-6 py-4 text-center font-heavy uppercase text-xs tracking-widest text-blood hover:bg-blood hover:text-bone transition-all"
                   >
                     Checkout via WhatsApp
                   </a>
                 </HoverScale>
               </div>

                <p className="font-mono text-xs text-bone/50 mt-4 leading-relaxed">
                  Pilih metode pembayaran: QRIS atau WhatsApp.
                </p>
             </motion.aside>
          </div>
        )}
         <AnimatePresence>
           {showQrisModal && (
             <motion.div 
               className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
             >
               <motion.div 
                 className="hard-border bg-panel max-w-md w-full p-6"
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0.9, opacity: 0 }}
                 transition={{ duration: 0.3 }}
               >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-heavy uppercase text-xl">Pembayaran QRIS</h3>
                <button
                  onClick={handleCloseQrisModal}
                  className="text-bone/60 hover:text-bone transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6">
                <div className="hard-border bg-ink p-6 aspect-square flex items-center justify-center mb-4">
                  <div className="text-center">
                    <p className="font-mono text-sm text-bone/60 mb-2">QRIS Code Placeholder</p>
                    <p className="font-mono text-xs text-bone/40">[Gambar QRIS akan tampil di sini]</p>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-sm text-bone/70">
                  <p>📱 Scan QRIS code di atas dengan aplikasi e-wallet kamu</p>
                  <p>💳 Atau input manual nomor referensi jika diperlukan</p>
                  <p className="text-blood font-heavy">Total: {totals.subtotalLabel}</p>
                </div>
              </div>

              <div className="mb-4 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="qris-confirm"
                  checked={qrisConfirmed}
                  onChange={(e) => setQrisConfirmed(e.target.checked)}
                  className="mt-1 cursor-pointer"
                />
                <label htmlFor="qris-confirm" className="font-mono text-sm text-bone/80 cursor-pointer">
                  Saya sudah melakukan pembayaran melalui QRIS di atas
                </label>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleQrisConfirmed}
                  disabled={!qrisConfirmed}
                  className={`w-full border-2 border-blood px-6 py-3 text-center font-heavy uppercase text-xs tracking-widest transition-all ${
                    qrisConfirmed
                      ? 'bg-blood text-bone hover:bg-transparent hover:text-blood'
                      : 'bg-bone/10 text-bone/40 border-bone/30 cursor-not-allowed'
                  }`}
                >
                  Lanjut ke WhatsApp
                </button>
                <button
                  onClick={handleCloseQrisModal}
                  className="w-full border-2 border-bone/30 bg-transparent px-6 py-3 text-center font-heavy uppercase text-xs tracking-widest text-bone/60 hover:text-bone hover:border-bone transition-all"
                >
                  Batal
                 </button>
               </div>
             </motion.div>
           </motion.div>
           )}
         </AnimatePresence>
      </section>
    </div>
  )
}
