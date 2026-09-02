import React from 'react'
import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return (
    <hr
      className={cn(
        'w-full border-t border-border-default/60 my-8 md:my-12',
        className
      )}
    />
  )
}
