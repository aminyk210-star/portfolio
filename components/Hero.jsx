'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDownload,
  FaRocket,
  FaCode,
  FaBolt,
  FaCrown
} from 'react-icons/fa'
import { SiNextdotjs, SiReact, SiLaravel, SiTypescript } from 'react-icons/si'
import styles from './Hero.module.css'

// Deterministic particle data to avoid hydration mismatch
const heroParticles = Array.from({ length: 80 }, (_, i) => {
  const row = i % 10
  const col = Math.floor(i / 10)
  const top = 5 + row * 9      // 5% -> ~95%
  const left = 5 + col * 12    // spread horizontally
  const size = 2 + (i % 5)     // 2px–6px
  const duration = 6 + (i % 4) // 6s–9s
  const delay = (i % 10) * 0.3 // 0–2.7s
  const colors = ['#ff6b6b', '#4ecdc4', '#667eea']
  const color = colors[i % colors.length]
  const direction = i % 2 === 0 ? 40 : -40

  return { top, left, size, duration, delay, color, direction }
})

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
      
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Custom Cursor */}
      <motion.div 
        className={styles.cursor}
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
          scale: [1, 1.5, 1],
        }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
      />

      {/* 3D Rotating Background */}
      <div className={styles.background3d}>
        <motion.div 
          className={styles.cube}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={`${styles.face} ${styles.front}`} />
          <div className={`${styles.face} ${styles.back}`} />
          <div className={`${styles.face} ${styles.right}`} />
          <div className={`${styles.face} ${styles.left}`} />
          <div className={`${styles.face} ${styles.top}`} />
          <div className={`${styles.face} ${styles.bottom}`} />
        </motion.div>
      </div>

      {/* Floating Particles System */}
      <div className={styles.particleSystem}>
        {heroParticles.map((p, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, p.direction, 0],
              scale: [1, 1.5, 1],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Animated Grid Lines */}
      <div className={styles.gridLines}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className={styles.gridLineHorizontal}
            style={{ top: `${i * 5}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear"
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className={styles.gridLineVertical}
            style={{ left: `${i * 5}%` }}
            animate={{
              y: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        className={styles.orb1}
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className={styles.orb2}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -150, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className={styles.orb3}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 200, 0],
          y: [0, 200, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content with 3D Parallax */}
      <motion.div 
        className={styles.container}
        style={{ 
          y,
          opacity,
          scale,
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
      >
        {/* Left Content */}
        <motion.div 
          className={styles.left}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Badge */}
          <motion.div 
            className={styles.badge}
            animate={{
              boxShadow: [
                '0 0 20px #4ecdc4',
                '0 0 40px #ff6b6b',
                '0 0 20px #4ecdc4',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaBolt className={styles.badgeIcon} />
            <span>Available for work</span>
          </motion.div>

          {/* Title with glitch effect */}
          <motion.h1 
            className={styles.title}
            animate={{
              textShadow: [
                '0 0 10px #4ecdc4',
                '0 0 20px #ff6b6b',
                '0 0 30px #4ecdc4',
                '0 0 40px #667eea',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className={styles.titleLine}>BOUHAMZA</span>
            <span className={styles.titleGradient}>MOHAMED ELAMINE</span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div className={styles.subtitleContainer}>
            <motion.span 
              className={styles.subtitle}
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Full Stack Developer
            </motion.span>
            <motion.div 
              className={styles.techIcons}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <SiNextdotjs />
              <SiReact />
              <SiLaravel />
              <SiTypescript />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p className={styles.description}>
            <motion.span
              animate={{
                color: ['#fff', '#4ecdc4', '#fff'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦
            </motion.span>
            {' '}Crafting digital experiences with cutting-edge technologies
            <motion.span
              animate={{
                color: ['#fff', '#ff6b6b', '#fff'],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              {' '}✦
            </motion.span>
          </motion.p>

          {/* Buttons with hover 3D effect */}
          <motion.div className={styles.buttons}>
            <Link href="/projects">
              <motion.div 
                className={styles.primaryBtn}
                whileHover={{ 
                  scale: 1.1,
                  rotateX: 10,
                  rotateY: 10,
                  boxShadow: '0 20px 40px rgba(78, 205, 196, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className={styles.btnIcon} />
                <span>Explore Projects</span>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div 
                className={styles.secondaryBtn}
                whileHover={{ 
                  scale: 1.1,
                  rotateX: -10,
                  rotateY: -10,
                  borderColor: '#4ecdc4',
                  boxShadow: '0 20px 40px rgba(255, 107, 107, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Me</span>
              </motion.div>
            </Link>

            <motion.a 
              href="/cv.pdf" 
              download
              className={styles.downloadBtn}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                backgroundColor: '#4ecdc4'
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaDownload />
            </motion.a>
          </motion.div>

          {/* Stats with counter animation */}
          <motion.div className={styles.stats}>
            {[
              { number: '50+', label: 'Projects' },
              { number: '30+', label: 'Clients' },
              { number: '5+', label: 'Years' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.span 
                  className={styles.statNumber}
                  animate={{
                    textShadow: [
                      '0 0 10px #4ecdc4',
                      '0 0 20px #ff6b6b',
                      '0 0 10px #4ecdc4',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {stat.number}
                </motion.span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image with 3D effects */}
        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 10,
            rotateX: 5,
          }}
        >
          {/* Image Container */}
          <motion.div 
            className={styles.imageContainer}
            animate={{
              boxShadow: [
                '0 0 30px #4ecdc4',
                '0 0 60px #ff6b6b',
                '0 0 90px #667eea',
                '0 0 60px #4ecdc4',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Floating tech icons around image */}
            <motion.div 
              className={styles.floatingIcon1}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                rotate: [0, 360],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <SiNextdotjs />
            </motion.div>
            <motion.div 
              className={styles.floatingIcon2}
              animate={{
                y: [0, 30, 0],
                x: [0, -20, 0],
                rotate: [0, -360],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <SiReact />
            </motion.div>
            <motion.div 
              className={styles.floatingIcon3}
              animate={{
                y: [0, -20, 0],
                x: [0, -30, 0],
                rotate: [0, 360],
              }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <SiLaravel />
            </motion.div>

            <Image
              src="/images/me.png"
              alt="Amine"
              width={600}
              height={700}
              className={styles.image}
              priority
            />
          </motion.div>

          {/* Social Links */}
          <motion.div className={styles.socialLinks}>
            {[
              { icon: <FaGithub />, url: 'https://github.com/Bouhamza4', color: '#333' },
              { icon: <FaLinkedin />, url: 'https://linkedin.com/in/mohamed-elamine-bouhamza-9b5510244', color: '#0077b5' },
              { icon: <FaTwitter />, url: 'https://twitter.com', color: '#1da1f2' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ '--social-color': social.color }}
                whileHover={{ 
                  y: -10,
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: social.color
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>Scroll</span>
        <motion.div 
          className={styles.scrollLine}
          animate={{
            height: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Floating "HIRE ME" badge */}
      <motion.div 
        className={styles.hireBadge}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaCrown />
        <span>HIRE ME</span>
      </motion.div>
    </section>
  )
}