import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Edit2, Trash2, Calendar, User } from 'lucide-react'

const News = () => {
  const [news, setNews] = useState([
    { id: 1, title: 'Lancio Nuova Versione Dashboard', author: 'Marco Rossi', date: '2024-01-30', category: 'Update', views: 1250 },
    { id: 2, title: 'Miglioramenti Performance Sistema', author: 'Anna Bianchi', date: '2024-01-28', category: 'Tecnico', views: 890 },
    { id: 3, title: 'Nuove Funzionalità Disponibili', author: 'Giovanni Verdi', date: '2024-01-25', category: 'Feature', views: 2150 },
    { id: 4, title: 'Manutenzione Server Programmata', author: 'Marco Rossi', date: '2024-01-22', category: 'Avviso', views: 3200 },
  ])
  const [searchTerm, setSearchTerm] = useState('')

  const getCategoryColor = (category) => {
    const colors = {
      'Update': 'bg-blue-500/20 text-blue-300',
      'Tecnico': 'bg-purple-500/20 text-purple-300',
      'Feature': 'bg-green-500/20 text-green-300',
      'Avviso': 'bg-amber-500/20 text-amber-300',
    }
    return colors[category] || 'bg-slate-500/20 text-slate-300'
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
            <h1 className="text-3xl font-bold text-white">News</h1>
            <p className="text-slate-400 mt-1">Gestisci le notizie e gli aggiornamenti</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg smooth-transition"
          >
            <Plus size={20} />
            Nuova Notizia
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
                placeholder="Cerca notizia..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 smooth-transition">
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
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 smooth-transition">
                  {item.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-slate-500 text-sm">{item.views.toLocaleString()} visualizzazioni</span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-400 font-medium flex items-center gap-1 hover:text-blue-300 smooth-transition"
                  >
                    Leggi →
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

export default News