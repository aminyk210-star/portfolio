'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { 
  FaUser, 
  FaCode, 
  FaLaptopCode, 
  FaFileDownload,
  FaReact, 
  FaNodeJs, 
  FaLaravel, 
  FaJs, 
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaMicrosoft,
  FaPhp,
  FaWordpress,
  FaWrench,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaHeart,
  FaCamera,
  FaSwimmer,
  FaLanguage,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaTools,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaMobile,
  FaGlobe,
  FaChartLine,
  FaCogs,
  FaUserTie,
  FaUsers,
  FaClock,
  FaCalendarAlt,
  FaAsterisk
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiRedux,
  SiJquery,
  SiBootstrap,
  SiExpress,
  SiGitlab,
  SiJira,
  SiUml
} from 'react-icons/si'
import { MdDeveloperMode, MdOutlineDesignServices, MdOutlineSpeed, MdOutlineSecurity } from 'react-icons/md'
import { GiBrain, GiLightBulb, GiTeamIdea, GiClockwork, GiGears, GiCarWheel } from 'react-icons/gi'
import { TbBrandReactNative, TbDeviceAnalytics, TbSeo, TbWorldWww } from 'react-icons/tb'
import styles from './AboutPage.module.css'

// Données personnelles
const personalInfo = {
  name: "BOUHAMZA MOHAMED ELAMINE",
  title: "Développeur Web Full Stack",
  location: "Mesnana, Tanger",
  email: "bouhamzamohammed557@gmail.com",
  phone: "0624366802",
  linkedin: "https://www.linkedin.com/in/mohamed-elamine-bouhamza-9b5510244",
  github: "https://github.com/Bouhamza4",
  profile: "Développeur web full-stack passionné, spécialisé dans la conception et développement d'applications web modernes, performantes et orientées expérience utilisateur. Maîtrise de Laravel, React.js et WordPress, avec une solide compréhension de l'UX/UI, de l'e-commerce et de l'optimisation des performances."
}

// Expériences professionnelles
const experiences = [
  {
    period: "Sep 2024 - Présent",
    title: "Développeur Web Full-Stack — Freelance",
    description: "Conception et développement de sites web et plateformes e-commerce",
    icon: <FaLaptopCode />,
    color: "#ff6b6b",
    achievements: [
      "Personnalisation WordPress & WooCommerce selon les besoins clients",
      "Optimisation UX/UI, performance, SEO et compatibilité mobile",
      "Collaboration directe avec les clients, analyse des besoins et livraison de solutions sur mesure"
    ]
  },
  {
    period: "Mars 2025 - Juin 2025",
    title: "Développeur Web Full-Stack – Commune Territoriale de Rouadi (Stage)",
    description: "Application de gestion des demandes administratives",
    icon: <FaUserTie />,
    color: "#4ecdc4",
    achievements: [
      "Authentification sécurisée (Laravel Sanctum) et gestion des rôles",
      "Réservations en ligne, dashboards et paiements Stripe/PayPal"
    ]
  },
  {
    period: "Sep 2025 - Nov 2025",
    title: "Développeur Web – Tanger Team Consulting",
    description: "Développement d'un site vitrine orienté SEO et UX",
    icon: <FaCode />,
    color: "#ffb347",
    achievements: [
      "Conception de pages modernes et responsive",
      "Optimisation SEO on-page et référencement local (Google My Business)",
      "Sécurisation des formulaires et optimisation des performances"
    ]
  },
  {
    period: "Oct 2023 - Dec 2023",
    title: "Mécanicien – Atelier de mécanique",
    description: "Diagnostic et réparation mécanique",
    icon: <FaWrench />,
    color: "#9b59b6",
    achievements: [
      "Diagnostic des pannes mécaniques",
      "Entretien et maintenance préventive des véhicules",
      "Réparation des systèmes mécaniques",
      "Utilisation d'outils et équipements techniques",
      "Respect des normes de sécurité et des procédures de travail"
    ]
  },
  {
    period: "Jun 2020 - Sep 2025 (Saisonnier)",
    title: "Emplois Divers – Restauration & Service",
    description: "Service client et gestion des commandes",
    icon: <FaUsers />,
    color: "#00bcd4",
    achievements: [
      "Service client et gestion des commandes",
      "Travail sous pression et respect des standards qualité"
    ]
  }
]

// Diplômes
const diplomas = [
  {
    title: "Diplôme de technicien spécialisé en développement digital web full-stack",
    institution: "ISTA Al Hoceima",
    period: "Sep 2023 - Sep 2025",
    icon: <FaGraduationCap />
  },
  {
    title: "Baccalauréat libre en sciences physique-chimie",
    institution: "",
    period: "Sep 2023 - Jun 2024",
    icon: <FaAward />
  },
  {
    title: "Baccalauréat en SVT",
    institution: "Lycée Rouadi",
    period: "Sep 2022 - Jun 2023",
    icon: <FaAward />
  }
]

// Compétences techniques
const technicalSkills = {
  backend: [
    { name: "Laravel", icon: <FaLaravel />, level: 90, color: "#ff2d20" },
    { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "#68a063" },
    { name: "Express.js", icon: <SiExpress />, level: 85, color: "#ffffff" },
    { name: "PHP", icon: <FaPhp />, level: 90, color: "#777bb4" },
    { name: "Python", icon: <FaPython />, level: 80, color: "#3776ab" },
    { name: "Django", icon: <SiDjango />, level: 75, color: "#092e20" }
  ],
  frontend: [
    { name: "React.js", icon: <FaReact />, level: 90, color: "#61dafb" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "#ffffff" },
    { name: "Redux Toolkit", icon: <SiRedux />, level: 85, color: "#764abc" },
    { name: "JavaScript", icon: <FaJs />, level: 90, color: "#f7df1e" },
    { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "#3178c6" },
    { name: "HTML5/CSS3", icon: <FaCode />, level: 95, color: "#e34c26" },
    { name: "Bootstrap", icon: <SiBootstrap />, level: 90, color: "#7952b3" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, color: "#38bdf8" },
    { name: "jQuery", icon: <SiJquery />, level: 80, color: "#0769ad" }
  ],
  databases: [
    { name: "MySQL", icon: <SiMysql />, level: 90, color: "#4479a1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 85, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "#47A248" },
    { name: "SQL", icon: <FaDatabase />, level: 90, color: "#f29111" }
  ],
  tools: [
    { name: "Git/GitHub", icon: <FaGitAlt />, level: 95, color: "#f34f29" },
    { name: "GitLab", icon: <SiGitlab />, level: 85, color: "#fc6d26" },
    { name: "Docker", icon: <FaDocker />, level: 75, color: "#2496ed" },
  { name: "Azure", icon: <FaMicrosoft />, level: 70, color: "#0078d4" },
    { name: "Figma", icon: <FaFigma />, level: 80, color: "#f24e1e" },
    { name: "UML", icon: <SiUml />, level: 85, color: "#6b5b95" },
    { name: "Jira", icon: <SiJira />, level: 80, color: "#0052cc" },
    { name: "VS Code", icon: <FaMicrosoft />, level: 95, color: "#007acc" }
  ],
  methodologies: [
    { name: "Diagrammes PERT/MPM/GANTT", level: 80, color: "#88b04b" },
    { name: "Excel", level: 90, color: "#217346" },
    { name: "Word", level: 95, color: "#2b5797" },
    { name: "PowerPoint", level: 85, color: "#b7472a" },
    { name: "Access", level: 75, color: "#a4373a" }
  ]
}

// Soft Skills
const softSkills = [
  { name: "Communication efficace", icon: <FaUsers />, color: "#ff6b6b" },
  { name: "Organisation & gestion du temps", icon: <FaClock />, color: "#4ecdc4" },
  { name: "Adaptabilité", icon: <GiBrain />, color: "#ffb347" },
  { name: "Esprit d'équipe", icon: <GiTeamIdea />, color: "#9b59b6" },
  { name: "Gestion du stress", icon: <GiLightBulb />, color: "#00bcd4" }
]

// Langues
const languages = [
  { name: "Arabe", level: 100, flag: "🇲🇦" },
  { name: "Français", level: 85, flag: "🇫🇷" },
  { name: "Anglais", level: 80, flag: "🇬🇧" }
]

// Centres d'intérêt
const interests = [
  { name: "Technologie", icon: <FaCode />, color: "#ff6b6b" },
  { name: "Innovation", icon: <FaRocket />, color: "#4ecdc4" },
  { name: "Leadership", icon: <FaUserTie />, color: "#ffb347" },
  { name: "Photographie", icon: <FaCamera />, color: "#9b59b6" },
  { name: "Natation", icon: <FaSwimmer />, color: "#00bcd4" },
  { name: "Mécanique", icon: <FaWrench />, color: "#95a5a6" }
]

// Deterministic floating icon layout to keep SSR and client render in sync
const floatingIconItems = Array.from({ length: 20 }, (_, i) => {
  const row = i % 5
  const col = Math.floor(i / 5)
  return {
    top: 8 + row * 18 + col * 2,
    left: 6 + col * 22 + row * 3,
    fontSize: 12 + (i % 5) * 4,
    label: i % 3 === 0 ? '<>' : i % 3 === 1 ? '{ }' : '</>',
  }
})

// Component for animated counter
function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = value / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <main className={styles.main}>
      {/* Hero Section avec animations 3D */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrbs}>
            <motion.div 
              className={styles.orb1}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            <motion.div 
              className={styles.orb2}
              animate={{
                scale: [1, 1.4, 1],
                rotate: [360, 180, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div 
              className={styles.orb3}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -180, -360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 25, repeat: Infinity }}
            />
          </div>

          <div className={styles.gridOverlay} />
          
          <div className={styles.floatingIcons}>
            {floatingIconItems.map((item, i) => (
              <motion.div
                key={i}
                className={styles.floatingIcon}
                style={{
                  top: `${item.top}%`,
                  left: `${item.left}%`,
                  fontSize: `${item.fontSize}px`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, i % 2 === 0 ? 20 : -20, 0],
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                {item.label}
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.heroContent}>
          <motion.div
            className={styles.profileCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={styles.profileGlow}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <div className={styles.profileHeader}>
              <motion.div 
                className={styles.avatarWrapper}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className={styles.avatar}>
                  <FaUser />
                </div>
                <motion.div 
                  className={styles.avatarRing}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </motion.div>

              <motion.h1 
                className={styles.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {personalInfo.name}
              </motion.h1>

              <motion.h2 
                className={styles.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {personalInfo.title}
              </motion.h2>

              <motion.div 
                className={styles.contactInfo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt />
                  <span>{personalInfo.location}</span>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope />
                  <span>{personalInfo.email}</span>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone />
                  <span>{personalInfo.phone}</span>
                </div>
              </motion.div>

              <motion.div 
                className={styles.socialLinks}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ y: -5, scale: 1.1 }}
                  style={{ background: '#0077b5' }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ y: -5, scale: 1.1 }}
                  style={{ background: '#333' }}
                >
                  <FaGithub />
                </motion.a>
              </motion.div>
            </div>

            <motion.div 
              className={styles.profileBio}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p>{personalInfo.profile}</p>
            </motion.div>

            <motion.div 
              className={styles.stats}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className={styles.statItem}>
                <motion.div 
                  className={styles.statNumber}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AnimatedCounter value={10} />+
                </motion.div>
                <div className={styles.statLabel}>Projets</div>
              </div>
              <div className={styles.statItem}>
                <motion.div 
                  className={styles.statNumber}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <AnimatedCounter value={5} />+
                </motion.div>
                <div className={styles.statLabel}>Expériences</div>
              </div>
              <div className={styles.statItem}>
                <motion.div 
                  className={styles.statNumber}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <AnimatedCounter value={20} />+
                </motion.div>
                <div className={styles.statLabel}>Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </section>

      {/* Experience Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Parcours <span className={styles.gradientText}>Professionnel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mon expérience à travers les années
          </motion.p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.timelineDot} style={{ background: exp.color }}>
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {exp.icon}
                </motion.div>
              </div>
              
              <div className={styles.timelineContent} style={{ borderColor: exp.color }}>
                <div className={styles.timelinePeriod} style={{ background: exp.color + '20', color: exp.color }}>
                  <FaCalendarAlt /> {exp.period}
                </div>
                <h3>{exp.title}</h3>
                <p className={styles.timelineDesc}>{exp.description}</p>
                <ul className={styles.timelineAchievements}>
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={styles.bullet} style={{ background: exp.color }} />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Diplomas Section */}
      <section className={styles.diplomasSection}>
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Diplômes & <span className={styles.gradientText}>Formations</span>
          </motion.h2>
        </div>

        <div className={styles.diplomasGrid}>
          {diplomas.map((diploma, index) => (
            <motion.div
              key={index}
              className={styles.diplomaCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className={styles.diplomaIcon}>
                {diploma.icon}
              </div>
              <h3>{diploma.title}</h3>
              <p>{diploma.institution}</p>
              <div className={styles.diplomaPeriod}>
                <FaCalendarAlt /> {diploma.period}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Compétences <span className={styles.gradientText}>Techniques</span>
          </motion.h2>
        </div>

        <div className={styles.skillsContainer}>
          {/* Backend Skills */}
          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Backend</h3>
            <div className={styles.skillsGrid}>
              {technicalSkills.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.skillIcon} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frontend Skills */}
          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Frontend</h3>
            <div className={styles.skillsGrid}>
              {technicalSkills.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.skillIcon} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Bases de données</h3>
            <div className={styles.skillsGrid}>
              {technicalSkills.databases.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.skillIcon} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>Outils</h3>
            <div className={styles.skillsGrid}>
              {technicalSkills.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.skillIcon} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          className={styles.softSkillsSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Soft Skills</h3>
          <div className={styles.softSkillsGrid}>
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={styles.softSkillCard}
                style={{ borderColor: skill.color }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.softSkillIcon} style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Languages & Interests */}
      <section className={styles.languagesSection}>
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Langues & <span className={styles.gradientText}>Intérêts</span>
          </motion.h2>
        </div>

        <div className={styles.languagesInterests}>
          <motion.div
            className={styles.languages}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Langues</h3>
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className={styles.languageItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className={styles.languageFlag}>{lang.flag}</span>
                <span className={styles.languageName}>{lang.name}</span>
                <div className={styles.languageBar}>
                  <motion.div
                    className={styles.languageProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className={styles.languageLevel}>{lang.level}%</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.interests}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Centres d'intérêt</h3>
            <div className={styles.interestsGrid}>
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  className={styles.interestItem}
                  style={{ background: `linear-gradient(135deg, ${interest.color}20, transparent)` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.interestIcon} style={{ color: interest.color }}>
                    {interest.icon}
                  </div>
                  <span>{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discutons de votre <span className={styles.gradientText}>projet</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Disponible pour des missions freelance et des opportunités professionnelles
          </motion.p>

          <motion.div
            className={styles.contactButtons}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact" className={styles.primaryButton}>
              <FaEnvelope />
              Me Contacter
            </Link>
            <a 
              href="/cv.pdf" 
              download 
              className={styles.secondaryButton}
            >
              <FaFileDownload />
              Télécharger CV
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
