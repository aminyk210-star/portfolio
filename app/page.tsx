'use client'

import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import FeaturedProjects from '@/components/FeaturedProjects'
import ContactCTA from '@/components/ContactCTA'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  )
}