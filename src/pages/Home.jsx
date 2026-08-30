import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { ArrowUpRight, ArrowDownRight, Users, Newspaper, Package, TrendingUp } from 'lucide-react'
import StatCard from '../components/StatCard'
import ChartCard from '../components/ChartCard'
import QuickActionCard from '../components/QuickActionCard'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Dati di esempio
  const userData = [
    { name: 'Gen', value: 400 },
    { name: 'Feb', value: 500 },
    { name: 'Mar', value: 450 },
    { name: 'Apr', value: 600 },
    { name: 'Mag', value: 700 },
    { name: 'Giu', value: 800 },
  ]

  const revenueData = [
    { name: 'Lun', revenue: 2400 },
    { name: 'Mar', revenue: 2210 },
    { name: 'Mer', revenue: 2290 },
    { name: 'Gio', revenue: 2000 },
    { name: 'Ven', revenue: 2181 },
  ]

  const categoryData = [
    { name: 'Categoria A', value: 30 },
    { name: 'Categoria B', value: 25 },
    { name: 'Categoria C', value: 20 },
    { name: 'Categoria D', value: 25 },
  ]

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b']

  const stats = [
    {
      title: 'Utenti Totali',
      value: '12,543',
      change: '+12.5%',
      isPositive: true,
      icon: Users,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'News Pubblicate',
      value: '348',
      change: '+4.2%',
      isPositive: true,
      icon: Newspaper,
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Prodotti Attivi',
      value: '1,256',
      change: '-2.1%',
      isPositive: false,
      icon: Package,
      color: 'from-pink-400 to-pink-600',
    },
    {
      title: 'Ricavi Totali',
      value: '€124.5K',
      change: '+23.8%',
      isPositive: true,
      icon: TrendingUp,
      color: 'from-amber-400 to-amber-600',
    },
  ]

  return (
    <div className="flex-1 overflow-auto lg:ml-72">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-20 backdrop-blur-md border-b border-slate-700 px-6 py-4 lg:ml-0"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1">Benvenuto nel tuo pannello di controllo</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="p-6 lg:ml-0">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            {/* Area Chart */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <ChartCard title="Crescita Utenti" subtitle="Ultimi 6 mesi">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={userData}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUv)" />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartCard>
            </motion.div>

            {/* Pie Chart */}
            <motion.div variants={itemVariants}>
              <ChartCard title="Distribuzione Categorie" subtitle="Percentuali">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartCard>
            </motion.div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div variants={itemVariants} className="mb-8">
            <ChartCard title="Ricavi Settimanali" subtitle="Ultimi 5 giorni">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Bar dataKey="revenue" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <h2 className="text-xl font-bold text-white mb-4">Azioni Rapide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Nuovo Utente', icon: '👤', color: 'from-blue-400 to-blue-600' },
                { title: 'Pubblica News', icon: '📰', color: 'from-purple-400 to-purple-600' },
                { title: 'Aggiungi Prodotto', icon: '📦', color: 'from-pink-400 to-pink-600' },
                { title: 'Visualizza Report', icon: '📊', color: 'from-amber-400 to-amber-600' },
              ].map((action, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <QuickActionCard {...action} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home