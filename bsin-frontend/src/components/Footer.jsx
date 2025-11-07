import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const usefulLinks = [
    { href: '/about', label: 'About BSIN' },
    { href: '/policy-ai', label: 'Policy-AI Overview' },
    { href: '/talent-finder', label: 'Talent Finder' },
    { href: '/api-docs', label: 'API Documentation' },
  ]

  return (
    <footer className="border-t-2 border-gray-200 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl overflow-hidden border-2 border-gray-200 shadow-md relative">
                <Image 
                  src="/logo -small.jpg" 
                  alt="BSIN Logo" 
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">BSIN</h3>
                <p className="text-xs text-gray-600 font-medium">Bharat Sports Intelligence Network</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <span>Ministry of Youth Affairs and Sports, Government of India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <a href="mailto:bsin-support@gov.in" className="hover:text-sky-600 transition-colors">
                  bsin-support@gov.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <a href="tel:+911123456789" className="hover:text-sky-600 transition-colors">
                  +91-11-23456789
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://twitter.com/bsin_india" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-sky-600 transition-all duration-200 flex items-center gap-2.5 group"
                >
                  <div className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-sky-100 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Twitter</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/bsin-india" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-sky-600 transition-all duration-200 flex items-center gap-2.5 group"
                >
                  <div className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-sky-100 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/bsin-ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-sky-600 transition-all duration-200 flex items-center gap-2.5 group"
                >
                  <div className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-sky-100 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-sky-600 transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-sky-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-200">
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-sky-600 transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-sky-500 transition-colors"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-sky-600 transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-sky-500 transition-colors"></span>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-200 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-gray-900 mb-1">© {currentYear} Bharat Sports Intelligence Network</p>
              <p className="text-xs text-gray-500">All rights reserved. Ministry of Youth Affairs & Sports, Government of India</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Privacy</Link>
              <span className="text-gray-300">•</span>
              <Link href="/terms" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
