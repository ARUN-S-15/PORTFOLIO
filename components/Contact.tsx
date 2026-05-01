'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import ContactForm from './ContactForm'
import styles from './Contact.module.css'

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.contentWrapper}
        >
          <div className={styles.mainContent}>
            <motion.h2 
              className={styles.cta}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            
            <motion.div 
              className={styles.socialIcons}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className={styles.iconCircle}
                variants={iconVariants}
                whileHover="hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/arun-s-17076a33a" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className={styles.iconCircle}
                variants={iconVariants}
                whileHover="hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://github.com/ARUN-S-15" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub" 
                className={styles.iconCircle}
                variants={iconVariants}
                whileHover="hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="mailto:arunsubramaniyan323@gmail.com" 
                aria-label="Email" 
                className={styles.iconCircle}
                variants={iconVariants}
                whileHover="hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className={styles.footer}>
        <p>Design & Built with ❤️ © 2026</p>
      </div>
    </section>
  )
}
