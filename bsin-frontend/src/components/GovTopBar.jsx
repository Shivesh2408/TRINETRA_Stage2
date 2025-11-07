"use client"

import Link from 'next/link'
import { Globe, ExternalLink } from 'lucide-react'

export default function GovTopBar() {
  return (
    <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border-b border-sky-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-3">
            <Link 
              href="#main" 
              className="text-xs font-semibold text-gray-700 hover:text-sky-700 transition-colors flex items-center gap-1.5"
            >
              <span>Skip to main content</span>
            </Link>
            <span className="text-gray-300">•</span>
            <span className="text-xs font-bold text-gray-800">Government of India</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Globe size={12} className="text-gray-600" />
              <select className="bg-transparent border-none text-xs font-semibold text-gray-700 hover:text-sky-700 cursor-pointer outline-none appearance-none pr-4">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>
            <span className="text-gray-300">•</span>
            <Link 
              href="/api-docs" 
              className="text-xs font-semibold text-gray-700 hover:text-sky-700 transition-colors flex items-center gap-1"
            >
              <span>API Docs</span>
              <ExternalLink size={11} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

