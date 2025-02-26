"use client"
import { useState } from 'react'
import { featuredProducts } from '../components/data'
import ProductCard from '../components/ProductCard'
import { motion, AnimatePresence } from 'framer-motion'
import SearchBar from '../components/SearchBar'

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('name')
  const [filterByPrice, setFilterByPrice] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = featuredProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesPrice = 
        filterByPrice === 'all' ? true :
        filterByPrice === 'under100' ? product.price < 100 :
        filterByPrice === '100to500' ? product.price >= 100 && product.price <= 500 :
        product.price > 500

      return matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'priceLow') return a.price - b.price
      if (sortBy === 'priceHigh') return b.price - a.price
      return 0
    })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
      >
        <h1 className="text-2xl font-bold">Our Products</h1>
        <div className="flex gap-4">
          <motion.select
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            <option value="name">Sort by Name</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </motion.select>
          <motion.select
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            value={filterByPrice}
            onChange={(e) => setFilterByPrice(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            <option value="all">All Prices</option>
            <option value="under100">Under $100</option>
            <option value="100to500">$100 - $500</option>
            <option value="over500">Over $500</option>
          </motion.select>
        </div>
      </motion.div>
      
      {filteredProducts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </motion.div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  )
} 