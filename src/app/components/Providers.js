"use client"
import { CartProvider } from '../context/CartContext'
import { WishlistProvider } from '../context/WishlistContext'

export function Providers({ children }) {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CartProvider>
  )
} 