'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaLaravel, 
  FaJs, 
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaMicrosoft
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
  SiPhp,
  SiExpress,
  SiGithub,
  SiOwasp,
  SiJira,
  SiUml
} from 'react-icons/si'
import styles from './Skills.module.css'

const skillsData = [
  {
    category: "Frontend",
    icon: <FaReact />,
    color: "#61dafb",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 90, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "#ffffff" },
      { name: "JavaScript", icon: <FaJs />, level: 90, color: "#f7df1e" },
      { name: "TypeScript", icon: <SiTypescript />, level: 75, color: "#3178c6" },
      { name: "Redux Toolkit", icon: <SiRedux />, level: 80, color: "#764abc" },
      { name: "HTML5/CSS3", icon: <FaReact />, level: 90, color: "#e34c26" },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 85, color: "#7952b3" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, color: "#38bdf8" },
      { name: "jQuery", icon: <SiJquery />, level: 75, color: "#0769ad" },
    ]
  },
  {
    category: "Backend",
    icon: <FaNodeJs />,
    color: "#68a063",
    skills: [
      { name: "Laravel", icon: <FaLaravel />, level: 85, color: "#ff2d20" },
      { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#68a063" },
      { name: "Express.js", icon: <SiExpress />, level: 80, color: "#ffffff" },
      { name: "PHP", icon: <SiPhp />, level: 85, color: "#777bb4" },
      { name: "Python", icon: <FaPython />, level: 75, color: "#3776ab" },
      { name: "Django", icon: <SiDjango />, level: 70, color: "#092e20" },
    ]
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    color: "#4479a1",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 85, color: "#4479a1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 80, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "#47A248" },
      { name: "SQL", icon: <FaDatabase />, level: 85, color: "#f29111" },
    ]
  },
  {
    category: "DevOps & Tools",
    icon: <FaGitAlt />,
    color: "#f34f29",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 90, color: "#f34f29" },
      { name: "GitHub/GitLab", icon: <SiGithub />, level: 90, color: "#ffffff" },
      { name: "Docker", icon: <FaDocker />, level: 70, color: "#2496ed" },
      { name: "Azure", icon: <FaMicrosoft />, level: 65, color: "#0078d4" },
      { name: "Jira", icon: <SiJira />, level: 80, color: "#0052cc" },
      { name: "VS Code", icon: <FaMicrosoft />, level: 90, color: "#007acc" },
      { name: "Figma", icon: <FaFigma />, level: 75, color: "#f24e1e" },
    ]
  },
  {
    category: "Methodologies & Others",
    icon: <SiUml />,
    color: "#6b5b95",
    skills: [
      { name: "UML Diagrams", icon: <SiUml />, level: 80, color: "#6b5b95" },
      { name: "PERT/MPM/GANTT", icon: <SiUml />, level: 75, color: "#88b04b" },
      { name: "Excel/Word/Access", icon: <FaMicrosoft />, level: 85, color: "#217346" },
      { name: "OWASP Security", icon: <SiOwasp />, level: 70, color: "#000000" },
      { name: "Technical Support", icon: <FaMicrosoft />, level: 85, color: "#ffb347" },
    ]
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.skills}>
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionBadge}>My Expertise</span>
          <h2 className={styles.title}>
            Technical{' '}
            <span className={styles.gradientText}>
              Skills
            </span>
          </h2>
          <p className={styles.subtitle}>
            A comprehensive overview of my technical stack and competencies
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className={styles.categoryHeader}
                style={{ borderBottomColor: category.color }}
              >
                <div 
                  className={styles.categoryIcon}
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: (categoryIndex * 0.15) + (skillIndex * 0.05) 
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={styles.skillInfo}>
                      <div className={styles.skillName}>
                        <span 
                          className={styles.skillIcon}
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </span>
                        <span>{skill.name}</span>
                      </div>
                      <span 
                        className={styles.skillLevel}
                        style={{ color: skill.color }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className={styles.progressBarContainer}>
                      <motion.div 
                        className={styles.progressBar}
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                          width: isInView ? `${skill.level}%` : '0%'
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: (categoryIndex * 0.15) + (skillIndex * 0.05),
                          ease: "easeOut"
                        }}
                      >
                        <motion.div 
                          className={styles.progressGlow}
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: (categoryIndex * 0.15) + (skillIndex * 0.05)
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        <div className={styles.particles}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
