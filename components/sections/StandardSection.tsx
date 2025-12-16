'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import Image from 'next/image'
import { useTarget } from '../../contexts/TargetContext'

const benefitsNoSolar = [
  { number: '01', title: '昼：太陽光で発電', description: '電気代を払わずに家電を動かす' },
  { number: '02', title: '余った電気：蓄電池に貯める', description: '夜や雨の日のために貯蓄' },
  { number: '03', title: '夜：蓄電池から使う', description: '電力会社から買わない生活' },
  { number: '04', title: '停電時：自動で給電', description: '家全体に電気を供給' },
]

const benefitsHasSolar = [
  { number: '01', title: '発電した電気：売らずに貯める', description: '7円で売るより、30円分を節約' },
  { number: '02', title: '夜間：蓄電池から使う', description: '買電を減らして電気代削減' },
  { number: '03', title: '停電時：太陽光が活きる', description: '蓄電池経由で家全体に給電' },
  { number: '04', title: '資産価値：標準仕様に', description: '太陽光+蓄電池でZEH基準に' },
]

export default function StandardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { target } = useTarget()
  const benefits = target === 'has-solar' ? benefitsHasSolar : benefitsNoSolar

  return (
    <SectionWrapper id="standard">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">
            あなたの家も「標準仕様」に
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide mb-6">
            {target === 'has-solar' ? <>蓄電池で、<br />太陽光の本領発揮。</> : <>太陽光＋蓄電池で、<br />電気を「買わない」暮らしへ。</>}
          </h2>
          <p className="text-text-darkGray max-w-2xl mx-auto">
            {target === 'has-solar' 
              ? 'せっかくの太陽光を、安く売るだけではもったいない。蓄電池で「自家消費」に切り替えれば、年間10万円以上の差が生まれます。'
              : '太陽光で発電し、蓄電池で貯めて使う。電力会社に頼らない、新しいエネルギーの形。大手ハウスメーカーが選ぶ「標準装備」を、あなたの家にも。'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index, ease: 'easeOut' }}
              className="relative bg-base-lightGray p-6 text-center"
            >
              {index < benefits.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-text-darkGray/30">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-text-darkGray/30" />
                </div>
              )}
              <p className="text-2xl font-sans font-light text-accent-black/30 mb-3">{item.number}</p>
              <h3 className="text-sm font-medium mb-2">{item.title}</h3>
              <p className="text-xs text-text-darkGray">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="relative aspect-[16/9] bg-base-lightGray overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=80"
            alt="ソーラーパネルと蓄電池のある住宅"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-base-white text-lg md:text-xl font-medium mb-2">
              {target === 'has-solar' ? '太陽光＋蓄電池で「ZEH」基準へ' : '電気の「自給自足」を始める'}
            </p>
            <p className="text-base-white/80 text-sm">
              {target === 'has-solar'
                ? '蓄電池を追加するだけで、住宅のエネルギー効率が劇的に向上します。'
                : 'Anker SOLIX XJシリーズなら、戸建て住宅に最適な容量で、導入も簡単。'}
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
