'use client'

import React from 'react'
import { Lanyard3DScene } from './Lanyard3DScene'

interface ProfilePhotoCardProps {
  isAssembled?: boolean
}

export function ProfilePhotoCard({ isAssembled = true }: ProfilePhotoCardProps) {
  return <Lanyard3DScene />
}
