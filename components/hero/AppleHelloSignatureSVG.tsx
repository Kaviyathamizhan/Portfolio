'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface AppleHelloSignatureSVGProps {
  className?: string
  onComplete?: () => void
}

export function AppleHelloSignatureSVG({
  className = '',
  onComplete,
}: AppleHelloSignatureSVGProps) {
  const reduced = useReducedMotion()

  // ViewBox for Apple's iconic cursive 'hello'
  const viewBox = '0 0 460 180'
  const strokeWidth = 5.0
  const strokeColor = '#fafafa'

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[340px] sm:max-w-[440px] overflow-visible"
        aria-label="Apple Cursive Hello Greeting"
      >
        {/* Apple Cursive 'h' */}
        <motion.path
          d="M 50 140 L 45 45 C 42 22, 68 18, 75 42 L 72 135 C 72 135, 95 82, 125 82 C 145 82, 142 135, 142 135"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: reduced ? 0.1 : 0.65, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.1 },
          }}
        />

        {/* Apple Cursive 'e' */}
        <motion.path
          d="M 142 135 C 158 135, 195 125, 185 92 C 175 62, 148 88, 178 135"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: reduced ? 0 : 0.65, duration: reduced ? 0.1 : 0.45, ease: 'easeInOut' },
            opacity: { delay: reduced ? 0 : 0.65, duration: 0.1 },
          }}
        />

        {/* Apple Cursive first 'l' */}
        <motion.path
          d="M 178 135 C 205 135, 235 32, 222 28 C 208 24, 210 135, 225 135"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: reduced ? 0 : 1.1, duration: reduced ? 0.1 : 0.55, ease: 'easeInOut' },
            opacity: { delay: reduced ? 0 : 1.1, duration: 0.1 },
          }}
        />

        {/* Apple Cursive second 'l' */}
        <motion.path
          d="M 225 135 C 255 135, 285 32, 272 28 C 258 24, 260 135, 285 135"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: reduced ? 0 : 1.65, duration: reduced ? 0.1 : 0.55, ease: 'easeInOut' },
            opacity: { delay: reduced ? 0 : 1.65, duration: 0.1 },
          }}
        />

        {/* Apple Cursive 'o' with top loop exit flourish */}
        <motion.path
          d="M 285 135 C 310 135, 345 135, 340 100 C 335 68, 298 78, 305 110 C 312 142, 345 135, 342 100 C 340 82, 365 82, 400 85"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: reduced ? 0 : 2.2, duration: reduced ? 0.1 : 0.65, ease: 'easeOut' },
            opacity: { delay: reduced ? 0 : 2.2, duration: 0.1 },
          }}
          onAnimationComplete={onComplete}
        />
      </svg>
    </div>
  )
}
