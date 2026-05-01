'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'
import styles from './Education.module.css'

const education = [
  {
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'Sri Shakthi Institute of Engineering And Technology',
    period: '2023 - Present',
    score: 'CGPA: 8.47',
    icon: <FaGraduationCap />
  },
  {
    degree: 'HSLC – Bio-Maths',
    institution: 'Govt. Hr. Sec. School',
    period: '2022 - 2023',
    score: 'Percentage: 81.5%',
    icon: <FaSchool />
  }
]

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        
        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={styles.educationCard}
            >
              <div className={styles.iconWrapper}>
                {edu.icon}
              </div>
              <div className={styles.content}>
                <h3>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.period}>{edu.period}</p>
                <p className={styles.score}>{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
