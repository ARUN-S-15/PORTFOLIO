'use client'

import { motion } from 'framer-motion'
import { FaFileAlt } from 'react-icons/fa'
import styles from './Publications.module.css'

export default function Publications() {
  return (
    <section className={styles.publications}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Patent & Publications</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.publicationCard}
        >
          <div className={styles.iconWrapper}>
            <FaFileAlt />
          </div>
          <div className={styles.content}>
            <h3>CODEX (Online Compiler)</h3>
            <p className={styles.publisher}>Published in: <strong>HBRP Publication</strong></p>
            <p className={styles.docket}>Docket Number: <strong>108641</strong></p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
