"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </motion.div>
  )
} 