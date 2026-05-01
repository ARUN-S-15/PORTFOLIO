'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import MagneticEffect from './MagneticEffect'
import styles from './ContactForm.module.css'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    // Clear error when user starts typing
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <FaUser className={styles.inputIcon} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              disabled={status === 'loading'}
            />
          </div>
          <AnimatePresence>
            {errors.name && (
              <motion.span
                className={styles.error}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {errors.name}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <FaEnvelope className={styles.inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              disabled={status === 'loading'}
            />
          </div>
          <AnimatePresence>
            {errors.email && (
              <motion.span
                className={styles.error}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {errors.email}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            rows={5}
            disabled={status === 'loading'}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.span
                className={styles.error}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {errors.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <MagneticEffect strength={0.3}>
          <motion.button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'loading' || status === 'success'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="SEND"
          >
            {status === 'loading' && (
              <>
                <motion.div
                  className={styles.spinner}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                Sending...
              </>
            )}
            {status === 'success' && (
              <>
                <FaCheckCircle />
                Sent!
              </>
            )}
            {status === 'idle' && (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
            {status === 'error' && (
              <>
                <FaExclamationCircle />
                Try Again
              </>
            )}
          </motion.button>
        </MagneticEffect>

        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <FaCheckCircle />
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              className={styles.errorMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <FaExclamationCircle />
              Something went wrong. Please try again.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
