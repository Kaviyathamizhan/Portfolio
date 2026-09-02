'use client'

import React, { ReactNode } from 'react'
import { motion, Variants, HTMLMotionProps } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface FadeUpProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  delay?: number
  duration?: number
  once?: boolean
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

/**
 * Wraps children in a scroll-triggered fade-up animation.
 * Automatically disables itself when prefers-reduced-motion is active.
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  ...props
}: FadeUpProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      custom={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

/**
 * Stagger-animates direct children with a cascading fade-up effect.
 * Automatically disables when prefers-reduced-motion is active.
 */
export function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * A single item inside StaggerContainer.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  )
}

/**
 * Scale-in reveal on scroll.
 */
export function ScaleIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Horizontal slide-in from left or right.
 */
export function SlideIn({
  children,
  from = 'left',
  delay = 0,
  className,
}: {
  children: ReactNode
  from?: 'left' | 'right'
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0, x: from === 'left' ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
