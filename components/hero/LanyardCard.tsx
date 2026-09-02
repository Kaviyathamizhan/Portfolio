'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { User, MapPin, CheckCircle2, Shield } from 'lucide-react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export interface LanyardCardProps {
  isAssembled?: boolean
  name?: string
  role?: string
  location?: string
  photoUrl?: string
  statusText?: string
  yearText?: string
  signatureText?: string
}

export function LanyardCard({
  isAssembled = true,
  name = 'Kaviyathamizhan T K',
  role = 'AI/ML Engineer & Researcher',
  location = 'Chennai, Tamil Nadu, India',
  photoUrl,
  statusText = 'Open to Opportunities',
  yearText = '2026',
  signatureText = 'Kaviyathamizhan',
}: LanyardCardProps) {
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // ─── SPHERICAL 3D PENDULUM PHYSICS STATE REFS ───
  const angleZRef = useRef(32)           // Side-to-side swing angle in degrees (Z-axis pendulum arc)
  const angularVelZRef = useRef(0)       // Angular velocity (Z-axis)
  const angleXRef = useRef(18)           // Front-to-back tilt angle in degrees (X-axis depth arc)
  const angularVelXRef = useRef(0)       // Angular velocity (X-axis)

  const isDraggingRef = useRef(false)
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const lastPointerRef = useRef<{ x: number; y: number; t: number }>({ x: 0, y: 0, t: 0 })
  const rafIdRef = useRef<number | null>(null)

  // Dynamic Rope Path & Card Positional State
  const [physicsState, setPhysicsState] = useState({
    ropeD: 'M 180 0 Q 220 80 250 145',
    claspX: 250,
    claspY: 145,
    claspZ: 20,
    angleZ: 32,
    angleX: 18,
    angleY: -12,
  })

  // ─── 3D SPHERICAL PENDULUM DIFFERENTIAL EQUATIONS LOOP ───
  const updatePhysics = useCallback(() => {
    if (reduced || isDraggingRef.current) return

    // Physical Constants for realistic freely-suspended lanyard
    const gravity = 0.42        // Gravity pulling pendulum toward lowest central point
    const damping = 0.972       // Air resistance damping (gradual oscillation decay over ~6-8s)
    const springK = 0.022       // Restoration spring force

    // 1. Side-to-Side Swing Physics (Z-axis arc)
    const radZ = (angleZRef.current * Math.PI) / 180
    const accelZ = -gravity * Math.sin(radZ) - springK * angleZRef.current
    angularVelZRef.current = (angularVelZRef.current + accelZ) * damping
    angleZRef.current += angularVelZRef.current

    // 2. Front-to-Back Pitch Physics (X-axis depth arc)
    const radX = (angleXRef.current * Math.PI) / 180
    const accelX = -gravity * Math.sin(radX) - springK * angleXRef.current
    angularVelXRef.current = (angularVelXRef.current + accelX) * damping
    angleXRef.current += angularVelXRef.current

    // 3. Card Yaw Twist (Rotational inertia around lanyard rope axis)
    const angleY = -angularVelZRef.current * 4.5

    // 4. Arc Position Calculations (Fixed Top Anchor at [180, 0])
    const anchorX = 180
    const anchorY = 0
    const ropeLength = 150

    const currentRadZ = (angleZRef.current * Math.PI) / 180
    const currentRadX = (angleXRef.current * Math.PI) / 180

    // Card Clasp Position along 3D Arc
    const claspX = anchorX + Math.sin(currentRadZ) * ropeLength
    const claspY = anchorY + Math.cos(currentRadZ) * Math.cos(currentRadX) * ropeLength
    const claspZ = Math.sin(currentRadX) * 40

    // Dynamic Flexible Bezier Rope Path (bends under momentum & velocity)
    const flexAmountX = angularVelZRef.current * 2.8
    const controlX = (anchorX + claspX) / 2 + flexAmountX
    const controlY = (anchorY + claspY) / 2 + Math.abs(flexAmountX) * 0.3

    const ropeD = `M ${anchorX} ${anchorY} Q ${controlX} ${controlY} ${claspX} ${claspY}`

    setPhysicsState({
      ropeD,
      claspX,
      claspY,
      claspZ,
      angleZ: angleZRef.current,
      angleX: angleXRef.current,
      angleY,
    })

    rafIdRef.current = requestAnimationFrame(updatePhysics)
  }, [reduced])

  // ─── INITIAL ENTRANCE WITH MOMENTUM SWING ───
  useEffect(() => {
    if (!isAssembled || reduced) return

    // Set initial pendulum displacement and release velocity
    angleZRef.current = 34
    angularVelZRef.current = -1.2
    angleXRef.current = 22

    rafIdRef.current = requestAnimationFrame(updatePhysics)

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [isAssembled, reduced, updatePhysics])

  // ─── POINTER DRAG & IMPULSE PHYSICS INTERACTION ───
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true
    dragStartRef.current = { x: e.clientX, y: e.clientY }
    lastPointerRef.current = { x: e.clientX, y: e.clientY, t: performance.now() }
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return

    const dx = e.clientX - dragStartRef.current.x
    const dy = e.clientY - dragStartRef.current.y
    const dt = Math.max(1, performance.now() - lastPointerRef.current.t)

    // Convert mouse displacement directly into 3D pendulum arc angles
    angleZRef.current = Math.max(-48, Math.min(48, dx * 0.38))
    angleXRef.current = Math.max(-28, Math.min(28, -dy * 0.28))

    // Measure mouse velocity vector for momentum impulse on release
    const vx = (e.clientX - lastPointerRef.current.x) / dt
    angularVelZRef.current = vx * 0.65

    lastPointerRef.current = { x: e.clientX, y: e.clientY, t: performance.now() }

    // Instant physical position calculation during active drag
    const anchorX = 180
    const anchorY = 0
    const ropeLength = 150
    const radZ = (angleZRef.current * Math.PI) / 180
    const radX = (angleXRef.current * Math.PI) / 180

    const claspX = anchorX + Math.sin(radZ) * ropeLength
    const claspY = anchorY + Math.cos(radZ) * Math.cos(radX) * ropeLength
    const claspZ = Math.sin(radX) * 40

    const ropeD = `M ${anchorX} ${anchorY} Q ${(anchorX + claspX) / 2} ${(anchorY + claspY) / 2} ${claspX} ${claspY}`

    setPhysicsState({
      ropeD,
      claspX,
      claspY,
      claspZ,
      angleZ: angleZRef.current,
      angleX: angleXRef.current,
      angleY: 0,
    })
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    try {
      ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
    } catch {
      // Ignored if pointer release was already handled
    }

    // Resume physics loop to let gravity & damping swing the card naturally through its arc
    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(updatePhysics)
    }
  }

  // Mouse Hover Nudge (Subtle force impulse when passing over card)
  const handlePointerOver = () => {
    if (isDraggingRef.current || reduced) return
    if (Math.abs(angularVelZRef.current) < 0.2) {
      angularVelZRef.current = (Math.random() - 0.5) * 1.6
      angularVelXRef.current = (Math.random() - 0.5) * 1.2
    }
  }

  // ─── REDUCED MOTION FALLBACK ───
  if (reduced) {
    return (
      <div className="relative w-full max-w-sm lg:max-w-md my-auto">
        <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-6 shadow-2xl">
          <div className="aspect-[4/5] w-full bg-[#09090b] rounded-xl flex flex-col items-center justify-center p-6 border border-[#27272a]">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mb-3 border border-[#3f3f46]"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-[#27272a] flex items-center justify-center text-[#71717a] mb-3 border border-[#3f3f46]">
                <User className="w-10 h-10" />
              </div>
            )}
            <span className="font-display font-medium text-text-primary text-base">
              {name}
            </span>
            <span className="text-xs text-text-muted mt-0.5 font-mono text-center">
              {role}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-sm lg:max-w-md min-h-[560px] flex flex-col items-center justify-start select-none touch-none overflow-visible my-auto"
    >
      {/* PERMANENT SUSPENDED 3D LANYARD & ID CARD — NEVER UNMOUNTS OR FADES OUT */}
      <div className="relative w-[360px] h-[540px] flex flex-col items-center origin-top opacity-100 scale-100">
        
        {/* 1. FIXED CEILING / CONTAINER TOP ANCHOR MOUNT CLIP */}
        <div className="absolute top-0 z-30 flex flex-col items-center left-[162px]">
          <div className="w-9 h-3.5 rounded-t-md bg-gradient-to-b from-[#52525b] via-[#3f3f46] to-[#27272a] border border-[#52525b] shadow-md" />
          <div className="w-4.5 h-4.5 rounded-full border-2 border-[#71717a] bg-[#18181b] -mt-1 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#a1a1aa]" />
          </div>
        </div>

        {/* 2. DYNAMIC FLEXIBLE SWINGING ROPE STRAP SVG (Angles left/right & flexes along pendulum arc) */}
        <svg
          className="absolute top-2 left-0 w-full h-[180px] pointer-events-none z-20 overflow-visible"
          viewBox="0 0 360 180"
        >
          <defs>
            <linearGradient id="lanyardStrapGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#52525b" />
              <stop offset="50%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>

          {/* Rope drop-shadow following arc */}
          <path
            d={physicsState.ropeD}
            fill="none"
            stroke="rgba(0,0,0,0.5)"
            strokeWidth="8"
            strokeLinecap="round"
            transform="translate(3, 4)"
          />

          {/* Main textured fabric lanyard strap */}
          <path
            d={physicsState.ropeD}
            fill="none"
            stroke="url(#lanyardStrapGradMain)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />

          {/* Stitched center highlight line */}
          <path
            d={physicsState.ropeD}
            fill="none"
            stroke="#a1a1aa"
            strokeWidth="1.2"
            strokeDasharray="4,3"
            strokeLinecap="round"
          />
        </svg>

        {/* 3. FREE-SWINGING SUSPENDED 3D ID CARD (POSITIONED AT ARC CLASP POS [claspX, claspY]) */}
        <div
          className="absolute top-0 left-0 z-10 cursor-grab active:cursor-grabbing origin-top"
          style={{
            transform: `translate3d(${physicsState.claspX - 165}px, ${physicsState.claspY - 12}px, ${physicsState.claspZ}px) rotateZ(${physicsState.angleZ}deg) rotateX(${physicsState.angleX}deg) rotateY(${physicsState.angleY}deg)`,
            transformStyle: 'preserve-3d',
            perspective: '600px',
            transition: isDraggingRef.current ? 'none' : 'transform 0.03s linear',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerOver={handlePointerOver}
        >
          {/* Metallic Swivel Ring & Clamp Holder attached to top slot of ID Card */}
          <div className="flex flex-col items-center -mb-2 z-20 relative">
            <div className="w-5 h-5 rounded-full border-2 border-[#a1a1aa] bg-gradient-to-b from-[#fafafa] via-[#a1a1aa] to-[#52525b] shadow-md flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#18181b]" />
            </div>
            <div className="w-7.5 h-4 rounded-sm bg-gradient-to-b from-[#a1a1aa] via-[#71717a] to-[#3f3f46] border border-[#52525b] shadow-lg -mt-1" />
          </div>

          {/* Physical ID Card Body — NEVER UNMOUNTS, NEVER FADES OUT */}
          <div className="w-[330px] rounded-2xl border border-[#27272a] bg-[#18181b] p-5 shadow-2xl overflow-hidden relative border-t-white/10 backdrop-blur-md">
            {/* Metallic Top Bar */}
            <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-[#27272a]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3f3f46]" />
                <span className="w-2 h-2 rounded-full bg-[#3f3f46]" />
                <span className="w-2 h-2 rounded-full bg-[#3f3f46]" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#a1a1aa] uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#fafafa]" />
                <span>Digital Engineer ID</span>
              </div>
            </div>

            {/* Photo & Profile Data Frame */}
            <div className="aspect-[4/4.5] w-full rounded-xl bg-[#09090b] border border-[#27272a] flex flex-col items-center justify-center p-5 mb-4 relative overflow-hidden shadow-inner">
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover mb-2.5 border border-[#3f3f46] shadow-md"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-[#27272a] flex items-center justify-center text-[#71717a] mb-2.5 border border-[#3f3f46] shadow-md">
                  <User className="w-10 h-10" />
                </div>
              )}
              <span className="font-display font-medium text-text-primary text-base">
                {name}
              </span>
              <span className="text-xs text-text-muted mt-0.5 font-mono text-center">
                {role}
              </span>
              <div className="mt-2.5 flex items-center gap-1 text-[11px] text-[#a1a1aa] font-mono">
                <MapPin className="w-3 h-3 text-[#71717a]" />
                <span>{location}</span>
              </div>
            </div>

            {/* Status Pill */}
            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#09090b] border border-[#27272a] mb-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span className="text-text-secondary">{statusText}</span>
              </div>
              <span className="text-text-disabled">{yearText}</span>
            </div>

            {/* Verified Identity Signature Footer */}
            <div className="pt-2.5 border-t border-[#27272a] flex items-center justify-between">
              <span className="text-[9px] font-mono text-text-disabled uppercase tracking-widest">
                Verified Identity
              </span>
              <span className="font-display italic text-xs text-text-secondary tracking-wider font-semibold">
                {signatureText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
