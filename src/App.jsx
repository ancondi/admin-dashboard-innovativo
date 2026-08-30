import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Users from './pages/Users'
import News from './pages/News'
import Products from './pages/Products'
import './index.css'

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/news" element={<News />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </motion.div>
    </Router>
  )
}

export default App