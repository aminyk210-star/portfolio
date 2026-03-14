'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMoon,
  FaSun,
  FaDownload
} from 'react-icons/fa'
import { SiNextdotjs, SiReact, SiLaravel } from 'react-icons/si'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [activeLink, setActiveLink] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    setActiveLink(pathname)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Accueil', path: '/', icon: <FaHome />, color: '#ff6b6b' },
    { name: 'À propos', path: '/about', icon: <FaUser />, color: '#4ecdc4' },
    { name: 'Projets', path: '/projects', icon: <FaCode />, color: '#ffb347' },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope />, color: '#9b59b6' }
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Bouhamza4', label: 'GitHub', color: '#fff' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/mohamed-elamine-bouhamza-9b5510244', label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter', color: '#1da1f2' }
  ]

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark')
  }

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        <div className={styles.container}>
          {/* Logo avec animation 3D */}
          <Link href="/" className={styles.logoLink}>
            <motion.div
              className={styles.logo}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={styles.logoGlow}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className={styles.logoPrefix}>&lt;</span>
              <span className={styles.logoName}>Amine</span>
              <span className={styles.logoDev}>.dev</span>
              <span className={styles.logoSuffix}>/&gt;</span>
            </motion.div>
          </Link>

          {/* Desktop Menu avec effets avancés */}
          <div className={styles.desktopMenu}>
            {navLinks.map((link) => {
              const isActive = activeLink === link.path
              return (
                <Link key={link.path} href={link.path} className={styles.navLinkWrapper}>
                  <motion.div
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    whileHover={{ y: -3 }}
                    onHoverStart={(e) => {
                      const target = e.currentTarget
                      if (!target) return
                      const rect = target.getBoundingClientRect()
                      const x = e.clientX - rect.left
                      const y = e.clientY - rect.top
                      target.style.setProperty('--x', `${x}px`)
                      target.style.setProperty('--y', `${y}px`)
                    }}
                  >
                    <motion.span
                      className={styles.navIcon}
                      animate={isActive ? {
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {link.icon}
                    </motion.span>
                    <span className={styles.navName}>{link.name}</span>
                    
                    {isActive && (
                      <motion.div
                        className={styles.activeIndicator}
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        <div className={styles.indicatorDot} style={{ backgroundColor: link.color }} />
                        <div className={styles.indicatorLine} style={{ background: `linear-gradient(90deg, ${link.color}, transparent)` }} />
                      </motion.div>
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className={styles.hoverEffect}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              )
            })}

            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  style={{ '--social-color': social.color }}
                  whileHover={{ y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    {social.icon}
                  </motion.span>
                  <span className={styles.socialTooltip}>{social.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/cv.pdf"
              download
              className={styles.cvButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className={styles.cvButtonGlow}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <FaDownload className={styles.cvIcon} />
              <span>CV</span>
            </motion.a>

            {/* Theme Toggle */}
            <motion.button
              className={styles.themeToggle}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {isDark ? <FaMoon /> : <FaSun />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`${styles.mobileMenuBtn} ${isOpen ? styles.open : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.hamburger}>
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

          {/* Mobile Menu Overlay avec animations avancées */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Floating particles */}
              <div className={styles.mobileParticles}>
                {Array.from({ length: 10 }, (_, i) => {
                  const row = i % 5
                  const col = Math.floor(i / 5)
                  const top = 15 + row * 15
                  const left = 10 + col * 35 + row * 2

                  return (
                    <motion.div
                      key={i}
                      className={styles.particle}
                      style={{
                        top: `${top}%`,
                        left: `${left}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, i % 2 === 0 ? 20 : -20, 0],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  )
                })}
              </div>

              <div className={styles.mobileContent}>
                {/* Mobile Logo */}
                <motion.div
                  className={styles.mobileLogo}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className={styles.mobileLogoText}>Amine.dev</span>
                  <div className={styles.mobileLogoGlow} />
                </motion.div>

                {/* Mobile Navigation */}
                <div className={styles.mobileNav}>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={styles.mobileNavLink}
                      >
                        <motion.div
                          className={styles.mobileNavItem}
                          whileHover={{ x: 10 }}
                          style={{ '--link-color': link.color }}
                        >
                          <span className={styles.mobileNavIcon}>{link.icon}</span>
                          <span className={styles.mobileNavName}>{link.name}</span>
                          <motion.div
                            className={styles.mobileNavGlow}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Social Links */}
                <motion.div
                  className={styles.mobileSocial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mobileSocialLink}
                      style={{ '--social-color': social.color }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Mobile CV Button */}
                <motion.a
                  href="/cv.pdf"
                  download
                  className={styles.mobileCvButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <FaDownload />
                  <span>Télécharger CV</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}