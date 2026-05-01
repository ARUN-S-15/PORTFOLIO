'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaCode } from 'react-icons/fa'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'AWS Cloud Intern',
    company: 'Real-world Deployments',
    period: 'Recent',
    type: 'Internship',
    description: 'Hands-on experience with AWS Cloud services, focusing on real-world deployments, infrastructure management, and cloud-based solutions.',
    achievements: [
      'Worked on AWS cloud deployments',
      'Gained practical experience with cloud infrastructure',
      'Implemented scalable cloud solutions'
    ],
    icon: <FaBriefcase />
  },
  {
    role: 'Python Developer Intern',
    company: 'CodSoft',
    period: 'Recent',
    type: 'Internship',
    description: 'Completed multiple Python projects demonstrating programming fundamentals and problem-solving capabilities.',
    achievements: [
      'Developed calculator application',
      'Created password generator with customization',
      'Built interactive games',
      'Enhanced Python programming skills'
    ],
    icon: <FaCode />
  }
]

const selfProjects = [
  'Built full-stack web applications',
  'Developed AI/ML projects with real-world applications',
  'Created production-ready systems',
  'Published research paper on online compiler',
  'Participated in hackathons and coding competitions'
]

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Experience & Practice</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={styles.experienceCard}
            >
              <div className={styles.iconWrapper}>
                {exp.icon}
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3>{exp.role}</h3>
                  <span className={styles.type}>{exp.type}</span>
                </div>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={styles.selfPractice}
        >
          <h3>Hands-on Practice & Self Projects</h3>
          <div className={styles.practiceGrid}>
            {selfProjects.map((project, index) => (
              <div key={index} className={styles.practiceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>{project}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
