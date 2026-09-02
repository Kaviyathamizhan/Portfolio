import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'featured' | 'glass'
}

export function Card({
  className,
  variant = 'default',
  children,
  ...props
}: CardProps) {
  const variants = {
    default:
      'bg-surface-card border border-border-default rounded-2xl p-6 md:p-8 shadow-sm',
    interactive:
      'bg-surface-card border border-border-default rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-border-subtle hover:bg-surface-elevated hover:shadow-xl hover:-translate-y-1',
    featured:
      'bg-gradient-to-br from-surface-card to-surface-elevated border border-primary/40 rounded-2xl p-6 md:p-8 shadow-lg shadow-primary/5 hover:border-primary/60 transition-all duration-300',
    glass:
      'bg-surface-card/80 backdrop-blur-md border border-border-default rounded-2xl p-6 md:p-8 shadow-md',
  }

  return (
    <div className={cn(variants[variant], className)} {...props}>
      {children}
    </div>
  )
}
