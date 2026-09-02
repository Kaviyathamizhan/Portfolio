'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { Badge } from '@/components/shared'
import { ExternalLink, GitBranchPlus, FileText } from 'lucide-react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface ProjectFlipCardProps {
  project: Project
  size?: 'default' | 'sm'
}

export function ProjectFlipCard({ project, size = 'default' }: ProjectFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const reduced = useReducedMotion()
  const isCompact = size === 'sm'

  const handleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <div
      onClick={handleFlip}
      className={`relative w-full perspective-1000 cursor-pointer group ${
        isCompact ? 'h-[370px]' : 'h-[450px]'
      }`}
      role="button"
      tabIndex={0}
      aria-label={`Project: ${project.name}. Click to flip.`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleFlip()
        }
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: reduced ? 0.1 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* FRONT CARD */}
        <div
          className={`absolute inset-0 w-full h-full rounded-xl border border-[#27272a] bg-[#18181b] flex flex-col justify-between overflow-hidden group-hover:border-[#52525b] group-hover:-translate-y-1.5 group-hover:shadow-2xl transition-all duration-300 ease-out ${
            isCompact ? 'p-5' : 'p-6 md:p-7'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            {/* Title */}
            <h3
              className={`font-semibold font-display text-text-primary leading-snug ${
                isCompact ? 'text-base md:text-lg mb-1.5 line-clamp-2' : 'text-xl md:text-2xl mb-2'
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`font-mono text-text-muted ${
                isCompact ? 'text-[11px] mb-2.5 line-clamp-1' : 'text-xs mb-4'
              }`}
            >
              {project.tagline}
            </p>

            {/* Description */}
            <p
              className={`text-text-muted leading-relaxed line-clamp-3 ${
                isCompact ? 'text-xs md:text-sm mb-3' : 'text-sm md:text-base mb-5'
              }`}
            >
              {project.description}
            </p>

            {/* KEY VERIFIED RESULT / METRIC FOCAL POINT */}
            <div
              className={`rounded-lg bg-[#09090b] border border-[#27272a] flex items-center justify-between ${
                isCompact ? 'p-3 mb-3' : 'p-4 mb-4'
              }`}
            >
              <div>
                <span
                  className={`font-bold font-display text-text-primary tracking-tight block ${
                    isCompact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                  }`}
                >
                  {project.metric.value}
                </span>
                <span className={`font-mono text-text-muted ${isCompact ? 'text-[11px]' : 'text-xs'}`}>
                  {project.metric.label}
                </span>
              </div>
              <span
                className={`font-mono text-emerald-400 font-semibold uppercase tracking-wider ${
                  isCompact ? 'text-[10px]' : 'text-[11px]'
                }`}
              >
                Key Result
              </span>
            </div>
          </div>

          <div
            className={`flex items-center justify-between gap-2 border-t border-[#27272a] ${
              isCompact ? 'pt-3' : 'pt-4'
            }`}
          >
            <div
              className={`flex flex-wrap gap-1.5 overflow-hidden ${
                isCompact ? 'max-h-6' : 'max-h-7'
              }`}
            >
              {project.stack.slice(0, isCompact ? 3 : 4).map((tech) => (
                <Badge key={tech.name} size="sm">
                  {tech.name}
                </Badge>
              ))}
            </div>
            <span
              className={`font-mono text-text-muted flex-shrink-0 ${
                isCompact ? 'text-[11px]' : 'text-xs'
              }`}
            >
              Click to flip ↵
            </span>
          </div>
        </div>

        {/* BACK CARD */}
        <div
          className={`absolute inset-0 w-full h-full rounded-xl border border-[#3f3f46] bg-[#18181b] flex flex-col justify-between overflow-hidden ${
            isCompact ? 'p-5' : 'p-6 md:p-7'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <div className={`flex items-center justify-between ${isCompact ? 'mb-2.5' : 'mb-4'}`}>
              <span
                className={`font-mono text-text-muted uppercase tracking-wider ${
                  isCompact ? 'text-[11px]' : 'text-xs'
                }`}
              >
                Engineering Breakdown
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleFlip()
                }}
                className={`font-mono text-text-muted hover:text-text-secondary transition-colors ${
                  isCompact ? 'text-[11px]' : 'text-xs'
                }`}
              >
                ← Back
              </button>
            </div>

            <div className={`space-y-2.5 ${isCompact ? 'mb-3' : 'space-y-3 mb-5'}`}>
              <div>
                <h4
                  className={`font-mono text-text-muted uppercase mb-1 ${
                    isCompact ? 'text-[10px]' : 'text-xs'
                  }`}
                >
                  Architecture & Description
                </h4>
                <p
                  className={`text-text-muted leading-relaxed ${
                    isCompact ? 'text-xs line-clamp-3' : 'text-xs md:text-sm'
                  }`}
                >
                  {project.description}
                </p>
              </div>

              <div>
                <h4
                  className={`font-mono text-text-muted uppercase mb-1 ${
                    isCompact ? 'text-[10px]' : 'text-xs'
                  }`}
                >
                  Verified Technical Metric
                </h4>
                <p
                  className={`text-text-secondary font-medium font-mono ${
                    isCompact ? 'text-xs' : 'text-xs md:text-sm'
                  }`}
                >
                  {project.metric.value} — {project.metric.label}
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              <h4
                className={`font-mono text-text-muted uppercase mb-1.5 ${
                  isCompact ? 'text-[10px]' : 'text-xs'
                }`}
              >
                Full Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, isCompact ? 5 : undefined).map((tech) => (
                  <Badge key={tech.name} size="sm" variant="secondary">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex items-center gap-3 border-t border-[#27272a] ${
              isCompact ? 'pt-3' : 'pt-4'
            }`}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
              >
                <GitBranchPlus className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Case Study
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors ml-auto"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
