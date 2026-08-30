import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, LayoutDashboard, Users, Newspaper, Package, Settings, LogOut } from 'lucide-react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/users', icon: Users, label: 'Utenti' },
    { path: '/news', icon: Newspaper, label: 'News' },
    { path: '/products', icon: Package, label: 'Prodotti' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden glass p-2 rounded-lg"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen w-72 glass-light border-r border-slate-700 z-40 flex flex-col hidden lg:flex"
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">AD</span>
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">Admin Pro</h1>
              <p className="text-xs text-slate-400">v1.0</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg smooth-transition ${
                    active
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 smooth-transition">
            <Settings size={20} />
            <span className="font-medium">Impostazioni</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 smooth-transition">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Mobile sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen w-72 glass-light border-r border-slate-700 z-30 flex flex-col lg:hidden"
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700 mt-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">AD</span>
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">Admin Pro</h1>
              <p className="text-xs text-slate-400">v1.0</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg smooth-transition ${
                    active
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>
      </motion.aside>
    </>
  )
}

export default Sidebar