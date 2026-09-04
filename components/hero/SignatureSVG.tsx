'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface SignatureSVGProps {
  className?: string
  variant?: 'opening' | 'navbar'
  showReflection?: boolean
  onComplete?: () => void
}

export function SignatureSVG({
  className = '',
  variant = 'navbar',
  showReflection = false,
  onComplete,
}: SignatureSVGProps) {
  const reduced = useReducedMotion()
  const isNavbar = variant === 'navbar'
  const [isWritten, setIsWritten] = useState(isNavbar)

  useEffect(() => {
    if (reduced || isNavbar) {
      setIsWritten(true)
      onComplete?.()
      return
    }

    const timer = setTimeout(() => {
      setIsWritten(true)
      onComplete?.()
    }, 2400)
    return () => clearTimeout(timer)
  }, [reduced, isNavbar, onComplete])

  if (isNavbar) {
    // Compact, elegant permanent signature for the Navbar
    return (
      <div className={`relative inline-flex items-center select-none py-0.5 ${className}`}>
        <span
          className="text-white tracking-wide whitespace-nowrap drop-shadow-sm font-normal text-lg sm:text-xl"
          style={{
            fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Sacramento', cursive",
            lineHeight: 1,
          }}
        >
          Kaviyathamizhan T K
        </span>
      </div>
    )
  }

  // Opening Sequence Cinematic Central Signature Reveal
  return (
    <div className={`relative inline-flex items-center justify-center select-none p-4 ${className}`}>
      {/* Progressive Handwriting Reveal via Clip-Path & Pen-Stroke Animation */}
      <motion.div
        className="relative overflow-visible"
        initial={{ clipPath: reduced ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{
          duration: 2.4,
          ease: [0.25, 0.1, 0.25, 1.0], // Natural cursive handwriting flow
        }}
      >
        <span
          className="text-white text-[clamp(24px,7.5vw,60px)] tracking-wide sm:tracking-wider whitespace-nowrap block drop-shadow-[0_4px_16px_rgba(255,255,255,0.25)] font-normal"
          style={{
            fontFamily: "'Alex Brush', 'Allura', 'Great Vibes', 'Sacramento', cursive",
            lineHeight: 1.3,
          }}
        >
          Kaviyathamizhan T K
        </span>
      </motion.div>

      {/* Traveling Pen-Tip Light Glow during handwriting */}
      {!reduced && !isWritten && (
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-10"
          initial={{ left: '0%', opacity: 1 }}
          animate={{ left: '100%', opacity: [1, 1, 0] }}
          transition={{
            duration: 2.4,
            ease: [0.25, 0.1, 0.25, 1.0],
            times: [0, 0.9, 1],
          }}
        >
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.95)]" />
        </motion.div>
      )}

      {/* Fresh Ink Reflection Gleam after writing completes */}
      {showReflection && !reduced && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none skew-x-12"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '200%', opacity: [0, 0.9, 0] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      )}
    </div>
  )
}
