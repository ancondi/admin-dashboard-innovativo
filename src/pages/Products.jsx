import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Edit2, Trash2, ShoppingCart, Star } from 'lucide-react'

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Prodotto Premium', price: '€99.99', stock: 145, rating: 4.8, category: 'Premium', image: '📦' },
    { id: 2, name: 'Prodotto Standard', price: '€49.99', stock: 320, rating: 4.5, category: 'Standard', image: '📦' },
    { id: 3, name: 'Prodotto Lite', price: '€29.99', stock: 0, rating: 4.2, category: 'Budget', image: '📦' },
    { id: 4, name: 'Bundle Completo', price: '€149.99', stock: 87, rating: 4.9, category: 'Premium', image: '📦' },
    { id: 5, name: 'Accessorio A', price: '€15.99', stock: 450, rating: 4.3, category: 'Accessori', image: '📦' },
    { id: 6, name: 'Accessorio B', price: '€24.99', stock: 230, rating: 4.6, category: 'Accessori', image: '📦' },
  ])
  const [searchTerm, setSearchTerm] = useState('')

  const getCategoryColor = (category) => {
    const colors = {
      'Premium': 'bg-purple-500/20 text-purple-300',
      'Standard': 'bg-blue-500/20 text-blue-300',
      'Budget': 'bg-green-500/20 text-green-300',
      'Accessori': 'bg-pink-500/20 text-pink-300',
    }
    return colors[category] || 'bg-slate-500/20 text-slate-300'
  }

  const getStockColor = (stock) => {
    if (stock === 0) return 'text-red-400'
    if (stock < 100) return 'text-amber-400'
    return 'text-green-400'
  }

  return (
    <div className="flex-1 overflow-auto lg:ml-72">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-20 backdrop-blur-md border-b border-slate-700 px-6 py-4 lg:ml-0"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Prodotti</h1>
            <p className="text-slate-400 mt-1">Gestisci il catalogo prodotti</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg smooth-transition"
          >
            <Plus size={20} />
            Nuovo Prodotto
          </motion.button>
        </div>
      </motion.div>

      {/* Content */}
      <div className="p-6 lg:ml-0">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-3 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Cerca prodotto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass p-6 rounded-2xl group cursor-pointer"
              >
                {/* Image */}
                <div className="w-full h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:to-purple-500/20 smooth-transition">
                  <span className="text-6xl">{product.image}</span>
                </div>

                {/* Category */}
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
                    {product.category}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}
                      />
                    ))}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 smooth-transition">
                  {product.name}
                </h3>

                {/* Rating */}
                <p className="text-sm text-slate-400 mb-4">{product.rating} ⭐</p>

                {/* Price and Stock */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700">
                  <span className="text-2xl font-bold gradient-text">{product.price}</span>
                  <span className={`text-sm font-semibold ${getStockColor(product.stock)}`}>
                    {product.stock === 0 ? 'Esaurito' : `${product.stock} pz`}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg font-medium smooth-transition"
                  >
                    <ShoppingCart size={16} />
                    Dettagli
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-slate-700 rounded-lg smooth-transition text-blue-400"
                  >
                    <Edit2 size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-slate-700 rounded-lg smooth-transition text-red-400"
                  >
                    <Trash2 size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products