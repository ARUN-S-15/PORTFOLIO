'use client'

import { motion } from 'framer-motion'
import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiMongodb, SiMysql, SiFlask, SiFastapi, SiNextdotjs, SiKeras, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiLinux, SiOpencv } from 'react-icons/si'
import styles from './Skills.module.css'

const techStack = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JAVASCRIPT', icon: <FaJsSquare /> },
  { name: 'PYTHON', icon: <FaPython /> },
  { name: 'REACT', icon: <FaReact /> },
  { name: 'NEXTJS', icon: <SiNextdotjs /> },
  { name: 'NODEJS', icon: <FaNodeJs /> },
  { name: 'FLASK', icon: <SiFlask /> },
  { name: 'FASTAPI', icon: <SiFastapi /> },
  { name: 'TENSORFLOW', icon: <SiTensorflow /> },
  { name: 'PYTORCH', icon: <SiPytorch /> },
  { name: 'KERAS', icon: <SiKeras /> },
  { name: 'OPENCV', icon: <SiOpencv /> },
  { name: 'NUMPY', icon: <SiNumpy /> },
  { name: 'PANDAS', icon: <SiPandas /> },
  { name: 'SCIKIT-LEARN', icon: <SiScikitlearn /> },
  { name: 'MYSQL', icon: <SiMysql /> },
  { name: 'MONGODB', icon: <SiMongodb /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'DOCKER', icon: <FaDocker /> },
  { name: 'GIT', icon: <FaGitAlt /> },
  { name: 'GITHUB', icon: <FaGithub /> },
  { name: 'JUPYTER', icon: <SiJupyter /> },
  { name: 'LINUX', icon: <SiLinux /> },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        
        <div className={styles.techGrid}>
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className={styles.techCard}
            >
              <motion.div 
                className={styles.techIcon}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.1 
                }}
              >
                {tech.icon}
              </motion.div>
              <span className={styles.techName}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
