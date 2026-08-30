import React from 'react'
import { motion } from 'framer-motion'

const ChartCard = ({ title, subtitle, children }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="glass p-6 rounded-2xl"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-slate-400">{subtitle}</p>
      </div>
      {children}
    </motion.div>
  )
}

export default ChartCard