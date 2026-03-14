'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaHeart,
  FaRocket,
  FaCode,
  FaLaptopCode,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaCopyright
} from 'react-icons/fa'
import { SiNextdotjs, SiReact, SiLaravel, SiTailwindcss, SiTypescript } from 'react-icons/si'
import styles from './Footer.module.css'

// Deterministic particle positions to avoid hydration mismatch
const footerParticles = Array.from({ length: 15 }, (_, i) => {
  const row = i % 5
  const col = Math.floor(i / 5)
  return {
    top: 10 + row * 15 + (col * 2), // spread vertically
    left: 8 + col * 20 + row * 2,   // spread horizontally
    size: 3 + (i % 4),              // 3px–6px
  }
})

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/Bouhamza4', 
      icon: <FaGithub />, 
      color: '#fff',
      hoverColor: '#333'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/mohamed-elamine-bouhamza-9b5510244', 
      icon: <FaLinkedin />, 
      color: '#0077b5',
      hoverColor: '#0077b5'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com', 
      icon: <FaTwitter />, 
      color: '#1da1f2',
      hoverColor: '#1da1f2'
    },
    { 
      name: 'Email', 
      url: 'mailto:bouhamzamohammed557@gmail.com', 
      icon: <FaEnvelope />, 
      color: '#ea4335',
      hoverColor: '#ea4335'
    }
  ]

  const quickLinks = [
    { name: 'Accueil', path: '/', icon: '🏠' },
    { name: 'À propos', path: '/about', icon: '👤' },
    { name: 'Projets', path: '/projects', icon: '💻' },
    { name: 'Contact', path: '/contact', icon: '📧' }
  ]

  const techStack = [
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#fff' },
    { name: 'React', icon: <SiReact />, color: '#61dafb' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#ff2d20' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38bdf8' }
  ]

  return (
    <footer className={styles.footer} ref={ref}>
      {/* Animated Wave Background */}
      <div className={styles.waveBackground}>
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <motion.path
            fill="rgba(78, 205, 196, 0.1)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className={styles.particles}>
        {footerParticles.map((p, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Brand Section */}
          <motion.div
            className={styles.brandSection}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className={styles.logoLink}>
              <motion.div
                className={styles.logo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.logoPrefix}>&lt;</span>
                <span className={styles.logoName}>Amine</span>
                <span className={styles.logoDev}>.dev</span>
                <span className={styles.logoSuffix}>/&gt;</span>
              </motion.div>
            </Link>

            <motion.p
              className={styles.brandDescription}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Développeur web full-stack passionné par la création d'applications
              modernes, performantes et orientées expérience utilisateur.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              className={styles.techStack}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={styles.techIcon}
                  style={{ color: tech.color }}
                  whileHover={{ y: -5, scale: 1.2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {tech.icon}
                  <span className={styles.techTooltip}>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className={styles.linksSection}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleGlow} />
              Navigation
              <motion.div
                className={styles.titleUnderline}
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </h3>

            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link href={link.path} className={styles.link}>
                    <motion.span
                      className={styles.linkIcon}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {link.icon}
                    </motion.span>
                    <span className={styles.linkName}>{link.name}</span>
                    <motion.span
                      className={styles.linkArrow}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className={styles.contactSection}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleGlow} />
              Contact
              <motion.div
                className={styles.titleUnderline}
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </h3>

            <ul className={styles.contactList}>
              <motion.li
                className={styles.contactItem}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <span className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </span>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Localisation</span>
                  <span className={styles.contactValue}>Mesnana, Tanger, Maroc</span>
                </div>
              </motion.li>

              <motion.li
                className={styles.contactItem}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                <span className={styles.contactIcon}>
                  <FaEnvelope />
                </span>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:bouhamzamohammed557@gmail.com" className={styles.contactValue}>
                    bouhamzamohammed557@gmail.com
                  </a>
                </div>
              </motion.li>

              <motion.li
                className={styles.contactItem}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <span className={styles.contactIcon}>
                  <FaPhone />
                </span>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Téléphone</span>
                  <a href="tel:+212624366802" className={styles.contactValue}>
                    0624366802
                  </a>
                </div>
              </motion.li>

              <motion.li
                className={styles.contactItem}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
              >
                <span className={styles.contactIcon}>
                  <FaClock />
                </span>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Disponibilité</span>
                  <span className={styles.contactValue}>
                    <span className={styles.availabilityDot} />
                    Disponible freelance
                  </span>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            className={styles.socialSection}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleGlow} />
              Réseaux
              <motion.div
                className={styles.titleUnderline}
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </h3>

            <div className={styles.socialGrid}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  style={{ '--hover-color': social.hoverColor }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    boxShadow: `0 10px 20px ${social.color}30`
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div
                    className={styles.socialIcon}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    {social.icon}
                  </motion.div>
                  <span className={styles.socialName}>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className={styles.copyright}>
            <FaCopyright className={styles.copyrightIcon} />
            <span>{currentYear} Amine.dev. Tous droits réservés.</span>
          </div>

          <div className={styles.madeWith}>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart className={styles.heartIcon} />
            </motion.span>
            <span>Fait avec passion au Maroc</span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaRocket className={styles.rocketIcon} />
            </motion.span>
          </div>

          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              <motion.span whileHover={{ color: '#4ecdc4' }}>
                Confidentialité
              </motion.span>
            </Link>
            <span className={styles.separator}>•</span>
            <Link href="/terms" className={styles.legalLink}>
              <motion.span whileHover={{ color: '#4ecdc4' }}>
                Mentions légales
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          className={styles.scrollTop}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowUp />
          </motion.div>
        </motion.button>
      </div>
    </footer>
  )
}