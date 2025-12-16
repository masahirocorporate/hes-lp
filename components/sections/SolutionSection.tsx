'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import Image from 'next/image'

const reasons = [
  { number: '01', title: '世界No.1のバッテリー技術', description: 'スマホ充電器で世界シェアNo.1のAnker。その技術を家庭用蓄電池に。15年以上の耐久性。' },
  { number: '02', title: 'インテリアに馴染むデザイン', description: '住宅に調和するミニマルデザイン。「機械」ではなく「家具」のような存在感。' },
  { number: '03', title: '大手と比べて、圧倒的な価格優位性', description: 'D2Cモデルで中間マージンをカット。同等品質で、従来の蓄電池より大幅に低コスト。' },
  { number: '04', title: '安心の10年保証・サポート体制', description: '日本法人によるサポート。設置から運用まで、長期間の安心をお約束。' },
]

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="solution" darkMode>
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-base-white/60 mb-4">なぜAnkerなのか</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide mb-6 text-base-white">
            Anker SOLIX XJシリーズ
          </h2>
          <p className="text-base-white/80 max-w-2xl mx-auto">
            世界で愛されるAnkerが、家庭用蓄電池に本気で取り組んだ。<br />品質・デザイン・価格、すべてで期待を超える。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="relative aspect-[16/9] mb-12 overflow-hidden bg-base-white/5"
        >
          <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=80" alt="Anker SOLIX XJシリーズ" fill className="object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl md:text-8xl font-sans font-light text-base-white/20">ANKER</p>
              <p className="text-xl md:text-2xl font-sans tracking-widest text-base-white/40">SOLIX XJ SERIES</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
              className="bg-base-white/5 border border-base-white/10 p-6 md:p-8"
            >
              <p className="text-4xl font-sans font-light text-base-white/20 mb-4">{reason.number}</p>
              <h3 className="text-lg font-medium text-base-white mb-3">{reason.title}</h3>
              <p className="text-base-white/70 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
