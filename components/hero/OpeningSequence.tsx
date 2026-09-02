'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SignatureSVG } from './SignatureSVG'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface OpeningSequenceProps {
  onComplete: () => void
}

export function OpeningSequence({ onComplete }: OpeningSequenceProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [scene, setScene] = useState<'drawing' | 'holding' | 'settlingTopLeft' | 'done'>('drawing')
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setIsVisible(false)
      onComplete()
      return
    }

    // Sequence timeline
    // 0.0 - 2.4s: Signature writes stroke-by-stroke in center
    // 2.4 - 2.8s: Brief hold with full readable cursive signature & light reflection
    // 2.8 - 3.6s: Signature scales down and glides smoothly into Navbar TOP-LEFT
    const holdTimer = setTimeout(() => {
      setScene('holding')
    }, 2400)

    const transitionTimer = setTimeout(() => {
      setScene('settlingTopLeft')
    }, 2800)

    const doneTimer = setTimeout(() => {
      setScene('done')
      setIsVisible(false)
      onComplete()
    }, 3600)

    return () => {
      clearTimeout(holdTimer)
      clearTimeout(transitionTimer)
      clearTimeout(doneTimer)
    }
  }, [reduced, onComplete])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-[#09090b] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: scene === 'settlingTopLeft' ? 0.35 : scene === 'done' ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative flex flex-col items-center justify-center w-full max-w-xl">
          {/* Central Cursive Signature Writing Reveal */}
          <motion.div
            className="origin-top-left"
            animate={
              scene === 'settlingTopLeft' || scene === 'done'
                ? {
                    scale: 0.42,
                    x: typeof window !== 'undefined' ? -(window.innerWidth / 2 - 130) : -300,
                    y: typeof window !== 'undefined' ? -(window.innerHeight / 2 - 32) : -250,
                    opacity: 0.95,
                  }
                : { scale: 1, x: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SignatureSVG variant="opening" showReflection={scene === 'holding'} />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
