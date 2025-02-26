"use client"
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { featuredProducts } from '../components/data'

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = featuredProducts.map(product => ({
    src: product.image,
    alt: product.name
  }))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About BuySome</h1>
        <p className="text-xl text-gray-600">Your trusted source for premium electronics</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2024, BuySome has been at the forefront of providing high-quality electronics
            to customers worldwide. We believe in offering not just products, but experiences that
            enhance your daily life.
          </p>
          <p className="text-gray-600">
            Our commitment to quality, customer service, and innovation has made us a trusted name
            in the electronics retail industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-white text-center font-medium">
                  {images[currentImageIndex].alt}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Navigation Dots */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      >
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Quality First</h3>
          <p className="text-gray-600">
            We carefully select each product to ensure the highest quality standards.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
          <p className="text-gray-600">
            Your satisfaction is our top priority, with 24/7 customer support.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-gray-600">
            Stay ahead with the latest technology and innovative products.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
} 