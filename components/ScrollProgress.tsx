'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (window.scrollY / totalHeight) * 100
      setProgress(scrollProgress)

      // Detect current section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getColor = () => {
    switch (currentSection) {
      case 'hero': return '#3b82f6'
      case 'about': return '#8b5cf6'
      case 'skills': return '#06b6d4'
      case 'projects': return '#10b981'
      case 'contact': return '#f59e0b'
      default: return '#3b82f6'
    }
  }

  return (
    <motion.div
      className={styles.progressBar}
      style={{
        width: `${progress}%`,
        backgroundColor: getColor(),
      }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  )
}
