'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add hover effect detection
    const handleHoverElements = () => {
      const hoverElements = document.querySelectorAll('a, button, .magnetic, [data-cursor]')
      
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true)
        })
        
        el.addEventListener('mouseleave', () => {
          setIsHovering(false)
        })
      })
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    // Setup hover detection after a short delay to ensure DOM is ready
    setTimeout(handleHoverElements, 500)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Big Dot (Slow Follow) */}
      <motion.div
        className={styles.cursorBig}
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.9 : 0.7,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.8,
        }}
      />

      {/* Small Dot (Instant) */}
      <motion.div
        className={styles.cursorSmall}
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 1000,
          mass: 0.1,
        }}
      />
    </>
  )
}
