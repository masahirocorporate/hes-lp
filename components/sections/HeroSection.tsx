'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAButton from '../CTAButton'
import SectionWrapper from '../SectionWrapper'
import { useTarget } from '../../contexts/TargetContext'

const defaultContent = {
  badge: '2025年、住宅の常識が変わった',
  headline: '新築の90%は、もう導入している。',
  subheadline: 'あなたの家は、まだですか？',
  description: '大手ハウスメーカーの新築、90%が太陽光＋蓄電池。省エネ基準は義務化へ。もう「特別なもの」じゃない。これからの家の「標準装備」です。',
}

const targetHero = {
  'no-solar': {
    badge: 'これから導入をご検討の方へ',
    headline: '新築の90%は、もう導入している。',
    subheadline: 'あなたの家は、まだですか？',
    description: '太陽光＋蓄電池は、もう「特別なもの」じゃない。大手ハウスメーカーのZEH率は90%超。これからの家の「標準装備」を、あなたの家にも。',
  },
  'has-solar': {
    badge: 'すでに太陽光をお持ちの方へ',
    headline: '太陽光だけでは、もう古い。',
    subheadline: '蓄電池で「標準仕様」に。',
    description: 'FIT終了で売電収入は激減。太陽光＋蓄電池が新築の標準になった今、蓄電池なしでは「片手落ち」のスマートハウスです。',
  },
}

export default function HeroSection() {
  const { target, isSelected } = useTarget()
  const content = target ? targetHero[target] : defaultContent

  return (
    <SectionWrapper id="hero" className="relative">
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=4000&q=80"
            alt="モダンな住宅"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="inline-block px-4 py-2 bg-accent-black text-base-white text-xs tracking-wider mb-6"
          >
            {content.badge}
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-normal tracking-wide mb-4 leading-tight">
            {content.headline}
          </h1>
          
          <p className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal tracking-wide mb-8 text-text-darkGray">
            {content.subheadline}
          </p>

          <p className="text-base md:text-lg text-text-darkGray mb-10 leading-relaxed max-w-2xl mx-auto">
            {content.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mb-10"
          >
            <div className="text-center bg-base-white/80 backdrop-blur px-6 py-4">
              <p className="text-3xl md:text-4xl font-sans font-medium text-accent-black">90%</p>
              <p className="text-xs text-text-darkGray mt-1">大手HMの新築ZEH率</p>
            </div>
            <div className="text-center bg-base-white/80 backdrop-blur px-6 py-4">
              <p className="text-3xl md:text-4xl font-sans font-medium text-accent-black">年15万円</p>
              <p className="text-xs text-text-darkGray mt-1">電気代削減効果</p>
            </div>
            <div className="text-center bg-base-white/80 backdrop-blur px-6 py-4">
              <p className="text-3xl md:text-4xl font-sans font-medium text-accent-black">最大120万円</p>
              <p className="text-xs text-text-darkGray mt-1">補助金で軽減</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            <CTAButton href="#closing" variant="primary">
              【無料】あなたの家を「標準仕様」にする費用を診断
            </CTAButton>
            <p className="text-sm text-text-darkGray">
              3つの質問に答えるだけ・1分で完了・しつこい営業なし
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-xs text-text-darkGray mb-2">
            {isSelected ? '詳しく見る' : 'あなたの状況を選ぶ'}
          </p>
          <div className="w-px h-12 bg-gradient-to-b from-text-darkGray/50 to-transparent mx-auto" />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
