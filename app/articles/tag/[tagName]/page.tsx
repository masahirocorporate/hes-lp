import { getArticlesByTagSlug, getAllTags } from '@/lib/queries'
import { notFound } from 'next/navigation'
import PageLayout from '@/components/layouts/PageLayout'
import ArticleCard from '@/components/cards/ArticleCard'
import SectionWrapper from '@/components/SectionWrapper'
import Breadcrumb from '@/components/Breadcrumb'
import { supabase } from '@/lib/supabase'

async function getTagName(tagSlug: string): Promise<string | null> {
  const { data } = await supabase
    .from('tags')
    .select('name')
    .eq('slug', tagSlug)
    .single()

  return data?.name || null
}

export async function generateMetadata({ params }: { params: { tagName: string } }) {
  const tagName = await getTagName(params.tagName)
  
  if (!tagName) {
    return {
      title: 'タグが見つかりません',
    }
  }

  return {
    title: `${tagName} の記事一覧 | Anker SOLIX`,
  }
}

export default async function TagArticlesPage({ params }: { params: { tagName: string } }) {
  const articles = await getArticlesByTagSlug(params.tagName)
  const tagName = await getTagName(params.tagName)

  if (!tagName) {
    notFound()
  }

  return (
    <PageLayout
      title={`「${tagName}」の記事一覧`}
    >
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '記事一覧', href: '/articles' },
          { label: tagName },
        ]}
      />
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-darkGray">このタグの記事がありません</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </PageLayout>
  )
}

