'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import Image from 'next/image'
import { useTarget } from '../../contexts/TargetContext'

const merits = [
  {
    number: '01', title: '経済的メリット',
    headline: '年間15万円の電気代削減',
    description: '電力会社から買う電気を減らし、光熱費を大幅カット。10年で150万円以上の節約効果。',
    hasSolarHeadline: '年間10万円以上を取り戻す',
    hasSolarDescription: 'FIT終了後の売電損失を自家消費でカバー。10年で100万円以上の経済効果。',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
  },
  {
    number: '02', title: '防災・安心',
    headline: '停電時も、普段通りの生活',
    description: '最大48時間の電力供給。冷蔵庫、エアコン、照明、スマホ充電も問題なし。',
    hasSolarHeadline: '太陽光が停電時にも活きる',
    hasSolarDescription: '蓄電池があれば、太陽光の電気を停電時にも使える。家全体に自動給電。',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
  },
  {
    number: '03', title: '資産価値向上',
    headline: '「標準仕様」で価値ある家に',
    description: '大手HMの90%が採用するZEH基準。売却・賃貸時の資産価値を高めます。',
    hasSolarHeadline: '太陽光＋蓄電池で「完成形」に',
    hasSolarDescription: '太陽光だけでは「半分」。蓄電池で完成し、住宅の価値をさらに高めます。',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  },
  {
    number: '04', title: '環境貢献',
    headline: 'CO2排出ゼロの暮らし',
    description: '太陽光でつくったクリーンエネルギーを無駄なく活用。脱炭素社会に貢献。',
    hasSolarHeadline: '太陽光エネルギーを最大活用',
    hasSolarDescription: '発電した電気を捨てずに活用。環境にも家計にも優しい選択。',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80',
  },
]

export default function MeritSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { target } = useTarget()

  return (
    <SectionWrapper id="merit">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">「標準仕様」が選ばれる4つの理由</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide">
            なぜ、90%の新築が<br />太陽光＋蓄電池なのか。
          </h2>
        </motion.div>

        <div className="space-y-12">
          {merits.map((merit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`relative aspect-[4/3] bg-base-lightGray overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image src={merit.image} alt={merit.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-accent-black text-base-white px-3 py-1 text-xs">{merit.number}</div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} p-6 md:p-8`}>
                <p className="text-xs font-sans tracking-widest text-text-darkGray mb-2">{merit.title}</p>
                <h3 className="text-2xl md:text-3xl font-sans font-normal mb-4">
                  {target === 'has-solar' ? merit.hasSolarHeadline : merit.headline}
                </h3>
                <p className="text-text-darkGray leading-relaxed">
                  {target === 'has-solar' ? merit.hasSolarDescription : merit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
