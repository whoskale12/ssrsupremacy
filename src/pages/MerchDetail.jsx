import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { getMerchById } from '../data/merch.js'
import { useCart } from '../context/CartContext.jsx'
import GrainOverlay from '../components/GrainOverlay.jsx'
import { ScrollReveal, HoverScale } from '../components/ScrollReveal.jsx'

export default function MerchDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getMerchById(id)
  const { addToCart } = useCart()

  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heavy text-3xl md:text-4xl mb-4 uppercase">Product Not Found</h1>
          <p className="text-bone/70 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/store" className="font-heavy uppercase text-blood hover:text-blood/70 border-b-2 border-blood">
            Back to Store
          </Link>
        </div>
      </div>
    )
  }

  function handleAddToCart() {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Pilih ukuran dulu!')
      return
    }

    addToCart(product, selectedSize || 'One Size', quantity)
    setAddedToCart(true)

    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  }

  const currentGalleryItem = product.gallery[galleryIndex]

  return (
    <div>
      <GrainOverlay />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-6">
        <div className="flex items-center gap-2 font-mono text-sm text-bone/60">
          <Link to="/store" className="hover:text-bone">
            Store
          </Link>
          <span>/</span>
          <span className="text-bone">{product.name}</span>
        </div>
      </div>

       {/* Main Content */}
       <section className="mx-auto max-w-7xl px-4 md:px-8 py-12">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
           {/* Gallery Section */}
           <ScrollReveal delay={0} duration={0.8} direction="left">
             <div className="space-y-4">
               {/* Main Image */}
               <motion.div 
                 className="hard-border bg-ink aspect-square flex items-center justify-center overflow-hidden"
                 key={galleryIndex}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4 }}
               >
                 <img
                   src={currentGalleryItem.img}
                   alt={currentGalleryItem.label}
                   className="w-full h-full object-cover"
                 />
               </motion.div>

               {/* Thumbnail Gallery */}
               <div className="grid grid-cols-3 gap-3">
                 {product.gallery.map((item, idx) => (
                   <motion.button
                     key={idx}
                     onClick={() => setGalleryIndex(idx)}
                     className={`hard-border aspect-square flex items-center justify-center overflow-hidden transition-all ${
                       idx === galleryIndex
                         ? 'border-blood'
                         : 'border-bone/30 hover:border-bone/60'
                     }`}
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.2 }}
                   >
                     <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                   </motion.button>
                 ))}
               </div>

               {/* Image Label */}
               <motion.p 
                 className="font-mono text-xs text-bone/60 uppercase tracking-wider"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
               >
                 {galleryIndex + 1} / {product.gallery.length} — {currentGalleryItem.label}
               </motion.p>
             </div>
           </ScrollReveal>

           {/* Product Info & Checkout */}
           <ScrollReveal delay={0.2} duration={0.8} direction="right">
             <div className="space-y-6">
               {/* Header */}
               <div>
                 <div className="flex items-start justify-between gap-4 mb-2">
                   <h1 className="font-heavy text-2xl md:text-3xl uppercase leading-tight">{product.name}</h1>
                   <motion.span 
                     className="hard-border bg-olive text-ink font-mono uppercase text-xs tracking-widest px-2 py-1 whitespace-nowrap"
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                   >
                     {product.type}
                   </motion.span>
                 </div>
                 <motion.p 
                   className="font-mono text-lg text-blood font-heavy"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.3 }}
                 >
                   {product.price}
                 </motion.p>
               </div>

                {/* Description */}
                <motion.div 
                  className="text-bone/80 leading-relaxed space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {product.description.split('\n').map((line, idx) => {
                    if (line.trim() === '') {
                      return <div key={idx} className="h-2" />
                    }
                    if (line.startsWith('✓')) {
                      return (
                        <div key={idx} className="flex gap-2 items-start">
                          <span className="text-blood mt-0.5">✓</span>
                          <span>{line.substring(1).trim()}</span>
                        </div>
                      )
                    }
                    if (line === 'SSR SUPREMACY Keychain') {
                      return <h3 key={idx} className="font-heavy text-lg uppercase">{line}</h3>
                    }
                    return <p key={idx} className="text-sm text-bone/60 italic">{line}</p>
                  })}
                </motion.div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block font-heavy uppercase text-sm tracking-widest mb-3">Ukuran</label>
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={product.soldOut}
                      className={`hard-border py-3 font-heavy uppercase text-sm tracking-widest transition-all ${
                        selectedSize === size
                          ? 'bg-blood text-bone border-blood'
                          : 'bg-transparent border-bone/50 text-bone hover:border-bone disabled:border-bone/20 disabled:text-bone/20 disabled:cursor-not-allowed'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div>
              <label className="block font-heavy uppercase text-sm tracking-widest mb-3">Jumlah</label>
              <div className="flex items-center gap-2 hard-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 font-heavy text-lg hover:bg-bone/10 transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center font-heavy text-lg bg-transparent border-x border-bone/30 py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 font-heavy text-lg hover:bg-bone/10 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

               {/* Add to Cart Button */}
               <HoverScale scale={1.05}>
                 <motion.button
                   onClick={handleAddToCart}
                   disabled={product.soldOut}
                   className={`w-full hard-border py-4 font-heavy uppercase text-sm tracking-widest transition-all ${
                     product.soldOut
                       ? 'border-bone/30 bg-bone/10 text-bone/30 cursor-not-allowed'
                       : addedToCart
                         ? 'bg-bone text-ink border-bone'
                         : 'border-blood bg-blood text-bone hover:bg-transparent hover:text-blood'
                   }`}
                   whileTap={{ scale: 0.98 }}
                 >
                   {product.soldOut ? 'Sold Out' : addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
                 </motion.button>
               </HoverScale>

               {/* Continue Shopping Link */}
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
               >
                 <Link
                   to="/store"
                   className="block text-center font-mono text-sm text-bone/70 hover:text-bone transition-colors"
                 >
                   ← Back to Store
                 </Link>
               </motion.div>
             </div>
           </ScrollReveal>
        </div>
      </section>
    </div>
  )
}