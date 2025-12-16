'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import CTAButton from '../CTAButton'
import { useTarget } from '../../contexts/TargetContext'

const simulationNoSolar = {
  title: '太陽光＋蓄電池 導入シミュレーション',
  subtitle: '4人家族・戸建て住宅の場合',
  before: { label: '導入前', monthly: '月2万円', yearly: '年間24万円' },
  after: { label: '導入後', monthly: '月7,500円', yearly: '年間9万円' },
  saving: { yearly: '年間15万円削減', total: '10年で150万円' },
  notes: ['太陽光4.5kW + 蓄電池10kWhを想定', '日照条件や電気使用量により異なります', '補助金適用で実質負担はさらに軽減'],
}

const simulationHasSolar = {
  title: '蓄電池追加 シミュレーション',
  subtitle: '太陽光4kW設置済み・FIT終了の場合',
  before: { label: 'FIT終了後（蓄電池なし）', monthly: '月1万円の損失', yearly: '年間12万円の機会損失' },
  after: { label: '蓄電池追加後', monthly: '月8,000円の節約', yearly: '年間10万円の効果' },
  saving: { yearly: '年間10〜12万円回復', total: '10年で100万円以上' },
  notes: ['蓄電池10kWhを想定', '現在の電気使用量や太陽光容量により異なります', '補助金適用で実質負担を軽減可能'],
}

export default function SimulationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { target } = useTarget()
  const data = target === 'has-solar' ? simulationHasSolar : simulationNoSolar

  return (
    <SectionWrapper id="simulation">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">具体的にいくらお得？</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide">
            {target === 'has-solar' ? <>FIT終了後の損失を、<br />取り戻せます。</> : <>電気代、年間15万円を<br />取り戻せます。</>}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="bg-base-lightGray p-6 md:p-10"
        >
          <p className="text-sm text-text-darkGray mb-2">{data.title}</p>
          <p className="text-xs text-text-darkGray mb-6">{data.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-base-white p-6">
              <p className="text-xs text-text-darkGray mb-2">{data.before.label}</p>
              <p className="text-3xl font-sans font-medium mb-1">{data.before.monthly}</p>
              <p className="text-text-darkGray">{data.before.yearly}</p>
            </div>
            <div className="bg-accent-black text-base-white p-6">
              <p className="text-xs text-base-white/60 mb-2">{data.after.label}</p>
              <p className="text-3xl font-sans font-medium mb-1">{data.after.monthly}</p>
              <p className="text-base-white/80">{data.after.yearly}</p>
            </div>
          </div>

          <div className="text-center py-6 border-y border-text-darkGray/20 mb-6">
            <p className="text-4xl md:text-5xl font-sans font-medium text-accent-black mb-2">{data.saving.yearly}</p>
            <p className="text-text-darkGray">{data.saving.total}の経済効果</p>
          </div>

          <ul className="space-y-1 mb-8">
            {data.notes.map((note, index) => (
              <li key={index} className="text-xs text-text-darkGray flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-text-darkGray" />
                {note}
              </li>
            ))}
          </ul>

          <div className="text-center">
            <CTAButton href="#closing" variant="primary">
              【無料】あなたの家でシミュレーションする
            </CTAButton>
            <p className="text-xs text-text-darkGray mt-3">3つの質問に答えるだけ・1分で完了</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
