'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Resume from './Resume'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        
        <div className={styles.contentGrid}>
          {/* Left Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.imageSection}
          >
            <div className={styles.imageWrapper}>
              <motion.div 
                className={styles.imageContainer}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/profile.png"
                  alt="Arun S"
                  width={380}
                  height={380}
                  className={styles.profileImage}
                  priority
                />
                <div className={styles.imageGlow}></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className={styles.resumeButtons}
              >
                <Resume />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className={styles.textContent}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className={styles.shortIntro}
            >
              <h3 className={styles.introTitle}>Hi, I'm Arun S 👋</h3>
              <p className={styles.intro}>
                Turning ideas into code and data into intelligence — passionate about building <span className={styles.nameHighlight}>AI-powered solutions</span> that make a difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={styles.description}
            >
              <h3 className={styles.aboutTitle}>About Me</h3>
              <p>
                I'm an aspiring <strong>AI engineer</strong> who loves exploring how data, algorithms, and code come together 
                to create intelligent systems. From solving algorithmic challenges to building machine learning 
                projects, I enjoy every step of the problem-solving journey.
              </p>
              <p>
                I'm constantly experimenting, learning, and improving my skills in <strong>Python</strong>, <strong>machine learning</strong>, 
                and <strong>software development</strong>. As a passionate problem solver, I love tackling complex challenges 
                with creative solutions. I'm a quick learner who's always exploring new technologies and frameworks, 
                and I believe in the power of collaboration to build amazing products together.
              </p>
              <p>
                My goal is to build smart, efficient, and impactful solutions while growing as a developer in the 
                ever-evolving tech world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
