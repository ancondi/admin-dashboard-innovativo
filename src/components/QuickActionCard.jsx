import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const QuickActionCard = ({ title, icon, color }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`glass p-6 rounded-2xl w-full text-left group relative overflow-hidden`}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 smooth-transition`} />

      <div className="relative z-10">
        <div className="text-4xl mb-3">{icon}</div>
        <p className="text-white font-semibold mb-2">{title}</p>
        <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 smooth-transition">
          Vai
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.button>
  )
}

export default QuickActionCard