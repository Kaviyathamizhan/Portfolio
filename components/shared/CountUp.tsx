'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface CountUpProps {
  from?: number
  to: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reduced = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(reduced ? to.toFixed(decimals) : from.toFixed(decimals))

  useEffect(() => {
    if (reduced) {
      setDisplayValue(to.toFixed(decimals))
      return
    }

    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          setDisplayValue(latest.toFixed(decimals))
        },
      })

      return () => controls.stop()
    }
  }, [isInView, from, to, duration, decimals, reduced])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
