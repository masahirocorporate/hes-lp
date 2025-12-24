import { supabase, Case } from '@/lib/supabase'
import PageLayout from '@/components/layouts/PageLayout'
import CaseCard from '@/components/cards/CaseCard'
import SectionWrapper from '@/components/SectionWrapper'
import Breadcrumb from '@/components/Breadcrumb'

async function getCases(): Promise<Case[]> {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching cases:', error)
    return []
  }

  return data || []
}

export default async function CasesPage() {
  const cases = await getCases()

  return (
    <PageLayout
      title="お客様の事例"
      description="Anker SOLIXを導入されたお客様の実際の導入事例をご紹介します"
    >
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'お客様の事例' },
        ]}
      />
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          {cases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-darkGray">事例がありません</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cases.map((caseItem, index) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </PageLayout>
  )
}

