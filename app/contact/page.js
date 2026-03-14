'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaPaperPlane,
  FaCheck,
  FaSpinner,
  FaUser,
  FaComment,
  FaClock,
  FaCalendarAlt,
  FaDownload,
  FaCopy,
  FaWhatsapp,
  FaTelegram,
  FaDiscord
} from 'react-icons/fa'
import { SiGmail, SiOutlook } from 'react-icons/si'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'bouhamzamohammed557@gmail.com',
      link: 'mailto:bouhamzamohammed557@gmail.com',
      color: '#ea4335',
      bgColor: '#ea433520'
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      value: '+212 624-366802',
      link: 'tel:+212624366802',
      color: '#4ecdc4',
      bgColor: '#4ecdc420'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localisation',
      value: 'Mesnana, Tanger, Maroc',
      link: 'https://maps.google.com/?q=Tanger,Morocco',
      color: '#ffb347',
      bgColor: '#ffb34720'
    },
    {
      icon: <FaClock />,
      title: 'Disponibilité',
      value: 'Lun-Ven, 9h-18h',
      link: null,
      color: '#9b59b6',
      bgColor: '#9b59b620'
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/Bouhamza4',
      color: '#fff',
      bgColor: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mohamed-elamine-bouhamza-9b5510244',
      color: '#fff',
      bgColor: '#0077b5'
    },
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      url: 'https://wa.me/212624366802',
      color: '#fff',
      bgColor: '#25D366'
    },
    {
      icon: <FaTelegram />,
      name: 'Telegram',
      url: 'https://t.me/amine_dev',
      color: '#fff',
      bgColor: '#0088cc'
    }
  ]

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
          
          {/* Floating Icons */}
          <div className={styles.floatingIcons}>
            {[<FaEnvelope />, <FaPhone />, <FaGithub />, <FaLinkedin />, <FaWhatsapp />].map((icon, i) => (
              <motion.div
                key={i}
                className={styles.floatingIcon}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, i % 2 === 0 ? 20 : -20, 0],
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionBadge}>Contactez-moi</span>
            <h1 className={styles.title}>
              Discutons de votre{' '}
              <span className={styles.gradientText}>
                Projet
              </span>
            </h1>
            <p className={styles.subtitle}>
              Vous avez une idée, un projet ou une opportunité ? N'hésitez pas à me contacter.
              Je suis toujours ouvert aux nouvelles collaborations et challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Left Column - Contact Info */}
            <motion.div
              className={styles.infoColumn}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.infoTitle}>
                Informations de <span className={styles.gradientText}>Contact</span>
              </h2>
              
              <p className={styles.infoDescription}>
                Préférez-vous un canal spécifique ? Voici toutes les façons de me joindre.
                Je m'efforce de répondre dans les 24 heures.
              </p>

              {/* Contact Cards */}
              <div className={styles.contactCards}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className={styles.contactCard}
                    style={{ backgroundColor: info.bgColor }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className={styles.contactCardIcon} style={{ color: info.color }}>
                      {info.icon}
                    </div>
                    <div className={styles.contactCardContent}>
                      <span className={styles.contactCardLabel}>{info.title}</span>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className={styles.contactCardValue}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.contactCardValue}>{info.value}</span>
                      )}
                    </div>
                    {info.title === 'Email' && (
                      <motion.button
                        className={styles.copyButton}
                        onClick={() => copyToClipboard(info.value)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaCopy />
                      </motion.button>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <h3>Réseaux Sociaux</h3>
                <div className={styles.socialGrid}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialCard}
                      style={{ backgroundColor: social.bgColor }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className={styles.socialIcon}>{social.icon}</span>
                      <span className={styles.socialName}>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CV Download */}
              <motion.a
                href="/cv.pdf"
                download
                className={styles.cvButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <FaDownload className={styles.cvIcon} />
                <div>
                  <span>Télécharger mon CV</span>
                  <small>PDF - 2.5 MB</small>
                </div>
              </motion.a>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className={styles.formColumn}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>
                  Envoyez-moi un <span className={styles.gradientText}>message</span>
                </h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                  {/* Name Field */}
                  <div className={styles.formGroup}>
                    <label htmlFor="name">
                      <FaUser /> Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className={styles.formInput}
                    />
                  </div>

                  {/* Email Field */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      <FaEnvelope /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@exemple.com"
                      className={styles.formInput}
                    />
                  </div>

                  {/* Subject Field */}
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">
                      <FaComment /> Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Collaboration, projet, opportunité..."
                      className={styles.formInput}
                    />
                  </div>

                  {/* Message Field */}
                  <div className={styles.formGroup}>
                    <label htmlFor="message">
                      <FaPaperPlane /> Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows="5"
                      className={styles.formTextarea}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className={styles.spinner} />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className={styles.sendIcon} />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        className={styles.successMessage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <FaCheck className={styles.successIcon} />
                        <div>
                          <strong>Message envoyé !</strong>
                          <p>Je vous répondrai dans les plus brefs délais.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.mapContainer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104736.20482826449!2d-5.833426977518537!3d35.75986845684667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b886b5d3d8b5d%3A0x8c3e9b2e8f9c3c!2sTanger%2C%20Maroc!5e0!3m2!1sfr!2sfr!4v1635789012345!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className={styles.map}
            />
          </motion.div>
        </div>
      </section>

      {/* Copy Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className={styles.copyNotification}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <FaCheck />
            <span>Email copié dans le presse-papier !</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}