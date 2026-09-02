'use client'

import React, { useState } from 'react'
import { personalData } from '@/lib/data'
import { Container } from '@/components/layout'
import { Button, FadeUp, SocialLinks } from '@/components/shared'
import { RotatingText } from '@/components/shared/RotatingText'
import { ProfilePhotoCard } from './ProfilePhotoCard'
import { OpeningSequence } from './OpeningSequence'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  const [isSequenceDone, setIsSequenceDone] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-10 overflow-hidden"
    >
      {/* Signature Opening Sequence */}
      <OpeningSequence onComplete={() => setIsSequenceDone(true)} />

      <Container size="xl" className="relative z-10">
        {/* ─── MAIN HERO BALANCED CONTENT (PRINCE PORTFOLIO EXACT ANTON/BEBAS FONT & SHADOW TEXTURE LEFT + ENLARGED 3D CARD RIGHT) ─── */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-4">
          {/* Left: Hero Content */}
          <div className="flex-1 flex flex-col items-start w-full max-w-2xl lg:max-w-3xl">
            {/* Hero Name: Exact Prince Typography & Bottom Shadow Gradient Styling */}
            <FadeUp delay={0.08} className="w-full">
              <h1
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 via-neutral-400 to-neutral-800 text-[clamp(32px,5.2vw,82px)] leading-[0.95] select-none mb-4 font-normal block"
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
                <Button
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="gap-2 font-medium text-sm"
                >
                  Download Resume
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.32}>
              <SocialLinks variant="hero" />
            </FadeUp>
          </div>

          {/* Right/Center: Enlarged 3D Physical Lanyard ID Card */}
          <div className="flex-shrink-0 w-full lg:w-[560px] h-[740px] flex items-center justify-center -mt-8">
            <ProfilePhotoCard isAssembled={isSequenceDone} />
          </div>
        </div>
      </Container>
    </section>
  )
}
