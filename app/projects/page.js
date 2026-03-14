'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaSearch,
  FaFilter,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaWordpress,
  FaDatabase,
  FaShoppingCart,
  FaCode,
  FaServer,
  FaPalette,
  FaChartLine,
  FaMobile,
  FaShieldAlt,
  FaRocket,
  FaEye
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMysql, 
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiOpenai,
  SiStripe,
  SiPaypal,
  SiWoocommerce,
  SiLaravel,
  SiReact,
  SiRedux,
  SiSocketdotio
} from 'react-icons/si'
import styles from './ProjectsPage.module.css'

const projectsData = [
  {
    id: 1,
    title: 'FIORA STYLE - Boutique Mode',
    description: 'Boutique en ligne spécialisée dans la mode Femmes & Enfants avec WordPress et WooCommerce',
    longDescription: `Conception et développement d'une boutique e-commerce complète pour FIORA STYLE. 
    Le projet inclut un système de catégories personnalisées, des shortcodes PHP sur mesure, 
    et une optimisation SEO avancée pour maximiser la visibilité.`,
    image: '👗',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'HTML/CSS', 'JavaScript', 'MySQL'],
    category: 'ecommerce',
    features: [
      'Système de catégories personnalisées (Femmes/Enfants)',
      'Shortcodes PHP pour produits et sous-catégories',
      'UI/UX optimisé avec design responsive',
      'Panier, checkout et comptes clients',
      'URLs optimisées SEO et permaliens personnalisés',
      'Gestion des produits et inventaire'
    ],
    github: 'https://github.com/Bouhamza4/fiora-style',
    live: 'https://fiorastyle.ma',
    color: '#ff6b6b',
    icon: <FaWordpress />,
    year: '2024'
  },
  {
    id: 2,
    title: 'Atlas Men – E-commerce',
    description: 'Application e-commerce complète pour vente de vêtements hommes avec Next.js et Supabase',
    longDescription: `Développement full-stack d'une plateforme e-commerce moderne pour Atlas Men. 
    L'application permet la gestion complète des produits, des utilisateurs et des commandes 
    avec une interface administrateur intuitive.`,
    image: '👔',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'CSS', 'React'],
    category: 'fullstack',
    features: [
      'Authentification (Register/Login)',
      'Gestion des rôles (Admin/User)',
      'Catalogue et fiches produits',
      'Panier dynamique avec localStorage',
      'Dashboard admin avec upload images',
      'Paiements intégrés (Stripe)'
    ],
    github: 'https://github.com/Bouhamza4/atlas-men',
    live: 'https://atlas-men.vercel.app',
    color: '#4ecdc4',
    icon: <SiNextdotjs />,
    year: '2025'
  },
  {
    id: 3,
    title: 'Gestion Administrative - Rouadi',
    description: 'Application de gestion des demandes administratives pour la Commune Territoriale de Rouadi',
    longDescription: `Application web complète développée durant mon stage à la Commune de Rouadi. 
    Elle permet la gestion électronique des demandes administratives avec authentification sécurisée 
    et paiements en ligne intégrés.`,
    image: '🏛️',
    technologies: ['Laravel', 'Sanctum', 'MySQL', 'Stripe', 'PayPal', 'Bootstrap'],
    category: 'fullstack',
    features: [
      'Authentification sécurisée (Laravel Sanctum)',
      'Gestion des rôles et permissions',
      'Réservations en ligne',
      'Dashboards administratifs',
      'Paiements Stripe/PayPal',
      'Génération de rapports PDF'
    ],
    github: 'https://github.com/Bouhamza4/rouadi-gestion',
    live: 'https://gestion-rouadi.ma',
    color: '#ffb347',
    icon: <FaLaravel />,
    year: '2025'
  },
  {
    id: 4,
    title: 'Tanger Team Consulting',
    description: 'Site vitrine moderne avec optimisation SEO et UX avancée',
    longDescription: `Site vitrine professionnel pour Tanger Team Consulting, mettant l'accent sur 
    le référencement local et l'expérience utilisateur. Optimisation complète pour Google My Business 
    et performances maximales.`,
    image: '📊',
    technologies: ['WordPress', 'SEO', 'UX/UI', 'PHP', 'JavaScript', 'Elementor'],
    category: 'frontend',
    features: [
      'Design moderne et responsive',
      'Optimisation SEO on-page',
      'Référencement local Google My Business',
      'Sécurisation des formulaires',
      'Optimisation des performances (Lighthouse 95+)',
      'Analytics intégrés'
    ],
    github: 'https://github.com/Bouhamza4/ttc-site',
    live: 'https://ttconsulting.ma',
    color: '#9b59b6',
    icon: <FaPalette />,
    year: '2025'
  },
  {
    id: 5,
    title: 'Application de Mécanique',
    description: 'Application de gestion pour atelier mécanique - diagnostic et maintenance',
    longDescription: `Application conçue pour faciliter la gestion d'un atelier mécanique. 
    Elle permet de suivre les diagnostics, la maintenance préventive et les réparations 
    avec une interface adaptée aux mécaniciens.`,
    image: '🔧',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    category: 'fullstack',
    features: [
      'Gestion des clients et véhicules',
      'Diagnostic des pannes',
      'Planning des maintenances',
      'Historique des réparations',
      'Gestion des pièces détachées',
      'Facturation automatique'
    ],
    github: 'https://github.com/Bouhamza4/garage-manager',
    live: 'https://garage-app.vercel.app',
    color: '#00bcd4',
    icon: <FaDatabase />,
    year: '2024'
  }
]

const categories = [
  { name: 'Tous', value: 'all', icon: '🔍' },
  { name: 'E-commerce', value: 'ecommerce', icon: '🛒' },
  { name: 'Full Stack', value: 'fullstack', icon: '⚡' },
  { name: 'Frontend', value: 'frontend', icon: '🎨' }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         project.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  // Pagination
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <motion.div 
            className={styles.orb1}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className={styles.orb2}
            animate={{
              scale: [1, 1.4, 1],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          <div className={styles.gridOverlay} />
        </div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionBadge}>Mon Portfolio</span>
            <h1 className={styles.title}>
              Mes{' '}
              <span className={styles.gradientText}>
                Projets
              </span>
            </h1>
            <p className={styles.subtitle}>
              Découvrez une sélection de mes réalisations les plus significatives,
              démontrant mon expertise en développement web full-stack.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Découvrir</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.filterContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search Bar */}
            <div className={styles.searchWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Rechercher un projet par nom, technologie ou fonctionnalité..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <motion.button
                  className={styles.clearSearch}
                  onClick={() => setSearchQuery('')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              )}
            </div>

            {/* Category Filters */}
            <div className={styles.categories}>
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`${styles.categoryBtn} ${filter === cat.value ? styles.active : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.categoryIcon}>{cat.icon}</span>
                  <span>{cat.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Results Count */}
            <div className={styles.resultsCount}>
              <span>{filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <AnimatePresence mode="wait">
            {currentProjects.length > 0 ? (
              <motion.div 
                className={styles.projectsGrid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={styles.projectCard}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className={styles.cardGlow} style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}40, transparent 70%)` }} />
                    
                    <div className={styles.cardHeader}>
                      <div className={styles.projectIcon} style={{ color: project.color }}>
                        {project.icon}
                      </div>
                      <div className={styles.projectYear}>{project.year}</div>
                    </div>

                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>

                    <div className={styles.techStack}>
                      {project.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className={styles.techTag}>+{project.technologies.length - 4}</span>
                      )}
                    </div>

                    <div className={styles.cardFooter}>
                      <motion.button
                        className={styles.viewProjectBtn}
                        style={{ color: project.color }}
                        whileHover={{ x: 5 }}
                      >
                        <span>Voir détails</span>
                        <FaEye />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className={styles.noResults}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.noResultsIcon}>🔍</div>
                <h3>Aucun projet trouvé</h3>
                <p>Essayez d'ajuster vos critères de recherche</p>
                <motion.button
                  className={styles.resetButton}
                  onClick={() => {
                    setFilter('all')
                    setSearchQuery('')
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Réinitialiser les filtres
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className={styles.pagination}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className={styles.pageBtn}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowLeft />
              </motion.button>

              <div className={styles.pageNumbers}>
                {[...Array(totalPages)].map((_, i) => (
                  <motion.button
                    key={i + 1}
                    className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.active : ''}`}
                    onClick={() => setCurrentPage(i + 1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {i + 1}
                  </motion.button>
                ))}
              </div>

              <motion.button
                className={styles.pageBtn}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowRight />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>

              <div className={styles.modalHeader} style={{ background: `linear-gradient(135deg, ${selectedProject.color}20, transparent)` }}>
                <div className={styles.modalIcon} style={{ color: selectedProject.color }}>
                  {selectedProject.icon}
                </div>
                <div>
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                </div>
              </div>

              <div className={styles.modalBody}>
                <h3>Description</h3>
                <p>{selectedProject.longDescription}</p>

                <h3>Fonctionnalités</h3>
                <ul className={styles.featuresList}>
                  {selectedProject.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={styles.featureDot} style={{ background: selectedProject.color }} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <h3>Technologies</h3>
                <div className={styles.modalTech}>
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className={styles.modalTechTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.modalLinks}>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>Code Source</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Voir le projet</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}