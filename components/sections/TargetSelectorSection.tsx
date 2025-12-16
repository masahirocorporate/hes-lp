'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import SectionWrapper from '../SectionWrapper'
import { useTarget, TargetType } from '../../contexts/TargetContext'

const targets = [
  {
    id: 'no-solar' as TargetType,
    title: 'これから導入を検討中',
    description: '太陽光パネルはまだ持っていない。太陽光＋蓄電池をセットで導入したい。',
    highlight: 'おすすめ',
    benefit: '年間15万円削減',
  },
  {
    id: 'has-solar' as TargetType,
    title: 'すでに太陽光パネルあり',
    description: 'FIT終了済み、または終了予定。蓄電池を追加して自家消費に切り替えたい。',
    highlight: null,
    benefit: '年間10万円回復',
  },
]

export default function TargetSelectorSection() {
  const { setTarget } = useTarget()
  const router = useRouter()

  const handleSelect = (targetId: TargetType) => {
    setTarget(targetId)
    router.push(`/?target=${targetId}#social-change`, { scroll: false })
    
    setTimeout(() => {
      const element = document.getElementById('social-change')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <SectionWrapper id="target-selector" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-3">
            あなたの状況は？
          </p>
          <h2 className="text-2xl sm:text-3xl font-sans font-normal tracking-wide">
            最適な情報をお届けするために
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targets.map((target, index) => (
            <motion.button
              key={target.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              onClick={() => handleSelect(target.id)}
              className={`relative p-6 md:p-8 text-left transition-all group ${
                target.highlight 
                  ? 'bg-accent-black text-base-white hover:bg-text-black' 
                  : 'bg-base-lightGray hover:bg-text-darkGray/10'
              }`}
            >
              {target.highlight && (
                <span className="absolute top-4 right-4 text-xs bg-base-white text-accent-black px-2 py-1">
                  {target.highlight}
                </span>
              )}
              <h3 className={`text-xl font-medium mb-3 ${
                target.highlight ? 'text-base-white' : 'text-text-black'
              }`}>
                {target.title}
              </h3>
              <p className={`text-sm mb-4 ${
                target.highlight ? 'text-base-white/80' : 'text-text-darkGray'
              }`}>
                {target.description}
              </p>
              <p className={`text-sm font-medium ${
                target.highlight ? 'text-base-white' : 'text-accent-black'
              }`}>
                {target.benefit}
              </p>
              <div className={`mt-4 flex items-center gap-2 text-sm ${
                target.highlight ? 'text-base-white/80' : 'text-text-darkGray'
              }`}>
                <span>詳しく見る</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
