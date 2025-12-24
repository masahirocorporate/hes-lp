'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Case } from '@/lib/supabase'
import { motion } from 'framer-motion'

interface CaseCardProps {
  caseItem: Case
  index?: number
}

export default function CaseCard({ caseItem, index = 0 }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/cases/${caseItem.slug}`} className="block group">
        <div className="bg-base-white border border-base-lightGray hover:border-accent-black transition-all duration-300 overflow-hidden">
          {caseItem.image && (
            <div className="relative w-full h-48 md:h-64 bg-base-lightGray overflow-hidden">
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-lg md:text-xl font-sans font-medium mb-2 group-hover:text-accent-black transition-colors">
              {caseItem.title}
            </h3>
            <p className="text-sm text-text-darkGray mb-4 line-clamp-3">
              {caseItem.content.substring(0, 150)}...
            </p>
            {caseItem.results && (
              <div className="text-xs text-accent-black font-medium">
                詳細を見る →
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

