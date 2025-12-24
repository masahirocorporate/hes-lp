'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import CTAButton from './CTAButton'
import { useTarget } from '../contexts/TargetContext'

const topPageNavItems = [
  { href: '#social-change', label: '住宅の常識', isAnchor: true },
  { href: '#standard', label: '標準仕様とは', isAnchor: true },
  { href: '#simulation', label: 'シミュレーション', isAnchor: true },
  { href: '#solution', label: 'Ankerの強み', isAnchor: true },
  { href: '#subsidy', label: '補助金', isAnchor: true },
  { href: '#faq', label: 'FAQ', isAnchor: true },
]

const otherPageNavItems = [
  { href: '/products', label: '製品一覧', isAnchor: false },
  { href: '/articles', label: '記事一覧', isAnchor: false },
  { href: '/cases', label: 'お客様の事例', isAnchor: false },
  { href: '/faq', label: 'よくある質問', isAnchor: false },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isTopPage = pathname === '/'
  // PC版では常に第2階層へのリンクを表示、モバイルではページによって切り替え
  const navItems = otherPageNavItems
  const { target } = useTarget()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsMobileMenuOpen(false)
    if (isAnchor) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
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
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-sans font-medium tracking-wide">
                ANKER SOLIX
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                item.isAnchor ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, true)}
                    className="text-xs tracking-wide text-text-darkGray hover:text-accent-black transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs tracking-wide text-text-darkGray hover:text-accent-black transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <CTAButton href="#closing" variant="primary" size="small">
                {target === 'has-solar' ? '蓄電池を診断' : '無料診断'}
              </CTAButton>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 z-50 relative flex-shrink-0 rounded-md hover:bg-base-lightGray/50 transition-colors"
              aria-label="メニュー"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span className={`block h-0.5 w-full bg-accent-black transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} style={{ transformOrigin: 'center' }} />
                <span className={`block h-0.5 w-full bg-accent-black transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`block h-0.5 w-full bg-accent-black transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} style={{ transformOrigin: 'center' }} />
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
            className="fixed inset-0 z-40 bg-base-white lg:hidden overflow-y-auto"
          >
            <div className="pt-24 px-6 pb-8">
              {isTopPage && (
                <>
                  <div className="mb-6">
                    <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">このページ内</p>
                    <div className="space-y-2">
                      {topPageNavItems.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => handleNavClick(item.href, true)}
                          className="block w-full text-left text-lg py-2 text-text-black hover:text-accent-black transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-base-lightGray pt-6 mb-6">
                    <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">ページ一覧</p>
                    <div className="space-y-2">
                      {otherPageNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block w-full text-left text-lg py-2 text-text-black hover:text-accent-black transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {!isTopPage && (
                <div className="space-y-4">
                  {navItems.map((item) => (
                    item.isAnchor ? (
                      <button
                        key={item.href}
                        onClick={() => handleNavClick(item.href, true)}
                        className="block w-full text-left text-xl py-3 border-b border-base-lightGray text-text-black hover:text-accent-black transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-left text-xl py-3 border-b border-base-lightGray text-text-black hover:text-accent-black transition-colors"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
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
