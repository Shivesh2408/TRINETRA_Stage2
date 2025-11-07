"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, TrendingUp, Medal, Search, Brain, Globe, Database, Users, Mail, MapPin, Send } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Shivesh Shukla",
      role: "Project Lead & Backend Engineer",
      about: "Works on AI systems and API architecture"
    },
    {
      name: "Shubham",
      role: "Frontend Lead",
      about: "Designs BSIN's dashboard UI and web flow"
    },
    {
      name: "Pratyaksh",
      role: "Data Scientist",
      about: "Builds prediction models and SHAP explainers"
    },
    {
      name: "Arin",
      role: "UX Designer",
      about: "Crafts intuitive, multilingual visual dashboards"
    }
  ]

  const dataSources = [
    "Sports Authority of India (SAI)",
    "Khelo India youth events",
    "District-level tournaments",
    "Climate, fitness, and socio-economic indicators"
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About BSIN</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Bharat Sports Intelligence Network (BSIN) is India's first AI-powered, national-level sports intelligence platform.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-300" />
              🌟 Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              To empower India's sports ecosystem with AI-driven insights that elevate performance, enhance fairness, and enable data-backed policymaking.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-300" />
              🔭 Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              By 2035, India will be recognized as a global leader in data-powered sports excellence — winning medals, unlocking talent, and inspiring 1.4 billion dreams.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* About BSIN */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>ℹ️ About BSIN</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              From forecasting Olympic medal trends to detecting hidden sports talent in districts — BSIN uses big data, machine learning, and geospatial analysis to revolutionize sports governance and performance.
            </p>
            <div>
              <p className="text-gray-300 font-semibold mb-2">It integrates data from:</p>
              <ul className="space-y-2">
                {dataSources.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-400">
                    <span className="text-cyan-300 mt-1">•</span>
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-cyan-300 font-semibold mt-4">
              ✅ All in one AI dashboard for insights and action.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Objectives */}
      <section>
        <h2 className="text-3xl font-bold mb-6">🎯 Key Objectives</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Medal className="w-5 h-5 text-cyan-300" />
                🏅 Medal Forecasting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Predict India's sports performance using real metrics like funding, infrastructure, and training data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Search className="w-5 h-5 text-cyan-300" />
                🔍 Talent Discovery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Use AI to find future champions at the grassroots level across 700+ districts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="w-5 h-5 text-cyan-300" />
                🧠 Policy Simulation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Run "What-if" scenarios: "What if we increase investments for badminton in Tripura?"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe className="w-5 h-5 text-cyan-300" />
                🌐 Multi-Language Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Fully accessible in local languages using Bhashini API and multilingual UI.
              </p>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Database className="w-5 h-5 text-cyan-300" />
                📊 Open Data & Transparency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Public access dashboards for students, analysts, and media professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet the Team */}
      <section>
        <h2 className="text-3xl font-bold mb-6">👥 Meet the Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <Card key={idx} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-cyan-300 font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{member.about}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-300" />
              📬 Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-300 mb-1">Email</p>
                  <a href="mailto:shivesh24shukla@gmail.com" className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors">
                    shivesh24shukla@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-300 mb-1">📍 Headquarters</p>
                  <p className="text-sm text-gray-400">New Delhi, India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section>
        <Card className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border-cyan-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-300" />
              🔗 Want to Collaborate?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Want to collaborate or contribute? Together we can build India's sports future.
            </p>
            <Link href="/contact">
              <Button variant="gradient" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Connect With Us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
