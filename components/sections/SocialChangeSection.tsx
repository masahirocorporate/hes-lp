'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import { useTarget } from '../../contexts/TargetContext'

const zehRates = [
  { company: 'セキスイハイム', rate: 93 },
  { company: '一条工務店', rate: 92 },
  { company: '積水ハウス', rate: 85 },
  { company: '大和ハウス', rate: 79 },
]

const timeline = [
  { year: '2012年', event: 'FIT制度開始、太陽光の普及が加速' },
  { year: '2019年', event: 'FIT終了世帯が続出、蓄電池需要が急増' },
  { year: '2025年', event: '省エネ基準義務化、ZEHが新築の標準に' },
  { year: '2030年', event: '東京都で新築に太陽光義務化' },
]

export default function SocialChangeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { target } = useTarget()

  return (
    <SectionWrapper id="social-change">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">住宅の常識が変わった</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide mb-6">
            もはや「オプション」ではない。
            <br />
            <span className="text-text-darkGray">これからの「標準装備」。</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="bg-base-lightGray p-6 md:p-8"
          >
            <p className="text-xs font-sans tracking-widest text-text-darkGray mb-6">
              大手ハウスメーカーのZEH率
            </p>
            <div className="space-y-4">
              {zehRates.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{item.company}</span>
                    <span className="text-sm font-medium">{item.rate}%</span>
                  </div>
                  <div className="h-2 bg-text-darkGray/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.rate}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-accent-black rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-darkGray mt-6">
              ZEH = 太陽光＋蓄電池でエネルギー収支ゼロの家
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-accent-black text-base-white p-6 md:p-8"
          >
            <p className="text-xs font-sans tracking-widest text-base-white/60 mb-6">
              住宅エネルギーの転換点
            </p>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-16">
                    <p className="text-sm font-medium">{item.year}</p>
                  </div>
                  <div className="flex-1 pb-4 border-b border-base-white/20 last:border-0">
                    <p className="text-sm text-base-white/80">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="inline-block bg-base-lightGray px-8 py-6">
            <p className="text-lg font-medium mb-2">
              {target === 'has-solar' 
                ? '太陽光だけでは「半分」。蓄電池で「標準仕様」に。'
                : '新築の90%は、すでに太陽光＋蓄電池。'
              }
            </p>
            <p className="text-sm text-text-darkGray">
              {target === 'has-solar'
                ? 'FIT終了後も、太陽光を最大限活用するために。'
                : 'あなたの家だけ「旧式」のままでいいですか？'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
