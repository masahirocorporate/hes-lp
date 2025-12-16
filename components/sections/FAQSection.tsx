'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import Accordion from '../ui/Accordion'
import { useTarget } from '../../contexts/TargetContext'

const faqsCommon = [
  { question: '設置にはどれくらいの期間がかかりますか？', answer: '現地調査から設置完了まで、通常2〜4週間程度です。設置工事自体は1日で完了します。補助金申請を含める場合は、さらに1〜2週間程度かかることがあります。' },
  { question: '設置スペースはどれくらい必要ですか？', answer: 'Anker SOLIX XJシリーズは幅約60cm×奥行約30cm×高さ約120cm。エアコンの室外機程度のスペースがあれば設置可能です。屋内・屋外どちらにも対応しています。' },
  { question: '蓄電池の寿命はどれくらいですか？', answer: 'Anker SOLIX XJシリーズはリン酸鉄リチウムイオン電池を採用。15年以上の長寿命で、6,000回以上の充放電サイクルに対応しています。10年間の製品保証付き。' },
  { question: '停電時、自動で切り替わりますか？', answer: 'はい。停電を検知すると、自動的に蓄電池からの給電に切り替わります。手動での操作は不要です。切り替え時間は数秒以内で、家電への影響はほとんどありません。' },
]

const faqsNoSolar = [
  { question: '太陽光パネルも一緒に設置できますか？', answer: 'はい。太陽光パネルと蓄電池のセット導入に対応しています。セット導入の場合、より多くの補助金が適用される場合があります。無料診断でお見積りをご確認ください。' },
  { question: '初期費用はどれくらいかかりますか？', answer: '太陽光＋蓄電池のセットで、補助金適用前で200〜300万円程度。補助金（最大120万円）を活用すれば、実質負担を大幅に軽減できます。月々のローン払いも可能です。' },
]

const faqsHasSolar = [
  { question: '今ある太陽光パネルと連携できますか？', answer: 'ほとんどのメーカーの太陽光パネル・パワコンと連携可能です。現地調査で詳細を確認し、最適な連携方法をご提案します。' },
  { question: 'FIT終了後、蓄電池だけでも補助金は出ますか？', answer: 'はい。蓄電池単体でもDR補助金（国）や都道府県・市区町村の補助金が適用されます。無料診断で、お住まいの地域で使える補助金をお調べします。' },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { target } = useTarget()
  const targetFaqs = target === 'has-solar' ? faqsHasSolar : faqsNoSolar
  const allFaqs = [...targetFaqs, ...faqsCommon]

  return (
    <SectionWrapper id="faq">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-text-darkGray mb-4">よくある質問</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide">FAQ</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {allFaqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>{faq.answer}</Accordion>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
