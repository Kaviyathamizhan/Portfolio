import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Container({
  children,
  size = 'lg',
  className,
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-[760px]',
    md: 'max-w-[1040px]',
    lg: 'max-w-[1280px]',
    xl: 'max-w-[1400px]',
  }

  return (
    <div
      className={cn(
        'w-full mx-auto px-6 sm:px-8 lg:px-12',
        maxWidths[size],
        className
      )}
    >
      {children}
    </div>
  )
}
