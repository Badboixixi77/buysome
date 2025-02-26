"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, StarHalf } from 'lucide-react'

export default function ProductReviews({ productId }) {
  const [reviews] = useState([
    {
      id: 1,
      user: "John D.",
      rating: 5,
      comment: "Excellent product! Exactly what I was looking for.",
      date: "2024-02-15"
    },
    {
      id: 2,
      user: "Sarah M.",
      rating: 4,
      comment: "Good quality, fast shipping. Would buy again.",
      date: "2024-02-14"
    }
  ])

  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the review to your backend
    console.log('New review:', { ...newReview, productId })
    alert('Review submitted successfully!')
    setNewReview({ rating: 5, comment: '' })
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
      
      {/* Reviews List */}
      <div className="space-y-4 mb-8">
        <AnimatePresence>
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-4 rounded-lg shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{review.user}</p>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'fill-current' : 'stroke-current'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add Review Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <h4 className="font-semibold mb-4">Write a Review</h4>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating
          </label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => setNewReview({ ...newReview, rating })}
                className="focus:outline-none"
              >
                <Star
                  className={`h-6 w-6 ${
                    rating <= newReview.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Review
          </label>
          <textarea
            required
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Review
        </motion.button>
      </form>
    </div>
  )
} 