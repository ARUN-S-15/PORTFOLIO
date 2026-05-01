'use client'

import { motion } from 'framer-motion'
import { FaCertificate, FaTrophy } from 'react-icons/fa'
import styles from './Certifications.module.css'

const certifications = [
  {
    title: 'Python Programming A-Z',
    platform: 'Udemy',
    icon: <FaCertificate />
  },
  {
    title: 'C Programming Course for Basic to Expert',
    platform: 'Udemy',
    icon: <FaCertificate />
  }
]

const achievements = [
  {
    title: '24 Hours HACKATHON',
    organization: 'Vellore Institute of Technology - Chennai',
    icon: <FaTrophy />
  }
]

export default function Certifications() {
  return (
    <section className={styles.certifications}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Certifications & Achievements</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Certifications</h3>
            <div className={styles.grid}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.card}
                >
                  <div className={styles.iconWrapper}>{cert.icon}</div>
                  <div>
                    <h4>{cert.title}</h4>
                    <p>{cert.platform}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className={styles.section}>
            <h3>Achievements</h3>
            <div className={styles.grid}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={styles.card}
                >
                  <div className={styles.iconWrapper}>{achievement.icon}</div>
                  <div>
                    <h4>{achievement.title}</h4>
                    <p>{achievement.organization}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
