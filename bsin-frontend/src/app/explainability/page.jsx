"use client"

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

export default function ExplainabilityPage() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Explainability</h1>
        <p className="text-gray-400">Understand how our AI model makes predictions using SHAP (SHapley Additive exPlanations) visualizations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>SHAP Global Feature Importance</CardTitle>
          <p className="text-sm text-gray-400 mt-2">
            This chart shows which features (funding, SAI centers, coaches, etc.) have the most impact on medal predictions across all states.
          </p>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-gray-900 rounded-lg border border-gray-800 overflow-hidden flex items-center justify-center p-4">
            {!imageError ? (
              <Image
                src="/shap_global.png"
                alt="SHAP Global Chart"
                width={1200}
                height={800}
                className="object-contain max-w-full h-auto"
                onError={() => {
                  setImageError(true)
                  console.warn('⚠️ SHAP chart missing. Showing placeholder.')
                }}
              />
            ) : (
              <div className="p-8 text-center text-gray-400">
                <p className="mb-2">⚠️ SHAP chart not found.</p>
                <p className="text-sm text-gray-500">
                  Please run the model explainer script or generate manually.
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Run: <code className="text-cyan-300">python ml/generate_shap_chart.py</code>
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How Features Impact Predictions</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 space-y-3">
          <div className="space-y-2">
            <p className="font-semibold text-cyan-300">💰 Annual Funding (Crore)</p>
            <p className="text-sm text-gray-400">
              Increased funding generally raises predicted medals by enabling better training facilities, equipment, and athlete support programs.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="font-semibold text-cyan-300">🏟️ SAI Centers</p>
            <p className="text-sm text-gray-400">
              More Sports Authority of India (SAI) centers broaden access to quality training infrastructure and improve talent pipelines across regions.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="font-semibold text-cyan-300">👨‍🏫 Coaches</p>
            <p className="text-sm text-gray-400">
              Higher number of qualified coaches tends to improve athlete performance due to better athlete-to-coach ratios and specialized training.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="font-semibold text-cyan-300">💪 Gyms per Lakh Population</p>
            <p className="text-sm text-gray-400">
              Better fitness infrastructure at the grassroots level supports overall athletic development and talent identification.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Understanding SHAP Values</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 space-y-2 text-sm">
          <p>
            <strong className="text-cyan-300">SHAP (SHapley Additive exPlanations)</strong> values explain the output of machine learning models by showing how much each feature contributes to a prediction.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400 ml-2">
            <li>Positive SHAP values increase the predicted medal count</li>
            <li>Negative SHAP values decrease the predicted medal count</li>
            <li>The bar length shows the magnitude of each feature's impact</li>
            <li>Features are ordered by their average absolute impact</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
