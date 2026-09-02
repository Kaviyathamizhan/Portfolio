'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface FlipCardProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
  ariaLabel?: string
}

export function FlipCard({ front, back, className, ariaLabel = 'Flip card' }: FlipCardProps) {
  const reduced = useReducedMotion()
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((prev) => !prev)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  if (reduced) {
    return (
      <div className={cn('flex flex-col gap-4', className)}>
        {front}
        {back}
      </div>
    )
  }

  return (
    <div
      className={cn('group perspective-[1200px] cursor-pointer', className)}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={handleKeyDown}
    >
      <motion.div
        className="relative w-full min-h-[480px] transition-transform duration-500 preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 backface-hidden rounded-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0 backface-hidden rounded-2xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  )
}
