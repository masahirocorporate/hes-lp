'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CTAButton from './CTAButton'
import { useTarget } from '../contexts/TargetContext'

const navItems = [
  { href: '#social-change', label: '住宅の常識' },
  { href: '#standard', label: '標準仕様とは' },
  { href: '#simulation', label: 'シミュレーション' },
  { href: '#solution', label: 'Ankerの強み' },
  { href: '#subsidy', label: '補助金' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { target } = useTarget()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-base-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-sans font-medium tracking-wide">
                ANKER SOLIX
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-xs tracking-wide text-text-darkGray hover:text-accent-black transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <CTAButton href="#closing" variant="primary" size="small">
                {target === 'has-solar' ? '蓄電池を診断' : '無料診断'}
              </CTAButton>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="メニュー"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-accent-black transition-transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
                <span className={`block h-0.5 bg-accent-black transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block h-0.5 bg-accent-black transition-transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-base-white lg:hidden"
          >
            <div className="pt-24 px-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-xl py-3 border-b border-base-lightGray text-text-black hover:text-accent-black transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton 
                  href="#closing" 
                  variant="primary" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {target === 'has-solar' ? '蓄電池を無料診断' : '無料診断する'}
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
