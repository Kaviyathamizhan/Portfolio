'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { personalData } from '@/lib/data'
import { Button } from '@/components/shared'
import { Download, ArrowRight } from 'lucide-react'

export function HeroActions() {
  return (
    <motion.div
      className="flex flex-wrap gap-4 mb-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.38, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          href={personalData.resume}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="lg"
          className="group relative gap-2.5 font-semibold overflow-hidden text-background hover:animate-glow-pulse"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <Download className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Download Resume</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
