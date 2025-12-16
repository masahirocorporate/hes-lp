'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionWrapper from '../SectionWrapper'
import Modal from '../ui/Modal'
import { useTarget } from '../../contexts/TargetContext'

const risksNoSolar = [
  {
    number: '01',
    title: '電気代を30年、払い続ける',
    summary: '月2万円 × 12ヶ月 × 30年 = 720万円。値上げが続けば1,000万円超も。',
    highlight: '30年で720万円〜',
    details: {
      title: '電気代の長期シミュレーション',
      content: `<div class="bg-gray-100 p-4 mb-4 rounded"><p class="text-sm text-gray-600 mb-2">現在の電気代で30年間</p><p class="text-2xl font-medium text-gray-900">月2万円 × 360ヶ月 = <span class="text-black font-bold">720万円</span></p></div><div class="bg-gray-100 p-4 mb-4 rounded"><p class="text-sm text-gray-600 mb-2">年2%値上げが続いた場合</p><p class="text-2xl font-medium text-gray-900">30年間の累計 = <span class="text-black font-bold">約980万円</span></p></div><p class="text-gray-700">太陽光＋蓄電池で年15万円削減すれば、30年で<strong class="text-black">450万円</strong>の差になります。</p>`,
    },
  },
  {
    number: '02',
    title: '次の停電で、真っ暗な家に',
    summary: '冷蔵庫は全滅、エアコンも使えない。真夏・真冬は命に関わることも。',
    highlight: '停電時、何もできない',
    details: {
      title: '停電リスクの現実',
      content: `<p class="mb-4 text-gray-700">近年の大規模停電：</p><ul class="space-y-2 mb-4"><li class="p-3 bg-gray-100 rounded flex justify-between text-gray-900"><span>2018年 北海道地震</span><span class="font-medium">約300万戸</span></li><li class="p-3 bg-gray-100 rounded flex justify-between text-gray-900"><span>2019年 台風15号</span><span class="font-medium">最大2週間</span></li></ul><p class="text-gray-700">太陽光＋蓄電池があれば、<strong class="text-black">最大48時間</strong>電気を使い続けられます。</p>`,
    },
  },
  {
    number: '03',
    title: '将来、家の価値が下がる',
    summary: '省エネ性能が低い家は「燃費の悪い車」と同じ。売却・賃貸で不利に。',
    highlight: '「旧式」の家に',
    details: {
      title: '住宅市場の変化',
      content: `<p class="mb-4 text-gray-700">大手ハウスメーカーのZEH率は90%超。</p><p class="mb-4 text-gray-700">太陽光＋蓄電池がない家は：</p><ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700"><li>「省エネ性能が低い家」とみなされる</li><li>売却時の査定に影響する可能性</li><li>賃貸の入居者選びで敬遠される可能性</li></ul>`,
    },
  },
  {
    number: '04',
    title: '後から入れると、割高に',
    summary: '補助金は年々減少。予算上限で早期終了も。今なら最大120万円。',
    highlight: '今なら最大120万円',
    details: {
      title: '補助金の現状',
      content: `<p class="mb-4 text-gray-700">2024年度のDR補助金は、予算上限に達して早期終了しました。</p><p class="mb-4 text-gray-700">今使える補助金：</p><ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700"><li>国（DR補助金）：最大60万円</li><li>東京都：最大120万円</li><li>市区町村：最大30万円</li></ul><p class="text-gray-700">補助金がなくなると、<strong class="text-black">100万円以上</strong>自己負担が増えます。</p>`,
    },
  },
]

const risksHasSolar = [
  {
    number: '01',
    title: 'FIT終了で、毎月損し続けている',
    summary: '売電48円→7円に激減。1kWh売るたびに41円の損失。年間12万円以上。',
    highlight: '年間12万円以上の損失',
    details: {
      title: 'FIT終了の影響',
      content: `<div class="grid grid-cols-2 gap-4 mb-4"><div class="p-4 bg-gray-100 text-center rounded"><p class="text-sm text-gray-600">FIT期間中</p><p class="text-2xl font-medium text-gray-900">48円/kWh</p></div><div class="p-4 bg-red-50 text-center rounded"><p class="text-sm text-gray-600">FIT終了後</p><p class="text-2xl font-medium text-red-600">7円/kWh</p></div></div><p class="text-gray-700">蓄電池で自家消費に切り替えれば、この損失を回避できます。</p>`,
    },
  },
  {
    number: '02',
    title: '太陽光があっても、停電時は使えない',
    summary: 'パワコンが止まれば発電もストップ。せっかくの太陽光が無駄に。',
    highlight: '停電時、発電できない',
    details: {
      title: '停電時の盲点',
      content: `<p class="mb-4 text-gray-700">太陽光パネルがあっても、停電時には電気が使えないケースがほとんど。</p><p class="mb-4 text-gray-700">自立運転モードの限界：</p><ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700"><li>手動で切り替えが必要</li><li>出力が1,500W程度に制限</li><li>夜間・曇天時は使えない</li></ul><p class="text-gray-700">蓄電池があれば、<strong class="text-black">自動で切り替わり、家全体に給電</strong>できます。</p>`,
    },
  },
  {
    number: '03',
    title: '「標準仕様」から遅れている',
    summary: '新築の90%は太陽光＋蓄電池。太陽光だけでは「片手落ち」に。',
    highlight: '蓄電池なしは「半分」',
    details: {
      title: '太陽光だけでは不十分',
      content: `<p class="mb-4 text-gray-700">大手ハウスメーカーの新築は、太陽光＋蓄電池が標準。</p><p class="mb-4 text-gray-700">太陽光だけでは：</p><ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700"><li>発電した電気を安く売るしかない</li><li>夜間は電力会社から買う必要がある</li><li>停電時に活用できない</li></ul><p class="text-gray-700">蓄電池を追加することで、太陽光の本領が発揮されます。</p>`,
    },
  },
  {
    number: '04',
    title: '先延ばしするほど、損失が積み重なる',
    summary: 'FIT終了後、毎月約1万円の損失。1年で12万円。待っても戻らない。',
    highlight: '毎月1万円の損失',
    details: {
      title: '先延ばしの代償',
      content: `<div class="bg-gray-100 p-4 mb-4 rounded"><p class="text-gray-900">1ヶ月先延ばし = 約10,000円の損失</p><p class="text-gray-900">1年先延ばし = 約120,000円の損失</p><p class="text-black font-medium mt-2">この損失は二度と戻ってきません</p></div><p class="text-gray-700">「待てば安くなる」と待つ間に、それ以上の損失が発生しています。</p>`,
    },
  },
]

export default function RiskSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null)
  const { target } = useTarget()

  const risks = target === 'has-solar' ? risksHasSolar : risksNoSolar

  return (
    <SectionWrapper id="risk" darkMode>
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-red-400 mb-4">
            「標準装備」を入れないと？
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide mb-4">
            このまま何もしないと、
            <br />
            <span className="text-red-400">こうなります。</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-base-white/5 border border-red-500/30 p-6 md:p-8"
            >
              <p className="text-4xl font-sans font-light text-red-500/30 mb-4">
                {risk.number}
              </p>
              <h3 className="text-lg font-medium mb-3 tracking-wide text-base-white">
                {risk.title}
              </h3>
              <p className="text-base-white/70 leading-relaxed mb-4 text-sm">
                {risk.summary}
              </p>
              <p className="text-sm font-medium text-red-400 border-l-2 border-red-500/50 pl-3 mb-4">
                {risk.highlight}
              </p>
              <button
                onClick={() => setModalContent(risk.details)}
                className="text-sm text-base-white/70 hover:text-base-white underline underline-offset-4 transition-colors"
              >
                詳しく見る
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <p className="text-base-white/70 mb-4">
            でも大丈夫。<br />
            あなたの家も「標準仕様」にできます。
          </p>
          <div className="inline-block">
            <span className="text-2xl text-base-white">↓</span>
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={!!modalContent}
        onClose={() => setModalContent(null)}
        title={modalContent?.title || ''}
      >
        <div dangerouslySetInnerHTML={{ __html: modalContent?.content || '' }} />
      </Modal>
    </SectionWrapper>
  )
}
