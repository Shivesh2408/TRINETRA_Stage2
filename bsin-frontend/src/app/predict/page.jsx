"use client"

import { useEffect, useMemo, useState } from 'react'
import { fetchPrediction, fetchStates } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line } from 'recharts'
import { TrendingUp, Award, Target } from 'lucide-react'

export default function PredictPage() {
  const [states, setStates] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState('Maharashtra')
  const [funding, setFunding] = useState(1)
  const [coaches, setCoaches] = useState(1)
  const [centers, setCenters] = useState(0)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStates().then(setStates).catch(err => {
      console.error('Failed to fetch states:', err)
    })
  }, [])

  const chartData = useMemo(() => {
    if (result == null) return []
    const baseMedals = result / (funding * coaches * (1 + centers * 0.1))
    return [
      { name: 'Base Prediction', medals: Math.max(0, parseFloat(baseMedals.toFixed(2))) },
      { name: 'With Changes', medals: parseFloat(result.toFixed(2)) },
    ]
  }, [result, funding, coaches, centers])

  async function onPredict() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetchPrediction({
        state: selected,
        funding_mult: funding,
        centers_add: centers,
        coaches_mult: coaches,
      })
      setResult(res.predicted_medals)
    } catch (err) {
      setError(err.message || 'Failed to fetch prediction. Please try again.')
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Medal Prediction & What-if Simulator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Select state</label>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full h-11 rounded-lg border-2 border-gray-300 bg-white px-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
            >
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>Funding multiplier: {funding.toFixed(1)}x</span>
            </label>
            <Slider min={0.5} max={3} step={0.1} value={funding} onChange={setFunding} />
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>Coaches multiplier: {coaches.toFixed(1)}x</span>
            </label>
            <Slider min={0.5} max={3} step={0.1} value={coaches} onChange={setCoaches} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Add SAI centers</label>
            <Input type="number" value={centers} onChange={(e) => setCenters(Number(e.target.value))} />
          </div>
          <Button onClick={onPredict} disabled={loading}>{loading ? 'Predicting…' : 'Run Medal Simulation'}</Button>
          {loading && <LoadingSpinner />}
          {error && (
            <div className="mt-4 p-3 bg-red-50 border-2 border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-sky-600" />
            Prediction Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          {result == null ? (
            <div className="text-center py-12 text-gray-500">
              <Target className="w-16 h-16 mx-auto mb-4 opacity-40 text-gray-400" />
              <p className="text-gray-700">Run a prediction to view results.</p>
              <p className="text-sm mt-2 text-gray-600">Adjust the parameters and click "Run Medal Simulation"</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-sky-50 rounded-lg border-2 border-sky-200">
                  <p className="text-sm text-gray-600 mb-1 font-medium">Predicted Medals</p>
                  <p className="text-3xl font-bold text-sky-700">{result.toFixed(1)}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                  <p className="text-sm text-gray-600 mb-1 font-medium">State</p>
                  <p className="text-lg font-semibold text-gray-900">{selected}</p>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#ffffff', 
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="medals" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 mb-1">Impact Analysis</p>
                    <p className="text-gray-700">
                      With {funding.toFixed(1)}x funding, {coaches.toFixed(1)}x coaches, and {centers} additional centers, 
                      {selected} is projected to achieve <span className="text-sky-700 font-semibold">{result.toFixed(1)} medals</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

