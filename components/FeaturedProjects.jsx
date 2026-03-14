'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  FaWordpress, 
  FaShoppingCart, 
  FaStore, 
  FaCode, 
  FaDatabase,
  FaPalette,
  FaServer,
  FaExternalLinkAlt 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiSupabase, 
  SiPostgresql,
  SiWoo,
  SiPhp,
  SiJavascript 
} from 'react-icons/si'
import styles from './FeaturedProjects.module.css'

const projects = [
  {
    title: 'FIORA STYLE - E-commerce Mode',
    description: 'Boutique en ligne spécialisée dans la mode Femmes & Enfants avec WordPress et WooCommerce',
    fullDescription: 'Conception et développement d\'une boutique e-commerce complète avec système de catégories personnalisées, shortcodes PHP, et optimisation SEO.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'HTML/CSS', 'JavaScript'],
    color: '#ff6b6b',
    link: '/projects/fiora-style',
    icon: <FaWordpress />,
    features: [
      'Système de catégories personnalisées (Femmes/Enfants)',
      'Shortcodes PHP pour produits et sous-catégories',
      'UI/UX optimisé avec HTML/CSS/JS',
      'Panier, checkout et comptes clients',
      'URLs optimisées SEO'
    ]
  },
  {
    title: 'Atlas Men – E-commerce Application',
    description: 'Application e-commerce complète pour vente de vêtements hommes avec Next.js et Supabase',
    fullDescription: 'Développement full-stack d\'une plateforme e-commerce avec authentification, gestion des produits et panier dynamique.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'CSS'],
    color: '#4ecdc4',
    link: '/projects/atlas-men',
    icon: <SiNextdotjs />,
    features: [
      'Authentification (Register/Login)',
      'Gestion des rôles (Admin/User)',
      'Catalogue et fiches produits',
      'Panier dynamique',
      'Dashboard admin avec upload images'
    ]
  },
  {
    title: 'Application Gestion Administrative',
    description: 'Application de gestion des demandes administratives pour la Commune Territoriale de Rouadi',
    fullDescription: 'Stage - Développement d\'une application complète avec authentification sécurisée et paiements intégrés.',
    tech: ['Laravel', 'Sanctum', 'MySQL', 'Stripe', 'PayPal'],
    color: '#ffb347',
    link: '/projects/gestion-rouadi',
    icon: <FaServer />,
    features: [
      'Authentification sécurisée (Laravel Sanctum)',
      'Gestion des rôles utilisateurs',
      'Réservations en ligne',
      'Dashboards administratifs',
      'Paiements Stripe/PayPal'
    ]
  },
  {
    title: 'Site Vitrine SEO - Tanger Team Consulting',
    description: 'Site vitrine moderne avec optimisation SEO et UX avancée',
    fullDescription: 'Développement d\'un site vitrine orienté SEO avec conception responsive et optimisation des performances.',
    tech: ['WordPress', 'SEO', 'UX/UI', 'PHP', 'JavaScript'],
    color: '#9b59b6',
    link: '/projects/ttc-site',
    icon: <FaPalette />,
    features: [
      'Design moderne et responsive',
      'Optimisation SEO on-page',
      'Référencement local Google My Business',
      'Sécurisation des formulaires',
      'Optimisation des performances'
    ]
  }
]

// Precomputed deterministic positions for floating dots to avoid hydration mismatch
const floatingDots = Array.from({ length: 8 }, (_, i) => {
  const row = i % 4
  const col = Math.floor(i / 4)
  return {
    top: 10 + row * 20, // 10%, 30%, 50%, 70%
    left: 15 + col * 35 + row * 3, // spread horizontally with slight variation
    size: 7 + (i % 3) * 3, // 7px, 10px, 13px
  }
})

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className={styles.projects}>
      {/* Floating elements */}
      <div className={styles.floatingElements}>
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className={styles.floatingDot}
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionBadge}>Mes Projets</span>
          <h2 className={styles.title}>
            Projets{' '}
            <span className={styles.gradientText}>
              Récents
            </span>
          </h2>
          <p className={styles.subtitle}>
            Découvrez mes réalisations en développement web full-stack et e-commerce
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Card background effect */}
              <div 
                className={styles.cardGlow}
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}40, transparent 70%)` }}
              />

              {/* Decorative corner */}
              <div className={styles.cornerDecoration}>
                <div className={styles.cornerLine} style={{ background: project.color }} />
                <div className={styles.cornerLine} style={{ background: project.color }} />
              </div>

              {/* Project icon */}
              <div className={styles.projectIcon} style={{ color: project.color }}>
                {project.icon}
              </div>

              <h3 className={styles.projectTitle} style={{ color: project.color }}>
                {project.title}
              </h3>

              <p className={styles.projectDescription}>
                {project.description}
              </p>

              {/* Features list */}
              <div className={styles.featuresList}>
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + i * 0.1 }}
                  >
                    <span className={styles.featureDot} style={{ background: project.color }} />
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* Tech stack */}
              <div className={styles.techStack}>
                {project.tech.map(tech => (
                  <motion.span
                    key={tech}
                    className={styles.techTag}
                    style={{ borderColor: project.color }}
                    whileHover={{ 
                      backgroundColor: project.color,
                      color: '#fff',
                      scale: 1.05
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Actions */}
              <div className={styles.projectActions}>
                <Link
                  href={project.link}
                  className={styles.viewProjectBtn}
                  style={{ color: project.color }}
                >
                  <span>Voir le projet</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>

                <motion.a
                  href="#"
                  className={styles.githubLink}
                  style={{ color: project.color }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.viewAllContainer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link href="/projects" className={styles.viewAllBtn}>
            <span>Tous mes projets</span>
            <motion.svg
              className={styles.btnArrow}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}