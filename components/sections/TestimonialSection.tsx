'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import { useTarget } from '../../contexts/TargetContext'

const testimonials = [
  { name: 'K.S.さん', age: '40代', location: '東京都', type: 'no-solar', headline: '「電気代が月1.5万円→5,000円に」', content: '太陽光と蓄電池をセットで導入しました。電気代が毎月1万円以上減って、年間で15万円の節約。ローンを払っても黒字です。', result: '年間15万円削減' },
  { name: 'M.T.さん', age: '50代', location: '神奈川県', type: 'has-solar', headline: '「FIT終了後の損失がゼロに」', content: '10年前に太陽光を入れて、FIT終了後は売電収入が激減。蓄電池を追加してからは、自家消費で電気代がほぼゼロになりました。', result: '年間12万円回復' },
  { name: 'Y.H.さん', age: '30代', location: '千葉県', type: 'no-solar', headline: '「停電時に本当に助かった」', content: '台風で近所は停電していましたが、うちは蓄電池のおかげで普通に生活できました。冷蔵庫もエアコンも動いて、本当に入れてよかった。', result: '48時間の安心' },
  { name: 'A.K.さん', age: '60代', location: '埼玉県', type: 'has-solar', headline: '「もっと早く入れればよかった」', content: 'FIT終了から2年間、損をしていました。蓄電池を入れて初めて、太陽光の本当の価値がわかりました。', result: '損失を回復' },
]

export default function TestimonialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { target } = useTarget()

  const sortedTestimonials = [...testimonials].sort((a, b) => {
    if (target === 'has-solar') return a.type === 'has-solar' ? -1 : 1
    return a.type === 'no-solar' ? -1 : 1
  })

  return (
    <SectionWrapper id="testimonial">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">お客様の声</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide">導入された方々の<br />リアルな声。</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedTestimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className={`p-6 md:p-8 ${t.type === target ? 'bg-accent-black text-base-white' : 'bg-base-lightGray'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${t.type === target ? 'bg-base-white/20 text-base-white' : 'bg-text-darkGray/20 text-text-darkGray'}`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className={`text-sm ${t.type === target ? 'text-base-white' : 'text-text-black'}`}>{t.name}</p>
                  <p className={`text-xs ${t.type === target ? 'text-base-white/60' : 'text-text-darkGray'}`}>{t.age}・{t.location}</p>
                </div>
                <div className={`ml-auto text-xs px-2 py-1 ${t.type === target ? 'bg-base-white/20 text-base-white' : 'bg-text-darkGray/20 text-text-darkGray'}`}>
                  {t.type === 'has-solar' ? '太陽光あり' : '新規導入'}
                </div>
              </div>
              <p className={`text-lg font-medium mb-3 ${t.type === target ? 'text-base-white' : 'text-text-black'}`}>{t.headline}</p>
              <p className={`text-sm leading-relaxed mb-4 ${t.type === target ? 'text-base-white/80' : 'text-text-darkGray'}`}>{t.content}</p>
              <p className={`text-sm font-medium border-l-2 pl-3 ${t.type === target ? 'border-base-white/50 text-base-white' : 'border-accent-black text-accent-black'}`}>{t.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
