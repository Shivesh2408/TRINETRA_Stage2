"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Medal, Map, Brain, Cog, TrendingUp, Users, Target, BarChart3 } from 'lucide-react'
import Ticker from '@/components/Ticker'

export default function HomePage() {
  const [newsItems, setNewsItems] = useState([
    { title: "BSIN prototype flags Odisha as emerging athletics hub 🔍", date: "04/11/2025" },
    { title: "India's U-17 boxing pool up 12% through AI talent finder 🥊", date: "28/10/2025" },
    { title: "Medal predictor improves to 89% accuracy after SHAP upgrade 📈", date: "14/10/2025" },
    { title: "Policy-AI module now supports 5 Indian languages 🇮🇳", date: "09/10/2025" }
  ])

  useEffect(() => {
    // Load news data from JSON
    fetch('/mock/news.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setNewsItems(data.map(item => ({
            title: item.title,
            date: item.date,
            description: item.description
          })))
        }
      })
      .catch(err => {
        console.error('Failed to load news data:', err)
        // Keep default items on error
      })
  }, [])

  const modules = [
    { href: '/predict', icon: <Medal />, title: 'Medal Predictor', desc: 'Forecast medals and run what-if scenarios.', image: '/MEDAL PREDICTOR VISUALS.jpg' },
    { href: '/talent-finder', icon: <Map />, title: 'Talent Finder', desc: 'Heatmaps and rankings for talent discovery.', image: '/TALENT FINDER.jpg' },
    { href: '/explainability', icon: <Brain />, title: 'Visual AI', desc: 'Explainability via SHAP and visuals.', image: '/VISUAL AI.jpg' },
    { href: '/policy-ai', icon: <Cog />, title: 'Policy Generator', desc: 'AI-assisted policy drafting.', image: '/POLICY GENERATOR.jpg' },
  ]

  return (
    <div className="space-y-16 lg:space-y-20">
      <Ticker />
      {/* Hero Section - Premium Design */}
      <section className="py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/60 rounded-full">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">AI-Powered Sports Policy</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Bharat Sports
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Intelligence Network
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium leading-relaxed">
                  Transforming Sports Data into <span className="text-sky-600 font-semibold">National Strength</span>
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  India's first AI-driven sports data hub. From medal prediction to talent detection and policy simulation — we empower decision-makers with <span className="font-semibold text-gray-900">insight, intelligence, and impact</span>.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                  <span>Built for athletes, analysts, and the nation</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/predict">
                <Button variant="gradient" size="lg" className="group shadow-xl hover:shadow-2xl transition-all duration-300">
                  <span>Launch Dashboard</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <Link href="/api-docs">
                <Button variant="outline" size="lg" className="border-2 hover:border-sky-300 hover:bg-sky-50/50 transition-all">
                  API Documentation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Banner */}
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden border-2 border-gray-100 shadow-2xl">
                <Image 
                  src="/HOMEPAGE BANNER .jpg" 
                  alt="India's Sports Policy. Powered by AI." 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-xl">
                    <p className="text-sm font-bold text-gray-900">India's Sports Policy</p>
                    <p className="text-xs text-gray-600 mt-1">Powered by AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-start-7 lg:col-span-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Latest Updates</h3>
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">Live</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="default" className="bg-sky-600 text-white shadow-sm">What's New</Button>
                  <Button size="sm" variant="outline" className="border-gray-300">Announcements</Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {newsItems.slice(0, 4).map((item, i)=> (
                    <div key={i} className="p-5 hover:bg-gray-50/50 transition-colors group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-sky-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-sky-600 transition-colors leading-snug">{item.title}</div>
                          {item.description && (
                            <div className="text-xs text-gray-600 mt-2 leading-relaxed">{item.description}</div>
                          )}
                          <div className="flex items-center gap-2 mt-3">
                            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{item.date}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-[10px] text-gray-500">Read more →</span>
                          </div>
                        </div>
                      </div>
                  </div>
                ))}
                </div>
                <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                  <Link href="#" className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors flex items-center justify-end gap-1">
                    View All Updates
                    <span>→</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full mb-4">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Impact Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">BSIN Impact at a Glance</h2>
          <p className="text-gray-600">Real-time insights driving India's sports excellence</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-2 border-sky-200/60 hover:border-sky-300 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-white/80 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <Medal className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-bold">+12%</span>
                  </div>
                </div>
                <p className="text-4xl font-extrabold text-sky-700 mb-2">72</p>
                <p className="text-sm font-semibold text-gray-700">Predicted Medals</p>
                <p className="text-xs text-gray-500 mt-1">2028 Olympics</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200/60 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-white/80 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <Map className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-bold">Active</span>
                  </div>
                </div>
                <p className="text-4xl font-extrabold text-indigo-700 mb-2">700+</p>
                <p className="text-sm font-semibold text-gray-700">Districts Analyzed</p>
                <p className="text-xs text-gray-500 mt-1">Across India</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 border-2 border-blue-200/60 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-white/80 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-bold">New</span>
                  </div>
                </div>
                <p className="text-4xl font-extrabold text-blue-700 mb-2">45</p>
                <p className="text-sm font-semibold text-gray-700">Untapped Talent Districts</p>
                <p className="text-xs text-gray-500 mt-1">High Potential</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 border-2 border-emerald-200/60 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-white/80 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <BarChart3 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <Target className="w-4 h-4" />
                    <span className="text-xs font-bold">High</span>
                  </div>
                </div>
                <p className="text-4xl font-extrabold text-emerald-700 mb-2">89%</p>
                <p className="text-sm font-semibold text-gray-700">Model Accuracy</p>
                <p className="text-xs text-gray-500 mt-1">Industry Leading</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full mb-4">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Explore BSIN Modules</h2>
          <p className="text-gray-600">Comprehensive AI-powered tools for sports intelligence</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m, i) => (
          <Link key={m.title} href={m.href} className="block">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
                <Card className="group h-full overflow-hidden border-2 border-gray-200 hover:border-sky-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <Image 
                      src={m.image} 
                      alt={m.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow border border-white/50">
                        <div className="text-sky-600 group-hover:text-sky-700 transition-colors">
                          {m.icon}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-white/50">
                        <span className="text-xs font-bold text-sky-600">Explore →</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="flex items-center gap-2 group-hover:text-sky-600 transition-colors text-xl">
                    <span>{m.title}</span>
                  </CardTitle>
                </CardHeader>
                  <CardContent className="text-gray-600 group-hover:text-gray-700 transition-colors bg-white">
                    <p className="leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
        </div>
      </section>
    </div>
  )
}

