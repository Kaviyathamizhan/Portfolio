import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  number?: string
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'mb-6 md:mb-8 flex flex-col',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {subtitle ? (
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-text-muted mb-3 font-mono">
          {subtitle}
        </span>
      ) : null}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-text-primary leading-[1.06]">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}
