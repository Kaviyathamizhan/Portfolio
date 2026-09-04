'use client'

import React from 'react'
import { personalData } from '@/lib/data'
import { Container } from '@/components/layout'
import { FadeUp, SocialLinks } from '@/components/shared'
import { RotatingText } from '@/components/shared/RotatingText'
import { ProfilePhotoCard } from './ProfilePhotoCard'
import { OpeningSequence } from './OpeningSequence'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-10 overflow-hidden"
    >
      {/* Signature Opening Sequence */}
      <OpeningSequence onComplete={() => {}} />

      <Container size="xl" className="relative z-10">
        {/* ─── MAIN HERO BALANCED CONTENT (PRINCE PORTFOLIO EXACT ANTON/BEBAS FONT & SHADOW TEXTURE LEFT + ENLARGED 3D CARD RIGHT) ─── */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-4">
          {/* Left: Hero Content */}
          <div className="flex-1 flex flex-col items-start w-full max-w-2xl lg:max-w-3xl">
            {/* Hero Name: Exact Prince Typography & Bottom Shadow Gradient Styling */}
            <FadeUp delay={0.08} className="w-full">
              <h1
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 via-neutral-400 to-neutral-800 text-[clamp(24px,6.8vw,82px)] leading-[0.95] select-none mb-4 font-normal block"
              >
                {personalData.name}
              </h1>
            </FadeUp>

            {/* Dynamic Unclipped Rotating Professional Title */}
            <FadeUp delay={0.16} className="mb-6 text-xl sm:text-2xl md:text-3xl font-display text-text-secondary">
              <RotatingText />
            </FadeUp>

            <FadeUp delay={0.22}>
              <p className="text-base sm:text-lg text-text-muted mb-10 leading-relaxed max-w-xl font-sans">
                {personalData.shortBio}
              </p>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm text-text-primary bg-[#18181b] border border-[#27272a] overflow-hidden transition-all duration-300 ease-out hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-[0.98]"
                >
                  {/* Sliding Over White Background */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                  />
                  {/* Subtle Shimmer Light Sweep */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out delay-75"
                  />
                  {/* Button Content */}
                  <span className="relative z-10 font-semibold text-text-primary group-hover:text-black transition-colors duration-200">
                    Download Resume
                  </span>
                  <ArrowUpRight className="relative z-10 w-4 h-4 text-text-muted group-hover:text-black transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.32}>
              <SocialLinks variant="hero" />
            </FadeUp>
          </div>

          {/* Right/Center: Enlarged 3D Physical Lanyard ID Card */}
          <div className="flex-shrink-0 w-full lg:w-[560px] h-[520px] sm:h-[620px] lg:h-[740px] flex items-center justify-center -mt-4 lg:-mt-8">
            <ProfilePhotoCard />
          </div>
        </div>
      </Container>
    </section>
  )
}
