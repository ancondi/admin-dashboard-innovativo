import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react'

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Marco Rossi', email: 'marco@example.com', role: 'Admin', status: 'Attivo', date: '2024-01-15' },
    { id: 2, name: 'Anna Bianchi', email: 'anna@example.com', role: 'User', status: 'Attivo', date: '2024-01-20' },
    { id: 3, name: 'Giovanni Verdi', email: 'giovanni@example.com', role: 'Editor', status: 'Inattivo', date: '2024-01-25' },
  ])
  const [searchTerm, setSearchTerm] = useState('')

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
            <h1 className="text-3xl font-bold text-white">Utenti</h1>
            <p className="text-slate-400 mt-1">Gestisci gli utenti del sistema</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg smooth-transition"
          >
            <Plus size={20} />
            Nuovo Utente
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
                placeholder="Cerca utente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-slate-700 bg-slate-800/50">
                  <tr>
                    <th className="text-left px-6 py-4 text-slate-300 font-semibold">Nome</th>
                    <th className="text-left px-6 py-4 text-slate-300 font-semibold">Email</th>
                    <th className="text-left px-6 py-4 text-slate-300 font-semibold">Ruolo</th>
                    <th className="text-left px-6 py-4 text-slate-300 font-semibold">Status</th>
                    <th className="text-left px-6 py-4 text-slate-300 font-semibold">Data</th>
                    <th className="text-left px-6 py-4 text-slate-300 font-semibold">Azioni</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-slate-700 hover:bg-slate-800/30 smooth-transition"
                    >
                      <td className="px-6 py-4 text-white font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-slate-300">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          user.status === 'Attivo'
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-red-500/20 text-red-300'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400 text-sm">{user.date}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 hover:bg-slate-700 rounded-lg smooth-transition text-blue-400"
                        >
                          <Eye size={18} />
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
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Users