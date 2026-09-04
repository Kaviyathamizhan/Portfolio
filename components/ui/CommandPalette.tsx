'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Command,
  FileText,
  Mail,
  Home,
  User,
  FlaskConical,
  FolderGit2,
  Trophy,
  Briefcase,
  Layers,
  Sparkles,
  X,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/shared/Icons'
import { personalData, projectsData, researchData } from '@/lib/data'

interface CommandItem {
  id: string
  label: string
  category: 'Navigation' | 'Projects' | 'Research' | 'Links'
  icon: React.ReactNode
  action: () => void
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    const handleCustomEvent = () => setIsOpen(true)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-command-palette', handleCustomEvent)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('open-command-palette', handleCustomEvent)
    }
  }, [isOpen])

  const navigateTo = (href: string) => {
    setIsOpen(false)
    setQuery('')
    if (href.startsWith('http') || href.endsWith('.pdf')) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const items: CommandItem[] = [
    {
      id: 'nav-hero',
      label: 'Home / Overview',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-primary" />,
      action: () => navigateTo('#hero'),
    },
    {
      id: 'nav-about',
      label: 'About Me & Focus',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-primary" />,
      action: () => navigateTo('#about'),
    },
    {
      id: 'nav-research',
      label: 'ML Research Work',
      category: 'Navigation',
      icon: <FlaskConical className="w-4 h-4 text-primary" />,
      action: () => navigateTo('#research'),
    },
    {
      id: 'nav-projects',
      label: 'Flagship Projects',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-primary" />,
      action: () => navigateTo('#projects'),
    },
    {
      id: 'nav-journey',
      label: 'Career Journey',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-primary" />,
      action: () => navigateTo('#journey'),
    },
    {
      id: 'nav-evidence',
      label: 'Engineering Tech Stack',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-primary" />,
      action: () => navigateTo('#evidence'),
    },
    {
      id: 'nav-experience',
      label: 'Work History & Internships',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-primary" />,
      action: () => navigateTo('#experience'),
    },
    {
      id: 'nav-achievements',
      label: 'Achievements & Honors',
      category: 'Navigation',
      icon: <Trophy className="w-4 h-4 text-primary" />,
      action: () => navigateTo('#achievements'),
    },
    {
      id: 'link-resume',
      label: 'Download Resume PDF',
      category: 'Links',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => navigateTo(personalData.resume),
    },
    {
      id: 'link-github',
      label: 'GitHub Profile',
      category: 'Links',
      icon: <GitHubIcon className="w-4 h-4 text-text-primary" />,
      action: () => navigateTo('https://github.com/Kaviyathamizhan'),
    },
    {
      id: 'link-linkedin',
      label: 'LinkedIn Profile',
      category: 'Links',
      icon: <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />,
      action: () => navigateTo('https://linkedin.com/in/kaviyathamizhan-t-k'),
    },
    {
      id: 'link-email',
      label: 'Send Email',
      category: 'Links',
      icon: <Mail className="w-4 h-4 text-primary" />,
      action: () => navigateTo(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}`),
    },
    ...projectsData.map((p) => ({
      id: `project-${p.id}`,
      label: p.name,
      category: 'Projects' as const,
      icon: <FolderGit2 className="w-4 h-4 text-accent" />,
      action: () => navigateTo('#projects'),
    })),
    ...researchData.map((r) => ({
      id: `research-${r.id}`,
      label: r.title,
      category: 'Research' as const,
      icon: <FlaskConical className="w-4 h-4 text-amber-400" />,
      action: () => navigateTo('#research'),
    })),
  ]

  const filteredItems = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  )

  const categories = ['Navigation', 'Projects', 'Research', 'Links'] as const

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md">
          {/* Backdrop click dismiss */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#0d0d0d] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#262626] bg-[#141414]">
              <Search className="w-5 h-5 text-text-muted mr-3 flex-shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none text-base font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-text-muted hover:text-text-primary mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-[#262626] border border-[#333333] text-xs font-mono text-text-muted">
                ESC
              </kbd>
            </div>

            {/* Results Body */}
            <div className="overflow-y-auto p-2 flex-1 divide-y divide-[#1e1e1e]">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-text-muted font-mono text-sm">
                  No matching commands found.
                </div>
              ) : (
                categories.map((cat) => {
                  const catItems = filteredItems.filter((i) => i.category === cat)
                  if (catItems.length === 0) return null

                  return (
                    <div key={cat} className="py-2 first:pt-0 last:pb-0">
                      <div className="px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-text-muted">
                        {cat}
                      </div>
                      <div className="space-y-0.5 mt-1">
                        {catItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={item.action}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-text-secondary hover:text-text-primary hover:bg-[#1f1f1f] transition-all group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="flex-shrink-0 p-1.5 rounded-lg bg-[#141414] border border-[#262626] group-hover:border-primary/40 group-hover:text-primary transition-all">
                                {item.icon}
                              </span>
                              <span className="truncate font-medium">{item.label}</span>
                            </div>
                            <span className="text-xs font-mono text-text-muted group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              Jump ↵
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-[#080808] border-t border-[#262626] flex items-center justify-between text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <Command className="w-3.5 h-3.5 text-primary" />
                <span>Command Palette</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Navigation & Links</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
