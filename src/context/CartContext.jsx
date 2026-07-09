import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function parsePrice(price) {
  return Number(String(price).replace(/[^\d]/g, '')) || 0
}

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(product, size, quantity = 1) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id && item.size === size)

      if (existing) {
        return items.map((item) =>
          item.id === product.id && item.size === size ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...items,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.img,
          size,
          quantity,
        },
      ]
    })
  }

  function removeFromCart(id, size) {
    setCartItems((items) => items.filter((item) => !(item.id === id && item.size === size)))
  }

  function updateQuantity(id, size, quantity) {
    if (quantity <= 0) {
      removeFromCart(id, size)
      return
    }

    setCartItems((items) => items.map((item) => (item.id === id && item.size === size ? { ...item, quantity } : item)))
  }

  function clearCart() {
    setCartItems([])
  }

  const totals = useMemo(() => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0)

    return {
      count,
      subtotal,
      subtotalLabel: formatRupiah(subtotal),
    }
  }, [cartItems])

  const value = {
    cartItems,
    totals,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}