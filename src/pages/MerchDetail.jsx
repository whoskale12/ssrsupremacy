import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { getMerchById } from '../data/merch.js'
import { useCart } from '../context/CartContext.jsx'
import GrainOverlay from '../components/GrainOverlay.jsx'

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
    if (!selectedSize) {
      alert('Pilih ukuran dulu!')
      return
    }

    addToCart(product, selectedSize, quantity)
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
          <div className="space-y-4">
            {/* Main Image */}
            <div className="hard-border bg-ink aspect-square flex items-center justify-center overflow-hidden">
              <img
                src={currentGalleryItem.img}
                alt={currentGalleryItem.label}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-3">
              {product.gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryIndex(idx)}
                  className={`hard-border aspect-square flex items-center justify-center overflow-hidden transition-all ${
                    idx === galleryIndex
                      ? 'border-blood'
                      : 'border-bone/30 hover:border-bone/60'
                  }`}
                >
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Image Label */}
            <p className="font-mono text-xs text-bone/60 uppercase tracking-wider">
              {galleryIndex + 1} / {product.gallery.length} — {currentGalleryItem.label}
            </p>
          </div>

          {/* Product Info & Checkout */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className="font-heavy text-2xl md:text-3xl uppercase leading-tight">{product.name}</h1>
                <span className="hard-border bg-olive text-ink font-mono uppercase text-xs tracking-widest px-2 py-1 whitespace-nowrap">
                  {product.type}
                </span>
              </div>
              <p className="font-mono text-lg text-blood font-heavy">{product.price}</p>
            </div>

            {/* Description */}
            <p className="text-bone/80 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
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
            <button
              onClick={handleAddToCart}
              disabled={product.soldOut}
              className={`w-full hard-border py-4 font-heavy uppercase text-sm tracking-widest transition-all ${
                product.soldOut
                  ? 'border-bone/30 bg-bone/10 text-bone/30 cursor-not-allowed'
                  : addedToCart
                    ? 'bg-bone text-ink border-bone'
                    : 'border-blood bg-blood text-bone hover:bg-transparent hover:text-blood'
              }`}
            >
              {product.soldOut ? 'Sold Out' : addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Continue Shopping Link */}
            <Link
              to="/store"
              className="block text-center font-mono text-sm text-bone/70 hover:text-bone transition-colors"
            >
              ← Back to Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}