export function LoadingSpinner({ label = 'Loading...' }) {
  return (
    <div className="flex items-center gap-3 text-gray-600">
      <div className="relative">
        <div className="absolute inset-0 bg-sky-200 rounded-full blur-sm opacity-50 animate-pulse"></div>
        <span className="relative h-5 w-5 animate-spin rounded-full border-2 border-sky-300 border-t-sky-600" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

