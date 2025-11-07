"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Mail, MapPin, AlertTriangle } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Terms and Conditions</h1>
        <p className="text-gray-400">Effective Date: November 6, 2025</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-300" />
            Company Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>Company Name:</strong> BSIN Technologies Pvt. Ltd.</p>
          <p><strong>Website:</strong> <a href="https://bsin.ai" className="text-cyan-300 hover:underline">https://bsin.ai</a></p>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-300">
              By accessing or using the BSIN platform, you agree to be bound by these Terms and Conditions ("Terms"). 
              If you disagree with any part of these Terms, please do not use the platform.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">2. Use of Service</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-gray-300">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Use BSIN for legal purposes only</li>
              <li>Not attempt to reverse-engineer our technology</li>
              <li>Refrain from misusing or scraping our data</li>
            </ul>
            <p className="text-gray-300 mt-4">
              The service is provided "as-is", and features may change at any time.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-gray-300">
              All models, code, interfaces, visualizations, and content on BSIN belong to BSIN Technologies Pvt. Ltd.
            </p>
            
            <div>
              <h3 className="font-semibold text-cyan-300 mb-2">You may:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>View and explore data using the platform</li>
                <li>Cite insights for educational or professional use (with attribution)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-red-300 mb-2">You may not:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Republish, resell, or redistribute our data or tools</li>
                <li>Copy or clone our platform without permission</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-300 font-semibold mb-2">BSIN is not responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Incorrect model predictions</li>
                  <li>Losses resulting from reliance on AI recommendations</li>
                  <li>Downtime due to maintenance or third-party services</li>
                </ul>
              </div>
            </div>
            <p className="text-amber-300 font-semibold">Use the platform at your own risk.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-300">
              These Terms will be governed by the laws of India. Any disputes will be handled in Bengaluru, India.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            <p className="text-gray-300 mb-4">For legal concerns, contact:</p>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-cyan-950/30 rounded-lg">
                <FileText className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <p className="font-semibold text-gray-200">BSIN Technologies Pvt. Ltd.</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:legal@bsin.ai" className="text-cyan-300 hover:underline">legal@bsin.ai</a>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}




