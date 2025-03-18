"use client"
import Image from 'next/image'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import QuickViewModal from './QuickViewModal'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  const toggleWishlist = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            className={`h-5 w-5 ${
              isInWishlist(product._id)
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400'
            }`}
          />
        </button>

        <div className="relative h-[400px] overflow-hidden group">
          <div className="h-full w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <button
              className="bg-white text-gray-900 px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => setIsQuickViewOpen(true)}
            >
              Quick View
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
          <p className="text-gray-600 mt-1 line-clamp-2">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <QuickViewModal 
        product={product} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </>
  )
} 