"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GovTopBar from '@/components/GovTopBar'
import { Search, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SearchModal } from '@/components/SearchModal'

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/predict', label: 'Medal Predictor' },
    { href: '/talent-finder', label: 'Talent Finder' },
    { href: '/explainability', label: 'Explainability' },
    { href: '/policy-ai', label: 'Policy-AI' },
    { href: '/api-docs', label: 'API Docs' },
    { href: '/about', label: 'About' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200/80 shadow-sm backdrop-blur-md bg-white/98">
      <GovTopBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative h-14 w-14 rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg ring-2 ring-white">
                  <Image 
                    src="/logo -small.jpg" 
                    alt="BSIN Logo" 
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-baseline gap-2">
                  <p className="text-xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
                    BSIN
                  </p>
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">AI</span>
                </div>
                <p className="text-[10px] text-gray-500 font-medium mt-0.5 leading-tight">
                  Ministry of Youth Affairs & Sports
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 transition-all duration-200 rounded-lg hover:bg-sky-50/50 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSearchOpen(true)}
                aria-label="Search" 
                className="p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-600 hover:text-sky-600 hover:scale-105 active:scale-95"
              >
                <Search size={20} strokeWidth={2.5}/>
              </button>
              <Link href="/predict" className="hidden sm:block">
                <Button variant="default" className="shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200">
                  Get Started
                </Button>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors text-gray-600"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top-2">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/predict"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mx-4 mt-2"
                >
                  <Button variant="default" className="w-full">Get Started</Button>
                </Link>
          </nav>
          </div>
          )}
      </div>
    </header>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
