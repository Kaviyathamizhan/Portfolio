'use client'

import React, { useState, useEffect } from 'react'
import { navigationData, personalData } from '@/lib/data'
import { Button } from '@/components/shared'
import { SignatureSVG } from '@/components/hero/SignatureSVG'
import { X, Download, Search, LayoutGrid, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [toggleMenuOpen, setToggleMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navigationData
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'))
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200 w-full',
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-lg border-b border-[#27272a] py-2.5'
            : 'bg-transparent py-3.5'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between gap-2">
          {/* Top-Left Signature Brand Identity / Permanent Logo */}
          <a
            href="#hero"
            className="flex-shrink-0 flex items-center mr-2 sm:mr-4 opacity-90 hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-[#52525b] rounded-lg"
            aria-label="Home — Signature Identity"
          >
            <SignatureSVG variant="navbar" />
          </a>

          {/* Center: Navigation Links (Single line with sharp, elegant typography & micro-animation) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-nowrap overflow-hidden">
            {navigationData
              .filter((item) => item.visible)
              .map((item) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      'relative whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-[13px] xl:text-[13.5px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5',
                      'after:content-[\'\'] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:h-[1.5px] after:bg-white after:rounded-full after:transition-all after:duration-200',
                      isActive
                        ? 'text-white bg-[#222226] after:w-1/2 shadow-xs'
                        : 'text-text-muted hover:text-text-primary after:w-0 hover:after:w-1/2'
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
          </nav>

          {/* Right: Search + Resume CTA + Interactive Toggle Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Search Palette Button */}
            <button
              onClick={openCommandPalette}
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-[#18181b] transition-all hover:scale-105 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#52525b]"
              aria-label="Search"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Resume CTA */}
            <Button
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex gap-1.5 text-xs font-medium px-3 py-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>

            {/* Dedicated Interactive All-Sections Toggle Button */}
            <button
              onClick={() => setToggleMenuOpen(!toggleMenuOpen)}
              className={cn(
                'p-2 rounded-lg transition-all hover:scale-105 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#52525b]',
                toggleMenuOpen
                  ? 'bg-white text-black font-semibold'
                  : 'text-text-muted hover:text-text-primary hover:bg-[#18181b]'
              )}
              aria-label="Toggle All Sections View"
              title="Toggle All Sections"
            >
              {toggleMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <LayoutGrid className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full All-Sections Toggle Drawer / Modal */}
      <AnimatePresence>
        {toggleMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#09090b]/95 backdrop-blur-2xl flex flex-col justify-start pt-20 px-6 sm:px-12 pb-10 overflow-y-auto"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="max-w-5xl mx-auto w-full">
              {/* Header inside toggle */}
              <div className="flex items-center justify-between pb-6 border-b border-[#27272a] mb-8">
                <div>
                  <h3 className="text-white font-display text-xl font-bold">
                    All Sections & Quick Navigation
                  </h3>
                  <p className="text-text-muted text-sm mt-1">
                    Select any section to jump directly
                  </p>
                </div>
                <button
                  onClick={() => setToggleMenuOpen(false)}
                  className="px-3 py-1.5 rounded-lg border border-[#3f3f46] text-xs text-text-muted hover:text-white transition-colors"
                >
                  Close (ESC)
                </button>
              </div>

              {/* Grid of all sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                {navigationData.map((item, index) => {
                  const isActive = activeSection === item.id
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setToggleMenuOpen(false)}
                      className={cn(
                        'group p-4 rounded-xl border transition-all duration-200 flex items-center justify-between',
                        isActive
                          ? 'bg-[#18181b] border-white/40 text-white shadow-lg'
                          : 'bg-[#121214] border-[#27272a] text-text-secondary hover:border-[#3f3f46] hover:text-white hover:bg-[#18181b]'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-text-muted group-hover:text-text-primary">
                          0{index + 1}
                        </span>
                        <span className="font-sans font-medium text-sm">
                          {item.label}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  )
                })}
              </div>

              {/* Bottom Quick Links in Toggle */}
              <div className="pt-6 border-t border-[#27272a] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Button
                    href={personalData.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    className="gap-2 text-xs font-medium"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Resume
                  </Button>
                  <Button
                    href="#contact"
                    onClick={() => setToggleMenuOpen(false)}
                    variant="secondary"
                    size="sm"
                    className="text-xs font-medium"
                  >
                    Get in Touch
                  </Button>
                </div>

                <div className="text-xs text-text-muted font-mono">
                  {personalData.name} • {personalData.title}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
