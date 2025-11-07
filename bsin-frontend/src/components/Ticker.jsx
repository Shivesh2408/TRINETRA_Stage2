"use client"

export default function Ticker({ items = [] }) {
  const defaultItems = [
    '🔔 New AI-powered model predicts 72 medals for India at the 2028 Olympics.',
    '🔔 BSIN identifies 45 untapped districts with national-level sports potential.',
    '🔔 Hindi, Tamil & Bengali language dashboards now available via Bhashini API.'
  ]
  const tickerItems = items.length ? items : defaultItems
  const content = tickerItems.join('  •  ')
  return (
    <div className="w-full bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border-b-2 border-sky-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 flex items-center gap-4">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500 rounded-full blur-sm opacity-30 animate-pulse"></div>
              <div className="relative w-2 h-2 bg-sky-600 rounded-full"></div>
            </div>
            <span className="text-xs font-extrabold text-sky-700 uppercase tracking-widest">Live</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="inline-block animate-[ticker_35s_linear_infinite] will-change-transform whitespace-nowrap text-sm font-medium text-gray-800">
              {content}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ticker { from { transform: translateX(0%); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}




