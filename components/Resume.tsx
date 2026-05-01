'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaEye, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import MagneticEffect from './MagneticEffect'
import styles from './Resume.module.css'

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Arun_S_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className={styles.resumeButtons}
      >
        <MagneticEffect strength={0.3}>
          <motion.button
            className={styles.viewBtn}
            onClick={handleView}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            data-cursor="VIEW"
          >
            <FaEye />
            <span>View Resume</span>
          </motion.button>
        </MagneticEffect>

        <MagneticEffect strength={0.3}>
          <motion.button
            className={styles.downloadBtn}
            onClick={handleDownload}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            data-cursor="DOWNLOAD"
          >
            <FaDownload />
            <span>Download Resume</span>
          </motion.button>
        </MagneticEffect>
      </motion.div>

      {/* Resume Modal */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <>
                <motion.div
                  className={styles.modalOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleCloseModal}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className={styles.modalContainer}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.button
                    className={styles.closeButton}
                    onClick={handleCloseModal}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    data-cursor="CLOSE"
                  >
                    <FaTimes />
                  </motion.button>

                  <div className={styles.pdfContainer}>
                    <iframe
                      src="/resume.pdf"
                      className={styles.pdfViewer}
                      title="Resume"
                    />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}
