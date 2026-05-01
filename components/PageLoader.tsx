'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './PageLoader.module.css'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={styles.logoContainer}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={styles.logo}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <span className={styles.logoText}>AS</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.progressBar}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />

          <motion.p
            className={styles.loadingText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading Portfolio...
          </motion.p>

          {/* Curtain effect */}
          <motion.div
            className={styles.curtainLeft}
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className={styles.curtainRight}
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
