'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint, RapierRigidBody } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import * as THREE from 'three'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

extend({ MeshLineGeometry, MeshLineMaterial })

const cardGLB = '/models/card.glb'
const lanyardTexturePath = '/assets/lanyard/lanyard.png'

interface Lanyard3DSceneProps {
  name?: string
  role?: string
  location?: string
  statusText?: string
  yearText?: string
  signatureText?: string
}

import { personalData } from '@/lib/data'

// ─── HIGH-RESOLUTION CANVAS TEXTURE FOR KAVIYATHAMIZHAN T K (EXACT 1080x1080 CARD.GLB UV MAPPING) ───
function useKaviyathamizhanTexture({
  name = personalData.name || 'KAVIYATHAMIZHAN T K',
  role = personalData.title || 'AI / ML ENGINEER',
  location = personalData.location || 'Chennai, Tamil Nadu, India',
}: Lanyard3DSceneProps) {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const canvas = document.createElement('canvas')
    canvas.width = 1080
    canvas.height = 1080
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const render = (img?: HTMLImageElement) => {
      // Clear background
      ctx.fillStyle = '#09090b'
      ctx.fillRect(0, 0, 1080, 1080)

      // ─── FRONT FACE (Left Half: x: 0..540, y: 0..815 in card.glb UV) ───
      // Pure Photographic Face - No text, banners, or metadata
      // Card Outer Base Frame (#121214 with #27272a bevel)
      ctx.fillStyle = '#121214'
      ctx.fillRect(10, 10, 520, 795)
      ctx.strokeStyle = '#27272a'
      ctx.lineWidth = 6
      ctx.strokeRect(10, 10, 520, 795)

      // Dedicated Front Photo Viewport (Fills the entire front face)
      const px = 14, py = 14, pw = 512, ph = 787

      if (img && img.complete && img.naturalWidth > 0) {
        ctx.save()
        ctx.beginPath()
        ctx.rect(px, py, pw, ph)
        ctx.clip()

        // 3D Mesh Horizontal Stretch Factor = 1.079637
        // Compensate canvas width/height ratio so rendered 3D aspect ratio EXACTLY matches the original image
        const stretchX = 1.079637
        const nativeRatio = img.naturalWidth / img.naturalHeight

        // Exact object-fit: cover with center-top alignment in 3D world space
        let renderW = pw
        let renderH = (pw * stretchX) / nativeRatio
        if (renderH < ph) {
          renderH = ph
          renderW = (ph * nativeRatio) / stretchX
        }

        const ox = px + (pw - renderW) / 2
        const oy = py

        ctx.drawImage(img, ox, oy, renderW, renderH)
        ctx.restore()
      } else {
        const bgGrad = ctx.createLinearGradient(0, py, 0, py + ph)
        bgGrad.addColorStop(0, '#0c525a')
        bgGrad.addColorStop(0.5, '#07393e')
        bgGrad.addColorStop(1, '#042226')
        ctx.fillStyle = bgGrad
        ctx.fillRect(px, py, pw, ph)
      }

      // Front Bevel Border Accent
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 2
      ctx.strokeRect(px, py, pw, ph)

      // ─── BACK FACE (Right Half: x: 540..1080, y: 0..815 in card.glb UV) ───
      // All textual information, name, designation, and metadata
      ctx.fillStyle = '#121214'
      ctx.fillRect(550, 10, 520, 795)
      ctx.strokeStyle = '#27272a'
      ctx.lineWidth = 6
      ctx.strokeRect(550, 10, 520, 795)

      ctx.fillStyle = '#18181b'
      ctx.fillRect(560, 20, 500, 775)

      // 1. Back Header / Metadata Area
      ctx.fillStyle = '#09090b'
      ctx.fillRect(565, 25, 490, 85)
      ctx.strokeStyle = '#27272a'
      ctx.lineWidth = 2
      ctx.strokeRect(565, 25, 490, 85)

      ctx.fillStyle = '#2dd4bf'
      ctx.font = 'bold 20px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('ENGINEER IDENTIFICATION', 810, 60)
      ctx.fillStyle = '#a1a1aa'
      ctx.font = '12px monospace'
      ctx.fillText('PORTFOLIO VERIFIED ACCESS • 2026', 810, 88)

      // 2. Main Identification Information
      ctx.fillStyle = '#09090b'
      ctx.fillRect(565, 120, 490, 420)
      ctx.strokeRect(565, 120, 490, 420)

      // Name Section
      ctx.fillStyle = '#71717a'
      ctx.font = '12px monospace'
      ctx.fillText('NAME', 810, 155)
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 28px sans-serif'
      ctx.fillText(name.toUpperCase(), 810, 195)

      // Divider Line
      ctx.strokeStyle = '#27272a'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(600, 220)
      ctx.lineTo(1020, 220)
      ctx.stroke()

      // Designation Section
      ctx.fillStyle = '#71717a'
      ctx.font = '12px monospace'
      ctx.fillText('DESIGNATION', 810, 255)
      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 22px sans-serif'
      ctx.fillText(role.toUpperCase(), 810, 292)

      // Divider Line
      ctx.beginPath()
      ctx.moveTo(600, 318)
      ctx.lineTo(1020, 318)
      ctx.stroke()

      // Details
      ctx.fillStyle = '#71717a'
      ctx.font = '12px monospace'
      ctx.fillText('LOCATION', 810, 350)
      ctx.fillStyle = '#e4e4e7'
      ctx.font = '15px sans-serif'
      ctx.fillText(`📍 ${location}`, 810, 378)

      ctx.fillStyle = '#a1a1aa'
      ctx.font = '13px monospace'
      ctx.fillText('SPECIALIZATION: AGENTIC AI & RL', 810, 440)
      ctx.fillText('INSTITUTION: BIHER (CHENNAI)', 810, 475)

      // 3. Security & Barcode Footer
      ctx.fillStyle = '#09090b'
      ctx.fillRect(565, 550, 490, 235)
      ctx.strokeRect(565, 550, 490, 235)

      // Barcode simulation
      ctx.fillStyle = '#ffffff'
      for (let bx = 620; bx < 1000; bx += 8) {
        const barW = bx % 16 === 0 ? 4 : 2
        ctx.fillRect(bx, 580, barW, 90)
      }

      ctx.fillStyle = '#a1a1aa'
      ctx.font = '13px monospace'
      ctx.fillText('ID: KT-AI-2026-915', 810, 705)

      ctx.fillStyle = '#22c55e'
      ctx.font = 'bold 13px monospace'
      ctx.fillText('● ACTIVE IDENTITY', 810, 745)
    }

    render()

    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.flipY = false
    setTexture(tex)

    const profileSrc = personalData.profileImage || '/images/profile/me.png'
    const img = new Image()
    img.src = profileSrc
    img.onload = () => {
      render(img)
      tex.needsUpdate = true
      setTexture(tex)
    }
  }, [name, role, location])

  return texture
}

// ─── RAPIER PHYSICS BAND COMPONENT (DYNAMIC MATHEMATICAL 3D SYNCHRONIZATION) ───
function Band({
  customTexture,
  maxSpeed = 50,
  minSpeed = 0,
}: {
  customTexture: THREE.CanvasTexture | null
  maxSpeed?: number
  minSpeed?: number
}) {
  const band = useRef<THREE.Mesh>(null!)
  const fixed = useRef<RapierRigidBody>(null!)
  const j1 = useRef<RapierRigidBody & { lerped?: THREE.Vector3 }>(null!)
  const j2 = useRef<RapierRigidBody & { lerped?: THREE.Vector3 }>(null!)
  const j3 = useRef<RapierRigidBody>(null!)
  const card = useRef<RapierRigidBody>(null!)

  const vec = useMemo(() => new THREE.Vector3(), [])
  const ang = useMemo(() => new THREE.Vector3(), [])
  const rot = useMemo(() => new THREE.Vector3(), [])
  const dir = useMemo(() => new THREE.Vector3(), [])

  const segmentProps = useMemo(
    () => ({
      type: 'dynamic' as const,
      canSleep: true,
      colliders: false as const,
      angularDamping: 4,
      linearDamping: 4,
    }),
    []
  )

  const { nodes, materials } = useGLTF(cardGLB) as any
  const lanyardTexture = useTexture(lanyardTexturePath)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState<THREE.Vector3 | false>(false)
  const [hovered, hover] = useState(false)
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024)

  // ─── ZAIN'S EXACT PHYSICS CONFIG WITH ENLARGED VISUAL SCALE & PRECISE CLAMP SEATING ───
  const cardScale = 5.4
  const jointAnchorY = 1.50
  // Center of clamp loop ring in card.glb geometry is at y = 1.205
  // Formula: cardScale * 1.205 + visualOffsetY = jointAnchorY (1.50)
  // => visualOffsetY = 1.50 - 1.205 * cardScale
  // This positions the rope tip right inside the clamp's ring hole with zero overlap!
  const visualOffsetY = jointAnchorY - 1.205 * cardScale // -5.007

  // Rope joints with optimal segment lengths
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
  // Spherical joint: j3 connects to card at [0, jointAnchorY, 0]
  useSphericalJoint(j3, card, [[0, 0, 0], [0, jointAnchorY, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => { document.body.style.cursor = 'auto' }
    }
  }, [hovered, dragged])

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }

    if (fixed.current && card.current && j1.current && j2.current && j3.current) {
      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })

      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped || j2.current.translation())
      curve.points[2].copy(j1.current.lerped || j1.current.translation())
      curve.points[3].copy(fixed.current.translation())

      if (band.current) {
        ;(band.current.geometry as any).setPoints(curve.getPoints(32))
      }

      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true)
    }
  })

  curve.curveType = 'chordal'
  lanyardTexture.wrapS = lanyardTexture.wrapT = THREE.RepeatWrapping

  return (
    <>
      {/* Top Anchor Fixed Rigid Body positioned at [0, 5.6, 0] so lanyard extends from behind the navbar */}
      <group position={[0, 5.6, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          {/*
            Exact geometric alignment:
            Position offset aligns the clamp ring hole (local y=1.205)
            with the spherical joint anchor (y=1.50 in rigid body space)
          */}
          <group
            scale={cardScale}
            position={[0, visualOffsetY, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
              drag(false)
            }}
            onPointerDown={(e) => {
              ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                key={customTexture ? 'custom' : 'default'}
                map={customTexture || materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        {/* @ts-ignore */}
        <meshLineGeometry />
        {/* @ts-ignore */}
        <meshLineMaterial
          color="#141416"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          lineWidth={1.8}
        />
      </mesh>
    </>
  )
}

// Preload GLTF model
useGLTF.preload(cardGLB)

// ─── MAIN LANYARD 3D SCENE CONTAINER ───
export function Lanyard3DScene(props: Lanyard3DSceneProps) {
  const reduced = useReducedMotion()
  const [isMounted, setIsMounted] = useState(false)
  const [cameraZ, setCameraZ] = useState(30)
  const customTexture = useKaviyathamizhanTexture(props)

  useEffect(() => {
    setIsMounted(true)
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 480) {
        setCameraZ(44)
      } else if (w < 768) {
        setCameraZ(38)
      } else if (w < 1024) {
        setCameraZ(34)
      } else {
        setCameraZ(30)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isMounted) return null

  // Reduced motion fallback
  if (reduced) {
    return (
      <div className="relative w-full max-w-md my-auto">
        <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-6 shadow-2xl">
          <div className="aspect-[4/5] w-full bg-[#09090b] rounded-xl flex flex-col items-center justify-center p-6 border border-[#27272a]">
            <span className="font-display font-medium text-text-primary text-xl">
              {props.name || 'KAVIYATHAMIZHAN T K'}
            </span>
            <span className="text-xs text-text-muted mt-1 font-mono text-center">
              {props.role || 'AI / ML ENGINEER'}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[760px] -mt-10 lg:-mt-16 my-auto flex justify-center items-center select-none overflow-visible">
      <Canvas
        camera={{ position: [0, 0, cameraZ], fov: 20 }}
        gl={{ alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band customTexture={customTexture} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  )
}
