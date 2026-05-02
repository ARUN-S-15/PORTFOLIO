'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleThemeToggle = () => {
    setDarkMode(!darkMode)
    setMobileOpen(false)
    
    // Create particles on toggle
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.cos((i / 12) * Math.PI * 2) * 50,
      y: Math.sin((i / 12) * Math.PI * 2) * 50,
    }))
    setParticles(newParticles)
    
    setTimeout(() => setParticles([]), 1000)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Portfolio<span>.</span>
        </Link>
        <div className={styles.navLinks}>
          <div className={styles.desktopLinks}>
            <a href="#about" data-cursor="ABOUT">About</a>
            <a href="#skills" data-cursor="SKILLS">Skills</a>
            <a href="#projects" data-cursor="WORK">Projects</a>
            <a href="#contact" data-cursor="CONTACT">Contact</a>
          </div>

          <div className={styles.actions}>
            <motion.button 
              className={styles.themeToggle}
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
              data-cursor={darkMode ? "LIGHT" : "DARK"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                {particles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className={styles.particle}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: particle.x,
                      y: particle.y,
                      opacity: 0,
                      scale: 0,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                ))}
              </AnimatePresence>
            </motion.button>

            <button
              className={styles.hamburger}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            >
              <a href="#about" data-cursor="ABOUT">About</a>
              <a href="#skills" data-cursor="SKILLS">Skills</a>
              <a href="#projects" data-cursor="WORK">Projects</a>
              <a href="#contact" data-cursor="CONTACT">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
