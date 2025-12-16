'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'

const steps = [
  { step: '01', title: '無料診断', description: '3つの質問に答えるだけ。あなたの家の節約額と使える補助金をお伝えします。', duration: '約1分' },
  { step: '02', title: '現地調査', description: '専門スタッフがご自宅を訪問。設置場所の確認と詳細な見積もりを作成します。', duration: '約1時間' },
  { step: '03', title: 'プランご提案', description: '最適な容量・設置方法をご提案。補助金申請のサポートも行います。', duration: 'ご訪問後1週間程度' },
  { step: '04', title: '設置工事', description: '経験豊富な職人が丁寧に施工。ほとんどの場合、1日で完了します。', duration: '約1日' },
  { step: '05', title: '運用開始', description: '使い方のご説明後、すぐに電気代削減が始まります。アフターサポートも万全。', duration: '工事完了後すぐ' },
]

const safetyPoints = ['強引な営業は一切しません', '診断だけでもOK', 'いつでもキャンセル可能']

export default function FlowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="flow">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">導入までの流れ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide mb-4">かんたん5ステップ</h2>
          <p className="text-text-darkGray">診断から運用開始まで、すべてサポートします。</p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="flex gap-4 md:gap-6 items-start bg-base-lightGray p-4 md:p-6"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent-black text-base-white flex items-center justify-center text-lg md:text-xl font-sans">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-text-darkGray mb-2">{step.description}</p>
                <p className="text-xs text-text-darkGray bg-base-white px-2 py-1 inline-block">{step.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-6"
        >
          {safetyPoints.map((point, index) => (
            <span key={index} className="flex items-center gap-2 text-sm text-text-darkGray">
              <span className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center text-green-600 text-xs font-bold">&#10003;</span>
              {point}
            </span>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
