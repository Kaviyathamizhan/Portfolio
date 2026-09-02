import React from 'react'
import { personalData } from '@/lib/data'
import { Container } from './Container'
import { SocialLinks } from '@/components/shared'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#09090b] border-t border-[#27272a] py-12 text-text-muted">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <p className="font-medium text-text-primary text-base font-display">
              {personalData.name}
            </p>
            <p className="text-xs text-text-muted mt-0.5">{personalData.title}</p>
          </div>

          <SocialLinks variant="hero" />
        </div>

        <div className="pt-6 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  )
}
