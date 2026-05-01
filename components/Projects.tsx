'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef, useState, MouseEvent } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'CODEX - Online Compiler & IDE',
    description: 'A professional-grade web-based IDE with multi-language compiler, AI-powered code assistance (explain, debug, optimize), practice problems, and project management. Features include real-time execution for Python, Java, C++, JavaScript, and more.',
    technologies: ['Python', 'Flask', 'JavaScript', 'Google Gemini AI', 'Judge0 API', 'MySQL'],
    github: 'https://github.com/ARUN-S-15/CODE-X',
    demo: '#',
    publication: 'Published in HBRP Publication, Docket Number: 108641',
    favicon: '🚀'
  },
  {
    title: 'KrishiMitra - AI Farming Dashboard',
    description: 'Comprehensive AI-powered farming management platform for Kerala farmers. Features include multilingual support (Malayalam/English), weather forecasts, crop management, AI chatbot, equipment rental, government schemes, and community features.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'FastAPI', 'Groq AI'],
    github: 'https://github.com/ARUN-S-15/KrishiMitra',
    demo: '#',
    favicon: '🌾'
  },
  {
    title: 'MedInSight - Medical RAG System',
    description: 'A Retrieval-Augmented Generation (RAG) system for medical question-answering. Processes medical PDFs, creates embeddings, and provides accurate answers grounded in retrieved context. Built for Hack-A-Cure hackathon with anti-hallucination measures.',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'FAISS', 'LangChain', 'GPT-4', 'Docker'],
    github: 'https://github.com/ARUN-S-15/RAG-HACK-A-CURE',
    demo: '#',
    favicon: '🏥'
  },
  {
    title: 'Object Detection and Counting',
    description: 'Real-time intelligent system for detecting and counting multiple objects using deep learning. Implements pre-trained models like YOLO/SSD/Faster R-CNN for high-accuracy detection in various scenarios.',
    technologies: ['Python', 'OpenCV', 'YOLO', 'Deep Learning', 'Computer Vision'],
    github: 'https://github.com/ARUN-S-15',
    demo: '#',
    favicon: '🎯'
  },
  {
    title: 'CodSoft Internship Projects',
    description: 'Collection of Python projects including a Simple Calculator, Password Generator with customizable complexity, and Rock-Paper-Scissors game with score tracking. Demonstrates fundamental programming concepts and problem-solving skills.',
    technologies: ['Python', 'Random Library', 'Input Validation'],
    github: 'https://github.com/ARUN-S-15/CODSOFT',
    demo: '#',
    favicon: '💻'
  },
  {
    title: 'Learning Management System',
    description: 'Web-based Learning Management System for educational institutions. Features include course management, student enrollment, assignment tracking, and progress monitoring.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/ARUN-S-15/LMS',
    demo: '#',
    favicon: '📚'
  }
]

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setMousePosition({ x: rotateY, y: rotateX })
    setHoveredCard(index)
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionSubtitle}>Scroll horizontally to explore my work</p>
        </motion.div>
        
        <div className={styles.carouselWrapper}>
          {canScrollLeft && (
            <motion.button
              className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
              onClick={() => scroll('left')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>
          )}
          
          <div 
            className={styles.projectsScroll} 
            ref={scrollRef}
            onScroll={checkScroll}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={styles.projectCard}
                style={{
                  transform: hoveredCard === index 
                    ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.05, 1.05, 1.05)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: 'transform 0.3s ease-out'
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                data-cursor="EXPLORE"
              >
              <div className={styles.projectHeader}>
                <div className={styles.projectTitleGroup}>
                  <motion.span 
                    className={styles.favicon}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.favicon}
                  </motion.span>
                  <h3>{project.title}</h3>
                </div>
                <div className={styles.projectLinks}>
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    data-cursor="GITHUB"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a 
                    href={project.demo} 
                    aria-label="Demo"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    data-cursor="DEMO"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>
              
              <p className={styles.description}>{project.description}</p>
              
              {project.publication && (
                <div className={styles.publication}>
                  <strong>📄 </strong>{project.publication}
                </div>
              )}
              
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              </motion.div>
            ))}
          </div>
          
          {canScrollRight && (
            <motion.button
              className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
              onClick={() => scroll('right')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          )}
        </div>
        
        <div className={styles.scrollIndicator}>
          <span>← Scroll to see more projects →</span>
        </div>
      </div>
    </section>
  )
}
