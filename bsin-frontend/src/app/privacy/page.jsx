"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Mail, MapPin } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="text-gray-400">Effective Date: November 6, 2025</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-300" />
            Company Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>Company Name:</strong> BSIN Technologies Pvt. Ltd.</p>
          <p><strong>Website:</strong> <a href="https://bsin.ai" className="text-cyan-300 hover:underline">https://bsin.ai</a></p>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-300">
              At BSIN Technologies Pvt. Ltd. ("BSIN", "we", "our"), your privacy is our priority. 
              This Privacy Policy explains how we collect, use, and protect the personal information 
              you provide when using our AI sports analytics platform.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">2. What We Collect</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-gray-300">We collect information that helps us improve our service and deliver a great experience:</p>
            
            <div>
              <h3 className="font-semibold text-cyan-300 mb-2">a) Personal Information (optional)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Name, Email Address, Phone Number</li>
                <li>Account or signup info (if any)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-cyan-300 mb-2">b) Usage Data</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>IP Address, browser type, device info</li>
                <li>Pages visited, time spent, actions taken</li>
                <li>Cookies and analytics data</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-cyan-300 mb-2">c) Sports & Performance Data</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Data provided by users or from open datasets</li>
                <li>Non-personally identifiable team/athlete statistics</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-300 mb-4">We may use your information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Run machine learning predictions</li>
              <li>Improve our dashboard and user experience</li>
              <li>Send service announcements or feature updates</li>
              <li>Conduct security & performance analysis</li>
            </ul>
            <p className="text-cyan-300 font-semibold mt-4">We do not sell your data to third parties.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-300 mb-4">We may share anonymized data with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Analytics partners (e.g., Google Analytics)</li>
              <li>Hosting providers (e.g., AWS)</li>
              <li>Third-party services as needed to operate our platform</li>
            </ul>
            <p className="text-cyan-300 font-semibold mt-4">No personal data is shared without your consent.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-300 mb-4">We use cookies for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Website functionality</li>
              <li>Personalized dashboard experience</li>
              <li>Analytics to improve user experience</li>
            </ul>
            <p className="text-gray-300 mt-4">You can clear or disable cookies in your browser at any time.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>View, edit, or delete your data</li>
              <li>Opt-out of communications</li>
              <li>Request data portability (where applicable)</li>
            </ul>
            <p className="text-gray-300 mt-4">For assistance, please contact: <a href="mailto:support@bsin.ai" className="text-cyan-300 hover:underline">support@bsin.ai</a></p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">7. Changes to this Policy</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-300">
              We may update this policy periodically. The updated version will always be available here.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-cyan-950/30 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <p className="font-semibold text-gray-200">BSIN Technologies Pvt. Ltd.</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:support@bsin.ai" className="text-cyan-300 hover:underline">support@bsin.ai</a>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Delhi, India</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}




