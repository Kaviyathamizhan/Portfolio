'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { rolesData } from '@/lib/data/roles'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export function RotatingText() {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rolesData.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [reduced])

  const currentRole = rolesData[index].text

  if (reduced) {
    return (
      <span className="font-display font-medium text-text-secondary">
        {rolesData[0].text}
      </span>
    )
  }

  return (
    <span className="inline-flex relative h-[1.4em] align-bottom overflow-visible max-w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-medium text-text-secondary whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
          {currentRole}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
