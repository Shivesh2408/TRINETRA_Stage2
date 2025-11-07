import * as React from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'relative rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('p-6 border-b border-gray-100', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-lg font-semibold text-gray-900', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-6 text-gray-700', className)} {...props} />
}

export function CardFooter({ className, ...props }) {
  return <div className={cn('p-4 border-t border-gray-100', className)} {...props} />
}

