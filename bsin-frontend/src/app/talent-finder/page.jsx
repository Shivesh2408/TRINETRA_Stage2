"use client"

import { useEffect, useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { LoadingSpinner } from '@/components/LoadingSpinner'

// Using a placeholder for India map - in production, use actual India TopoJSON
// For now, we'll show a simplified visualization
const INDIA_TOPO = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Default talent data (will be loaded from CSV)
const defaultTalentData = [
  { district: "Thane", state: "Maharashtra", talent_score: 82 },
  { district: "Pune", state: "Maharashtra", talent_score: 75 },
  { district: "Gurugram", state: "Haryana", talent_score: 88 },
  { district: "Hisar", state: "Haryana", talent_score: 73 },
  { district: "Ludhiana", state: "Punjab", talent_score: 69 },
  { district: "Bathinda", state: "Punjab", talent_score: 61 },
  { district: "Kochi", state: "Kerala", talent_score: 77 },
  { district: "Thiruvananthapuram", state: "Kerala", talent_score: 80 },
  { district: "Guwahati", state: "Assam", talent_score: 70 },
  { district: "Dibrugarh", state: "Assam", talent_score: 68 },
  { district: "Delhi", state: "Delhi", talent_score: 85 },
  { district: "Chennai", state: "Tamil Nadu", talent_score: 82 },
  { district: "Coimbatore", state: "Tamil Nadu", talent_score: 74 },
  { district: "Kanpur", state: "Uttar Pradesh", talent_score: 60 },
  { district: "Varanasi", state: "Uttar Pradesh", talent_score: 67 },
  { district: "Jaipur", state: "Rajasthan", talent_score: 71 },
  { district: "Jodhpur", state: "Rajasthan", talent_score: 65 },
  { district: "Bengaluru", state: "Karnataka", talent_score: 84 },
  { district: "Mysuru", state: "Karnataka", talent_score: 72 },
]

export default function TalentFinderPage() {
  const [talentData, setTalentData] = useState(defaultTalentData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load CSV data
    fetch('/mock/talent-data.csv')
      .then(res => res.text())
      .then(text => {
        const lines = text.split('\n').filter(line => line.trim())
        const headers = lines[0].split(',')
        const data = lines.slice(1).map(line => {
          const values = line.split(',')
          return {
            district: values[0]?.trim(),
            state: values[1]?.trim(),
            talent_score: parseInt(values[2]?.trim()) || 0
          }
        }).filter(d => d.district && d.state)
        
        if (data.length > 0) {
          setTalentData(data)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load talent data:', err)
        setLoading(false)
      })
  }, [])

  const topDistricts = useMemo(() => {
    return [...talentData]
      .sort((a, b) => b.talent_score - a.talent_score)
      .slice(0, 10)
  }, [talentData])

  const getScoreColor = (score) => {
    if (score >= 80) return '#22d3ee' // cyan-300
    if (score >= 70) return '#06b6d4' // cyan-500
    if (score >= 60) return '#0891b2' // cyan-600
    return '#155e75' // cyan-800
  }

  function downloadCSV() {
    const header = 'district,state,talent_score\n'
    const rows = talentData.map(d => `${d.district},${d.state},${d.talent_score}`).join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'talent_scores.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Talent Finder</h1>
          <p className="text-gray-600">Discover high-potential districts for sports talent development across India</p>
        </div>
        <Button variant="gradient" size="lg" className="hidden lg:flex">
          Explore District Talent
        </Button>
      </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
          <CardHeader>
            <CardTitle>Top 10 Districts by Talent Score</CardTitle>
          </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="text-left bg-gray-50">
                  <tr>
                    <th className="py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">#</th>
                    <th className="py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">District</th>
                    <th className="py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">State</th>
                    <th className="py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider text-right">Talent Score</th>
                </tr>
              </thead>
              <tbody>
                  {topDistricts.map((d, idx) => (
                    <tr key={`${d.district}-${d.state}`} className="border-t border-gray-100 hover:bg-sky-50/50 transition-colors">
                      <td className="py-3 px-2 font-semibold text-gray-900">{idx + 1}</td>
                      <td className="py-3 px-2 font-semibold text-gray-900">{d.district}</td>
                      <td className="py-3 px-2 text-gray-600">{d.state}</td>
                      <td className="text-right">
                        <span 
                          className="font-semibold"
                          style={{ color: getScoreColor(d.talent_score) }}
                        >
                          {d.talent_score}
                        </span>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            <div className="mt-4">
              <Button onClick={downloadCSV}>Download CSV</Button>
            </div>
        </CardContent>
      </Card>

      <Card>
          <CardHeader>
            <CardTitle>District Talent Distribution</CardTitle>
          </CardHeader>
        <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-gray-600 mb-4 font-medium">
                Showing {talentData.length} districts with talent scores
              </div>
              
              {/* Score Legend */}
              <div className="flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#22d3ee' }}></div>
                  <span>80-100 (High)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#06b6d4' }}></div>
                  <span>70-79 (Medium-High)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#0891b2' }}></div>
                  <span>60-69 (Medium)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#155e75' }}></div>
                  <span>&lt;60 (Low)</span>
                </div>
              </div>

              {/* District List with Scores */}
              <div className="max-h-[300px] overflow-y-auto space-y-2">
                {talentData
                  .sort((a, b) => b.talent_score - a.talent_score)
                  .map((d) => (
                    <div 
                      key={`${d.district}-${d.state}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-sky-50 transition-colors border border-gray-100"
                    >
                      <div>
                        <div className="text-sm font-medium">{d.district}</div>
                        <div className="text-xs text-gray-500">{d.state}</div>
                      </div>
                      <div 
                        className="text-lg font-bold"
                        style={{ color: getScoreColor(d.talent_score) }}
                      >
                        {d.talent_score}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Visualization - Note: Full India TopoJSON needed for accurate map */}
      <Card>
        <CardHeader>
          <CardTitle>India Talent Heatmap</CardTitle>
          <p className="text-sm text-gray-600 mt-2">
            Interactive district-level map visualization
          </p>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-gray-50 to-sky-50/30 rounded-xl p-8 flex flex-col items-center justify-center h-[300px]">
            <div className="text-5xl mb-4">🗺️</div>
            <p className="text-center text-gray-700 font-semibold mb-2">
              Interactive district-level map coming soon!
            </p>
            <p className="text-center text-sm text-gray-500">
              Currently showing talent insights via tables below.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
