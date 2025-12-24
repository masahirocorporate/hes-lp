import { supabase, Case } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import PageLayout from '@/components/layouts/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'

async function getCase(slug: string): Promise<Case | null> {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return null
  }

  return data
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseItem = await getCase(params.slug)
  
  if (!caseItem) {
    return {
      title: '事例が見つかりません',
    }
  }

  return {
    title: `${caseItem.title} | Anker SOLIX`,
    description: caseItem.content.substring(0, 160),
  }
}

export default async function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseItem = await getCase(params.slug)

  if (!caseItem) {
    notFound()
  }

  return (
    <PageLayout>
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'お客様の事例', href: '/cases' },
          { label: caseItem.title },
        ]}
      />
      <SectionWrapper>
        <article className="max-w-4xl mx-auto">
          {caseItem.image && (
            <div className="relative w-full h-64 md:h-96 bg-base-lightGray mb-8">
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-sans font-normal tracking-wide mb-4">
              {caseItem.title}
            </h1>
          </header>

          {caseItem.customer_info && Object.keys(caseItem.customer_info).length > 0 && (
            <div className="bg-base-lightGray p-6 mb-8">
              <h2 className="text-lg font-sans font-medium mb-4">お客様情報</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(caseItem.customer_info).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm text-text-darkGray mb-1">{key}</dt>
                    <dd className="text-base text-text-black">{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none text-text-black leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: caseItem.content }}
          />

          {caseItem.results && Object.keys(caseItem.results).length > 0 && (
            <div className="border-t border-base-lightGray pt-8">
              <h2 className="text-2xl font-sans font-medium mb-6">導入成果</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(caseItem.results).map(([key, value]) => (
                  <div key={key} className="border-b border-base-lightGray pb-4">
                    <dt className="text-sm text-text-darkGray mb-1">{key}</dt>
                    <dd className="text-lg font-medium text-accent-black">{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </article>
      </SectionWrapper>
    </PageLayout>
  )
}

