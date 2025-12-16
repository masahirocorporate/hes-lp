'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import { useTarget } from '../../contexts/TargetContext'

const benefits = ['3つの質問に答えるだけ', '1分で完了', '強引な営業なし']

export default function ClosingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { target } = useTarget()

  return (
    <SectionWrapper id="closing" darkMode>
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-xs font-sans tracking-widest text-base-white/60 mb-4">無料診断</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide mb-6 text-base-white">
            あなたの家も、<br />「標準仕様」にしませんか。
          </h2>
          <p className="text-base-white/80 mb-8 max-w-2xl mx-auto">
            {target === 'has-solar' 
              ? 'FIT終了後も、太陽光を最大限活用。蓄電池であなたの家を「完成形」に。まずは無料診断で、どれだけお得になるかをご確認ください。'
              : '大手ハウスメーカーの90%が選ぶ、太陽光＋蓄電池。あなたの家でも、今から「標準仕様」を。まずは無料診断で、導入費用と節約額をチェック。'}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {benefits.map((benefit, index) => (
              <span key={index} className="flex items-center gap-2 text-sm text-base-white/80">
                <span className="w-5 h-5 rounded-full border-2 border-base-white/60 flex items-center justify-center text-base-white text-xs font-bold">&#10003;</span>
                {benefit}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="bg-base-white p-6 md:p-10 text-left"
          >
            <p className="text-xl md:text-2xl font-sans font-medium text-center mb-6 text-text-black">
              {target === 'has-solar' ? '蓄電池でいくらお得になる？' : '太陽光＋蓄電池でいくらお得になる？'}
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-xs text-text-darkGray mb-1">お名前</label>
                <input type="text" placeholder="山田 太郎" className="w-full px-4 py-3 border border-text-darkGray/20 focus:border-accent-black focus:outline-none transition-colors text-text-black" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-darkGray mb-1">メールアドレス</label>
                  <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 border border-text-darkGray/20 focus:border-accent-black focus:outline-none transition-colors text-text-black" />
                </div>
                <div>
                  <label className="block text-xs text-text-darkGray mb-1">電話番号</label>
                  <input type="tel" placeholder="090-0000-0000" className="w-full px-4 py-3 border border-text-darkGray/20 focus:border-accent-black focus:outline-none transition-colors text-text-black" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-text-darkGray mb-1">お住まいの都道府県</label>
                <select className="w-full px-4 py-3 border border-text-darkGray/20 focus:border-accent-black focus:outline-none transition-colors bg-white text-text-black">
                  <option value="">選択してください</option>
                  <option value="tokyo">東京都</option>
                  <option value="kanagawa">神奈川県</option>
                  <option value="chiba">千葉県</option>
                  <option value="saitama">埼玉県</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-text-darkGray mb-1">毎月の電気代（おおよそ）</label>
                <select className="w-full px-4 py-3 border border-text-darkGray/20 focus:border-accent-black focus:outline-none transition-colors bg-white text-text-black">
                  <option value="">選択してください</option>
                  <option value="under10000">1万円未満</option>
                  <option value="10000-15000">1万円〜1.5万円</option>
                  <option value="15000-20000">1.5万円〜2万円</option>
                  <option value="20000-30000">2万円〜3万円</option>
                  <option value="over30000">3万円以上</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-accent-black text-base-white py-4 text-lg font-medium hover:bg-text-black transition-colors">
                【無料】診断結果を見る
              </button>
            </form>
            <p className="text-xs text-text-darkGray text-center mt-4">ご入力いただいた情報は、診断結果のご連絡にのみ使用します。</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="mt-8 text-sm text-base-white/60"
          >
            ※ 補助金は予算上限で終了する可能性があります。お早めにご検討ください。
          </motion.p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
