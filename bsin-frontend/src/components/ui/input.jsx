import * as React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:border-sky-500 transition-colors',
        className
      )}
      {...props}
    />
  )
})

