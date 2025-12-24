'use client'

import { FAQ } from '@/lib/supabase'
import Accordion from './ui/Accordion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface FAQListProps {
  faqs: FAQ[]
}

export default function FAQList({ faqs }: FAQListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">よくある質問</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide">FAQ</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        {faqs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-darkGray">FAQがありません</p>
          </div>
        ) : (
          faqs.map((faq) => (
            <Accordion key={faq.id} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))
        )}
      </motion.div>
    </div>
  )
}

