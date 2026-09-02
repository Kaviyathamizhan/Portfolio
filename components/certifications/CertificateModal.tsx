'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Certification } from '@/types'
import { ExternalLink, X } from 'lucide-react'

interface CertificateModalProps {
  cert: Certification | null
  onClose: () => void
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  if (!cert) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="relative w-full max-w-md bg-[#18181b] border border-[#27272a] rounded-xl p-6 z-10 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="mb-6">
            <p className="text-xs text-text-muted mb-1">{cert.issuer}</p>
            <h3 className="text-base font-medium font-display text-text-primary">
              {cert.title}
            </h3>
          </div>

          <div className="text-xs text-text-muted mb-6">
            Issued {cert.issueDate}
          </div>

          <div className="flex gap-3 pt-4 border-t border-[#27272a]">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verify Credential
              </a>
            )}
            <button
              onClick={onClose}
              className="text-xs text-text-muted hover:text-text-secondary transition-colors ml-auto"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
