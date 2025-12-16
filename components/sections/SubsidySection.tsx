'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionWrapper from '../SectionWrapper'
import CTAButton from '../CTAButton'
import Modal from '../ui/Modal'
import { useTarget } from '../../contexts/TargetContext'

const subsidies = [
  { name: '国（DR補助金）', amount: '最大60万円', description: '蓄電池の価格の1/3程度を補助' },
  { name: '都道府県', amount: '最大120万円', description: '東京都の例。地域により異なる' },
  { name: '市区町村', amount: '最大30万円', description: '自治体独自の上乗せ補助' },
]

export default function SubsidySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showModal, setShowModal] = useState(false)
  const { target } = useTarget()

  return (
    <SectionWrapper id="subsidy">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">今だけのチャンス</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide mb-4">補助金で最大120万円。</h2>
          <p className="text-text-darkGray">
            {target === 'has-solar' 
              ? '蓄電池単体でも補助金の対象です。FIT終了後の導入を国・自治体が後押し。'
              : '太陽光＋蓄電池のセット導入に、国・自治体が大型補助を支給しています。'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {subsidies.map((subsidy, index) => (
            <div key={index} className="bg-base-lightGray p-6 text-center">
              <p className="text-xs text-text-darkGray mb-2">{subsidy.name}</p>
              <p className="text-3xl font-sans font-medium text-accent-black mb-2">{subsidy.amount}</p>
              <p className="text-xs text-text-darkGray">{subsidy.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="bg-accent-black text-base-white p-6 md:p-8 text-center mb-8"
        >
          <p className="text-xs text-base-white/60 mb-2">最大で</p>
          <p className="text-4xl md:text-5xl font-sans font-medium mb-2">合計 120万円以上</p>
          <p className="text-base-white/70 text-sm">の補助金を受けられます</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="border border-red-500/30 bg-red-500/5 p-6 mb-8"
        >
          <p className="text-sm font-medium text-red-700 mb-2">補助金は年々減少しています</p>
          <p className="text-xs text-text-darkGray">
            2024年度のDR補助金は予算上限に達して早期終了しました。<br />
            補助金がなくなると、自己負担が100万円以上増える可能性があります。
          </p>
        </motion.div>

        <div className="text-center">
          <CTAButton href="#closing" variant="primary">【無料】使える補助金を診断する</CTAButton>
          <button onClick={() => setShowModal(true)} className="block mx-auto mt-4 text-sm text-text-darkGray hover:text-accent-black underline underline-offset-4 transition-colors">
            補助金の詳細を見る
          </button>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="補助金の詳細">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2 text-text-black">DR補助金（国）</h4>
            <p className="text-sm text-text-darkGray">電力需給調整（デマンドレスポンス）に対応した蓄電池に対する補助金。蓄電池の価格の約1/3が補助されます。2025年度も継続予定ですが、予算には上限があり、早期終了の可能性があります。</p>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-text-black">東京都の補助金</h4>
            <p className="text-sm text-text-darkGray">「東京ゼロエミ住宅」に対する補助。蓄電池単体で最大120万円。太陽光との同時設置でさらに上乗せされます。</p>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-text-black">市区町村の補助金</h4>
            <p className="text-sm text-text-darkGray">自治体独自の上乗せ補助。金額は地域によって異なります。無料診断で、お住まいの地域で使える補助金をお調べします。</p>
          </div>
        </div>
      </Modal>
    </SectionWrapper>
  )
}
