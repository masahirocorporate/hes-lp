import { getArticles, getAllTags } from '@/lib/queries'
import PageLayout from '@/components/layouts/PageLayout'
import ArticleCard from '@/components/cards/ArticleCard'
import SectionWrapper from '@/components/SectionWrapper'
import Breadcrumb from '@/components/Breadcrumb'
import TagList from '@/components/TagList'

export default async function ArticlesPage() {
  const articles = await getArticles()
  const tags = await getAllTags()

  return (
    <PageLayout
      title="記事一覧"
      description="蓄電池や太陽光発電に関する最新情報をお届けします"
    >
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '記事一覧' },
        ]}
      />
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          {tags.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-sans tracking-widest text-text-darkGray mb-4">
                タグで絞り込む
              </h2>
              <TagList tags={tags} />
            </div>
          )}
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-darkGray">記事がありません</p>
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

