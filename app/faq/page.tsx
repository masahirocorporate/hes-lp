import { supabase, FAQ } from '@/lib/supabase'
import PageLayout from '@/components/layouts/PageLayout'
import SectionWrapper from '@/components/SectionWrapper'
import Breadcrumb from '@/components/Breadcrumb'
import FAQList from '@/components/FAQList'

async function getFAQs(): Promise<FAQ[]> {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .order('display_order', { ascending: true, nullsFirst: true })
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }

  return data || []
}

export default async function FAQPage() {
  const faqs = await getFAQs()

  return (
    <PageLayout
      title="よくある質問"
      description="蓄電池や太陽光発電に関するよくある質問にお答えします"
    >
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'よくある質問' },
        ]}
      />
      <SectionWrapper>
        <FAQList faqs={faqs} />
      </SectionWrapper>
    </PageLayout>
  )
}

