import { supabase, Product } from '@/lib/supabase'
import PageLayout from '@/components/layouts/PageLayout'
import ProductCard from '@/components/cards/ProductCard'
import SectionWrapper from '@/components/SectionWrapper'
import Breadcrumb from '@/components/Breadcrumb'

async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
    return []
  }

  return data || []
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <PageLayout
      title="製品一覧"
      description="Anker SOLIXの製品ラインナップをご紹介します"
    >
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '製品一覧' },
        ]}
      />
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-darkGray">製品データがありません</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </PageLayout>
  )
}

