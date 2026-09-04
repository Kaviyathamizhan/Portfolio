'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, FileText } from 'lucide-react'

export interface ModalCertificate {
  title: string
  issuer?: string
  issueDate?: string
  certificateUrl?: string
  credentialUrl?: string
}

interface CertificateModalProps {
  cert: ModalCertificate | null
  onClose: () => void
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (cert) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [cert, onClose])

  if (!cert) return null

  const isPdf = cert.certificateUrl?.toLowerCase().endsWith('.pdf')
  const isImage =
    cert.certificateUrl?.toLowerCase().endsWith('.png') ||
    cert.certificateUrl?.toLowerCase().endsWith('.jpg') ||
    cert.certificateUrl?.toLowerCase().endsWith('.jpeg') ||
    cert.certificateUrl?.toLowerCase().endsWith('.webp')

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#18181b] border border-[#27272a] rounded-2xl shadow-2xl shadow-black/80 z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 p-5 md:p-6 border-b border-[#27272a] bg-[#18181b]/90 flex-shrink-0">
            <div>
              {cert.issuer && (
                <p className="text-sm md:text-base font-bold font-display tracking-tight text-text-primary bg-[#27272a] border border-[#3f3f46] px-2.5 py-0.5 rounded-md inline-block mb-1">
                  {cert.issuer}
                </p>
              )}
              <h3 className="text-base md:text-lg font-medium text-text-primary leading-snug">
                {cert.title}
              </h3>
              {cert.issueDate && (
                <p className="text-xs text-text-muted mt-1">{cert.issueDate}</p>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-text-muted hover:text-text-primary hover:bg-[#27272a] transition-all flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body / Document Preview in Authentic Certificate Aspect Ratio */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#09090b]/80 flex items-center justify-center">
            {isPdf && cert.certificateUrl ? (
              <div className="w-full max-w-3xl aspect-[1.414/1] max-h-[70vh] flex flex-col rounded-xl overflow-hidden border border-[#27272a] bg-zinc-950 shadow-2xl">
                <iframe
                  src={`${cert.certificateUrl}#toolbar=0`}
                  title={cert.title}
                  className="w-full h-full border-0"
                />
              </div>
            ) : isImage && cert.certificateUrl ? (
              <div className="w-full max-w-3xl aspect-[1.414/1] max-h-[70vh] flex items-center justify-center rounded-xl overflow-hidden border border-[#27272a] bg-zinc-950 shadow-2xl">
                <img
                  src={cert.certificateUrl}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="text-center py-12 px-4">
                <FileText className="w-12 h-12 text-white/70 mx-auto mb-3 opacity-80" />
                <p className="text-sm text-text-secondary">
                  Certificate issued by {cert.issuer || 'issuing organization'}.
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 md:px-6 border-t border-[#27272a] bg-[#18181b] flex-shrink-0">
            <div>
              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 border border-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                  Open Full Document
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-medium text-text-muted hover:text-text-primary hover:bg-[#27272a] transition-colors ml-auto"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
