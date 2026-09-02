import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('w-full py-6 md:py-8 lg:py-10 relative', className)}
    >
      {children}
    </section>
  )
}
