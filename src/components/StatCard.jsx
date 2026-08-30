import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

const StatCard = ({ title, value, change, isPositive, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass p-6 rounded-2xl overflow-hidden group cursor-pointer relative"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 smooth-transition`} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${color} bg-opacity-10`}>
            <Icon size={24} className={`text-transparent bg-gradient-to-br ${color} bg-clip-text`} />
          </div>
          <div className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}>
            {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            {change}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-slate-400 text-sm font-medium mb-2">{title}</h3>
        <p className="text-3xl font-bold text-white mb-1">{value}</p>
        <p className="text-xs text-slate-500">vs mese precedente</p>
      </div>
    </motion.div>
  )
}

export default StatCard