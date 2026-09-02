'use client'

import React from 'react'

export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#18181b_0%,_#09090b_70%)] opacity-50" />
    </div>
  )
}
