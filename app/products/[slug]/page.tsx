import { supabase, Product } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import PageLayout from '@/components/layouts/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

async function getProduct(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return null
  }

  return data
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)
  
  if (!product) {
    return {
      title: '製品が見つかりません',
    }
  }

  return {
    title: `${product.title} | Anker SOLIX`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <PageLayout>
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '製品一覧', href: '/products' },
          { label: product.title },
        ]}
      />
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {product.image && (
              <div className="relative w-full h-64 md:h-96 bg-base-lightGray">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-sans font-normal tracking-wide mb-4">
                {product.title}
              </h1>
              <p className="text-text-darkGray mb-6 leading-relaxed">
                {product.description}
              </p>
              {product.price_range && (
                <div className="mb-6">
                  <p className="text-sm text-text-darkGray mb-2">価格帯</p>
                  <p className="text-xl font-medium text-accent-black">
                    {product.price_range}
                  </p>
                </div>
              )}
              <CTAButton href="#closing" variant="primary" size="large">
                無料診断を申し込む
              </CTAButton>
            </div>
          </div>

          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="border-t border-base-lightGray pt-8">
              <h2 className="text-2xl font-sans font-medium mb-6">仕様</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="border-b border-base-lightGray pb-4">
                    <dt className="text-sm text-text-darkGray mb-1">{key}</dt>
                    <dd className="text-base text-text-black">{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </SectionWrapper>
    </PageLayout>
  )
}
