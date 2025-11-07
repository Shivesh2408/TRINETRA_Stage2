"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Sparkles, Copy, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const sports = ['Athletics', 'Boxing', 'Wrestling', 'Badminton', 'Tennis', 'Swimming', 'Hockey', 'Cricket', 'Football', 'Basketball']

export default function PolicyAIPage() {
  const [sport, setSport] = useState('Athletics')
  const [state, setState] = useState('Maharashtra')
  const [budget, setBudget] = useState(50)
  const [output, setOutput] = useState([])
  const [loading, setLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)

  async function onGenerate() {
    setLoading(true)
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const suggestions = [
      `Invest ₹${budget} Cr in high-performance centers across ${state} for ${sport} development.`,
      `Deploy data-driven talent identification programs for ${sport} in 50+ districts.`,
      `Upskill 200+ coaches via advanced certification programs within 12 months.`,
      `Establish injury prevention and recovery protocols statewide for ${sport} athletes.`,
      `Create ${sport}-specific training facilities in top 10 talent districts.`,
      `Implement sports science support systems with nutrition and psychology experts.`,
      `Develop grassroots ${sport} programs targeting 10,000+ young athletes.`,
      `Partner with private sector for infrastructure development and sponsorship.`,
    ]
    
    setOutput(suggestions)
    setLoading(false)
  }

  function copyToClipboard(text, index) {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Policy Generator</h1>
        <p className="text-gray-400 mt-2">Draft indicative policy actions for sports programs using AI-powered suggestions.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Form */}
        <div className="lg:col-span-7">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-300" />
                Policy Inputs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-gray-300">Sport</label>
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="w-full h-10 rounded-md border border-gray-700 bg-gray-900 px-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {sports.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">State</label>
                <Input value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter state name" />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">Budget (₹ Crore)</label>
                <Input 
                  type="number" 
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))}
                  min="1"
                  placeholder="Enter budget"
                />
                <p className="text-xs text-gray-500 mt-1">Total investment amount in crores</p>
              </div>
              <Button 
                variant="gradient" 
                onClick={onGenerate}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <LoadingSpinner />
                    <span className="ml-2">Generating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Policy Suggestions
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Output */}
        <div className="lg:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Generated Policy Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              {output.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <Sparkles className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Generated policy suggestions will appear here.</p>
                  <p className="text-sm mt-2">Fill in the inputs and click "Generate" to get started.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  <AnimatePresence>
                    {output.map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-colors"
                      >
                        <p className="text-sm text-gray-300 pr-8">{line}</p>
                        <button
                          onClick={() => copyToClipboard(line, idx)}
                          className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100"
                          aria-label="Copy"
                        >
                          {copiedIndex === idx ? (
                            <Check className="w-4 h-4 text-cyan-300" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Info */}
      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-400 space-y-2">
          <p>• AI analyzes your inputs (sport, state, budget) to generate tailored policy recommendations</p>
          <p>• Suggestions cover infrastructure, talent development, coaching, and support systems</p>
          <p>• Each suggestion can be copied and customized for your policy documents</p>
          <p>• Recommendations are based on best practices and data-driven insights</p>
        </CardContent>
      </Card>
    </div>
  )
}
