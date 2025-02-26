"use client"
import Image from 'next/image'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { motion } from 'framer-motion'
import { useState } from 'react'
import QuickViewModal from './QuickViewModal'
import { Heart } from 'lucide-react'

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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden relative"
      >
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white p-1.5 sm:p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            className={`h-4 w-4 sm:h-5 sm:w-5 ${
              isInWishlist(product._id)
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400'
            }`}
          />
        </button>

        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white text-gray-900 px-4 sm:px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
              onClick={() => setIsQuickViewOpen(true)}
            >
              Quick View
            </motion.button>
          </div>
        </div>
        <motion.div 
          className="p-3 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
          <p className="text-sm sm:text-base text-gray-600 mt-1 line-clamp-2">{product.description}</p>
          <div className="mt-3 sm:mt-4 flex items-center justify-between">
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <QuickViewModal 
        product={product} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </>
  )
} 