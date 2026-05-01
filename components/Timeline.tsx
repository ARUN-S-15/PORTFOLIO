'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGraduationCap, FaSchool, FaBriefcase, FaCode } from 'react-icons/fa'
import styles from './Timeline.module.css'

const timelineData = [
  {
    type: 'education',
    title: 'B.Tech – Artificial Intelligence and Data Science',
    organization: 'Sri Shakthi Institute of Engineering And Technology',
    period: '2023 - Present',
    details: 'CGPA: 8.47',
    icon: <FaGraduationCap />,
    color: '#3b82f6'
  },
  {
    type: 'experience',
    title: 'AWS Cloud Intern',
    organization: 'Real-world Deployments',
    period: 'Recent',
    details: 'Worked on AWS cloud deployments and gained practical experience',
    icon: <FaBriefcase />,
    color: '#10b981'
  },
  {
    type: 'experience',
    title: 'Python Developer Intern',
    organization: 'CodSoft',
    period: 'Recent',
    details: 'Developed calculator, password generator, and interactive games',
    icon: <FaCode />,
    color: '#8b5cf6'
  },
  {
    type: 'education',
    title: 'HSLC – Bio-Maths',
    organization: 'Govt. Hr. Sec. School',
    period: '2022 - 2023',
    details: 'Percentage: 81.5%',
    icon: <FaSchool />,
    color: '#06b6d4'
  },
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="timeline" className={styles.timeline} ref={containerRef}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>My Journey</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>Education & Experience Timeline</p>
        </motion.div>

        <div className={styles.timelineWrapper}>
          {/* Animated vertical line */}
          <div className={styles.timelineLine}>
            <motion.div
              className={styles.timelineProgress}
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className={styles.timelineItems}>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.timelineItem} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div
                  className={styles.card}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${item.color}30`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.cardHeader}>
                    <motion.div
                      className={styles.iconCircle}
                      style={{ background: item.color }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span
                      className={styles.badge}
                      style={{ background: `${item.color}20`, color: item.color }}
                    >
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.organization}>{item.organization}</p>
                  <p className={styles.period}>{item.period}</p>
                  <p className={styles.details}>{item.details}</p>

                  {/* Connection dot */}
                  <motion.div
                    className={styles.dot}
                    style={{ background: item.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={styles.dotPulse}
                      style={{ background: item.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
