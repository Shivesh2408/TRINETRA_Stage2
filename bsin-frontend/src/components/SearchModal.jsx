"use client"

import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const searchItems = [
  { title: 'Medal Predictor', description: 'Forecast medals and run what-if scenarios', href: '/predict', category: 'Tools' },
  { title: 'Talent Finder', description: 'Discover high-potential districts for sports talent', href: '/talent-finder', category: 'Tools' },
  { title: 'AI Explainability', description: 'Understand how AI makes predictions with SHAP', href: '/explainability', category: 'AI' },
  { title: 'Policy Generator', description: 'AI-assisted policy drafting for sports programs', href: '/policy-ai', category: 'AI' },
  { title: 'About BSIN', description: 'Learn about Bharat Sports Intelligence Network', href: '/about', category: 'Info' },
  { title: 'API Documentation', description: 'Access BSIN API endpoints and documentation', href: '/api-docs', category: 'Developer' },
  { title: 'Contact Us', description: 'Get in touch with the BSIN team', href: '/contact', category: 'Info' },
]

export function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const inputRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  const handleSelect = (href) => {
    router.push(href)
    onClose()
    setQuery('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search BSIN..."
            className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {query.trim() && results.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No results found for "{query}"</p>
            </div>
          ) : query.trim() ? (
            <div className="p-2">
              {results.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(item.href)}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <p className="mb-4">Start typing to search...</p>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Try: "medal", "talent", "policy", "api"</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

