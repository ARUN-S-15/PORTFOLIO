'use client'

import { useRef, useState, MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagneticEffectProps {
  children: ReactNode
  className?: string
  strength?: number
  disabled?: boolean
}

export default function MagneticEffect({ 
  children, 
  className = '', 
  strength = 0.3,
  disabled = false 
}: MagneticEffectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      style={{
        display: 'inline-block',
      }}
    >
      {children}
    </motion.div>
  )
}
