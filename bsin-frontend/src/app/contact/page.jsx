"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { LoadingSpinner } from '@/components/LoadingSpinner'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)
    
    try {
      const { submitContact } = await import('@/lib/api')
      await submitContact(formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setSubmitError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Have questions or need support? Get in touch with the BSIN team.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a href="mailto:shivesh24shukla@gmail.com" className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors">
                    shivesh24shukla@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-sm text-gray-400">+91-XXX-XXXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">📍 Headquarters</p>
                  <p className="text-sm text-gray-400">New Delhi, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">Monday - Friday</p>
              <p className="text-sm text-gray-400">9:00 AM - 6:00 PM IST</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm text-gray-300">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-300">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full h-32 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>
                <Button type="submit" variant="gradient" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? (
                    <>
                      <LoadingSpinner />
                      <span className="ml-2">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {submitted ? 'Message Sent!' : 'Send Message'}
                    </>
                  )}
                </Button>
                {submitted && (
                  <p className="text-sm text-cyan-300">✅ Thank you! We'll get back to you soon.</p>
                )}
                {submitError && (
                  <p className="text-sm text-red-300">❌ {submitError}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

