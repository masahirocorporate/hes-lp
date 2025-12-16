'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-text-darkGray/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between gap-4 text-left hover:bg-base-lightGray/50 transition-colors px-2 -mx-2"
      >
        <span className="text-sm font-medium text-accent-black">
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-text-darkGray text-xs"
        >
          ▼
        </motion.span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-text-darkGray leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
