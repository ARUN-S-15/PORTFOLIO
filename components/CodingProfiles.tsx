'use client'

import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank, SiCodechef, SiCodeforces } from 'react-icons/si'
import styles from './CodingProfiles.module.css'

const profiles = [
  {
    platform: 'LeetCode',
    username: 'arun-s-15',
    stats: '150+ Problems Solved',
    icon: <SiLeetcode />,
    link: '#',
    color: '#FFA116'
  },
  {
    platform: 'GitHub',
    username: 'ARUN-S-15',
    stats: '10+ Repositories',
    icon: <FaGithub />,
    link: 'https://github.com/ARUN-S-15',
    color: '#fff'
  },
  {
    platform: 'HackerRank',
    username: 'arun_s_15',
    stats: 'Problem Solving',
    icon: <SiHackerrank />,
    link: '#',
    color: '#00EA64'
  },
  {
    platform: 'CodeChef',
    username: 'arun_s_15',
    stats: 'Competitive Coding',
    icon: <SiCodechef />,
    link: '#',
    color: '#5B4638'
  },
  {
    platform: 'Codeforces',
    username: 'arun_s_15',
    stats: 'Competitive Programming',
    icon: <SiCodeforces />,
    link: '#',
    color: '#1F8ACB'
  }
]

export default function CodingProfiles() {
  return (
    <section className={styles.profiles}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Coding Profiles</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>Find me on various competitive coding platforms</p>
        </motion.div>
        
        <div className={styles.grid}>
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <div className={styles.iconWrapper} style={{ color: profile.color }}>
                {profile.icon}
              </div>
              <h3>{profile.platform}</h3>
              <p className={styles.username}>@{profile.username}</p>
              <p className={styles.stats}>{profile.stats}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
