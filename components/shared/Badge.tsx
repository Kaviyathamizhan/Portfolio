import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'info'
  size?: 'sm' | 'md'
}

export function Badge({
  className,
  variant = 'secondary',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const sizes = {
    sm: 'px-2 py-0.5 text-xs rounded-md',
    md: 'px-2.5 py-1 text-xs rounded-lg',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center bg-[#27272a] text-[#a1a1aa] border border-[#3f3f46] transition-colors',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
