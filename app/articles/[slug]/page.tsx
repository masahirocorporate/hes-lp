import { getArticleBySlug } from '@/lib/queries'
import { notFound } from 'next/navigation'
import PageLayout from '@/components/layouts/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import TagList from '@/components/TagList'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: '記事が見つかりません',
    }
  }

  return {
    title: `${article.title} | Anker SOLIX`,
    description: article.excerpt || article.content.substring(0, 160),
  }
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <PageLayout>
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '記事一覧', href: '/articles' },
          { label: article.title },
        ]}
      />
      <SectionWrapper>
        <article className="max-w-4xl mx-auto">
          {article.image && (
            <div className="relative w-full h-64 md:h-96 bg-base-lightGray mb-8">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <header className="mb-8">
            {publishedDate && (
              <time className="text-sm text-text-darkGray mb-4 block">
                {publishedDate}
              </time>
            )}
            <h1 className="text-3xl md:text-4xl font-sans font-normal tracking-wide mb-4">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="text-lg text-text-darkGray leading-relaxed">
                {article.excerpt}
              </p>
            )}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-6">
                <TagList tags={article.tags} />
              </div>
            )}
          </header>

          <div 
            className="prose prose-lg max-w-none text-text-black leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </SectionWrapper>
    </PageLayout>
  )
}

