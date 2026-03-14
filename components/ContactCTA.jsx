'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaFileDownload, 
  FaCode, 
  FaWrench,
  FaStore,
  FaLaptopCode,
  FaUserTie,
  FaBriefcase
} from 'react-icons/fa'
import { MdWork, MdRestaurant } from 'react-icons/md'
import styles from './ContactCTA.module.css'

const experiences = [
  {
    period: "Sep 2024 - Présent",
    title: "Développeur Web Full-Stack — Freelance",
    description: "Conception et développement de sites web et plateformes e-commerce",
    icon: <FaLaptopCode />,
    achievements: [
      "Personnalisation WordPress & WooCommerce",
      "Optimisation UX/UI, performance, SEO",
      "Collaboration directe avec clients"
    ]
  },
  {
    period: "Mars 2025 - Juin 2025",
    title: "Développeur Web Full-Stack – Commune Territoriale de Rouadi (Stage)",
    description: "Application de gestion des demandes administratives",
    icon: <FaUserTie />,
    achievements: [
      "Authentification sécurisée (Laravel Sanctum)",
      "Réservations en ligne et dashboards",
      "Paiements Stripe/PayPal"
    ]
  },
  {
    period: "Sep 2025 - Nov 2025",
    title: "Développeur Web – Tanger Team Consulting",
    description: "Développement d'un site vitrine orienté SEO et UX",
    icon: <FaCode />,
    achievements: [
      "Conception responsive moderne",
      "Optimisation SEO on-page",
      "Sécurisation des formulaires"
    ]
  },
  {
    period: "Oct 2023 - Dec 2023",
    title: "Mécanicien – Atelier de mécanique",
    description: "Diagnostic et réparation mécanique",
    icon: <FaWrench />,
    achievements: [
      "Diagnostic des pannes mécaniques",
      "Maintenance préventive",
      "Respect des normes de sécurité"
    ]
  },
  {
    period: "Jun 2020 - Sep 2025 (Saisonnier)",
    title: "Emplois Divers – Restauration & Service",
    description: "Service client et gestion des commandes",
    icon: <MdRestaurant />,
    achievements: [
      "Service client et gestion des commandes",
      "Travail sous pression",
      "Respect des standards qualité"
    ]
  }
]

// Deterministic positions for floating symbols to keep SSR and client in sync
const floatingSymbolPositions = [
  { top: 20, left: 10 },
  { top: 35, left: 70 },
  { top: 55, left: 25 },
  { top: 65, left: 80 },
  { top: 40, left: 45 },
  { top: 75, left: 15 },
]

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className={styles.contact}>
      {/* Animated background */}
      <div className={styles.background}>
        <motion.div 
          className={styles.gradientOrb}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className={styles.gridPattern} />
      </div>

      {/* Floating symbols */}
      <div className={styles.floatingSymbols}>
        {['<Dev/>', '{ }', '</>', '{}', '<?>', '...'].map((symbol, i) => {
          const pos = floatingSymbolPositions[i % floatingSymbolPositions.length]
          return (
            <motion.div
              key={i}
              className={styles.symbol}
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                delay: i * 1,
              }}
            >
              {symbol}
            </motion.div>
          )
        })}
      </div>

      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionBadge}>Expérience & Contact</span>
          
          <h2 className={styles.title}>
            Parcours{' '}
            <span className={styles.gradientText}>
              Professionnel
            </span>
          </h2>

          {/* Timeline Experience */}
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15 }}
              >
                <div className={styles.timelineIcon} style={{
                  background: `linear-gradient(135deg, #ff6b6b, #4ecdc4)`
                }}>
                  {exp.icon}
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelinePeriod}>{exp.period}</span>
                  <h3 className={styles.timelineTitle}>{exp.title}</h3>
                  <p className={styles.timelineDescription}>{exp.description}</p>
                  <ul className={styles.timelineAchievements}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Projets Réalisés</span>
            </motion.div>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Stages & Missions</span>
            </motion.div>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0 }}
            >
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Ans Expérience Diversifiée</span>
            </motion.div>
          </div>

          {/* Contact Buttons */}
          <div className={styles.buttonGroup}>
            <Link href="/contact" className={styles.primaryBtn}>
              <FaEnvelope className={styles.btnIcon} />
              <span>Me Contacter</span>
            </Link>
            
            <motion.a
              href="/cv-amine.pdf"
              download
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className={styles.btnIcon} />
              <span>Télécharger CV</span>
            </motion.a>
          </div>

          {/* Social links */}
          <motion.div
            className={styles.socialLinks}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
          >
            <p className={styles.socialText}>Retrouvez-moi sur</p>
            <div className={styles.socialIcons}>
              {[
                { icon: <FaGithub />, url: 'https://github.com/amine-dev', label: 'GitHub' },
                { icon: <FaLinkedin />, url: 'https://linkedin.com/in/amine-dev', label: 'LinkedIn' },
                { icon: <FaEnvelope />, url: 'mailto:amine@email.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability badge */}
          <motion.div 
            className={styles.availability}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
          >
            <span className={styles.availabilityDot} />
            <span>Disponible pour mission freelance</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#gradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff6b6b"/>
              <stop offset="1" stopColor="#4ecdc4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}