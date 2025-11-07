"use client"
import * as React from 'react'

export function Slider({ value, min = 0.5, max = 3, step = 0.1, onChange }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
    />
  )
}

