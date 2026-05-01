'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import MagneticEffect from './MagneticEffect'
import styles from './Hero.module.css'

const roles = [
  'AI Engineer',
  'Full-Stack Developer',
  'Machine Learning Engineer',
  'Problem Solver',
  'Tech Enthusiast'
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[roleIndex]
      
      if (!isDeleting) {
        setCurrentRole(fullRole.substring(0, currentRole.length + 1))
        setTypingSpeed(150)
        
        if (currentRole === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentRole(fullRole.substring(0, currentRole.length - 1))
        setTypingSpeed(100)
        
        if (currentRole === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentRole, isDeleting, roleIndex, typingSpeed])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.greetingWrapper}
          >
            <span className={styles.greeting}>Hi there! 👋</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.name}
          >
            I'm <span className={styles.highlight}>Arun S</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.tagline}
          >
            <span className={styles.typingText}>
              {currentRole}
              <span className={styles.cursor}>|</span>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={styles.description}
          >
            Turning ideas into code and data into intelligence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={styles.ctaButtons}
          >
            <MagneticEffect strength={0.4}>
              <motion.a 
                href="#projects" 
                className={styles.primaryBtn}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                data-cursor="VIEW"
              >
                View My Work
              </motion.a>
            </MagneticEffect>
            <MagneticEffect strength={0.4}>
              <motion.a 
                href="#contact" 
                className={styles.secondaryBtn}
                whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
                whileTap={{ scale: 0.95 }}
                data-cursor="CONTACT"
              >
                Contact Me
              </motion.a>
            </MagneticEffect>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className={styles.socialLinks}
          >
            <motion.a
              href="https://github.com/ARUN-S-15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialIcon}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              data-cursor="GITHUB"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/arun-s-17076a33a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialIcon}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              data-cursor="LINKEDIN"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:arunsubramaniyan323@gmail.com"
              aria-label="Email"
              className={styles.socialIcon}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              data-cursor="EMAIL"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={styles.stats}
          >
            <motion.div 
              className={styles.statItem}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Projects</span>
            </motion.div>
            <div className={styles.statDivider}></div>
            <motion.div 
              className={styles.statItem}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Technologies</span>
            </motion.div>
            <div className={styles.statDivider}></div>
            <motion.div 
              className={styles.statItem}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={styles.statNumber}>1</span>
              <span className={styles.statLabel}>Publication</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.imageContainer}
        >
          <motion.div 
            className={styles.avatarCircle}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/profile.png"
              alt="Arun S"
              width={300}
              height={300}
              className={styles.avatarImage}
              priority
            />
          </motion.div>
          <div className={styles.glowEffect}></div>
        </motion.div>
      </div>
    </section>
  )
}
