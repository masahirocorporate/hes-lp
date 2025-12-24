'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/supabase'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/products/${product.slug}`} className="block group">
        <div className="bg-base-white border border-base-lightGray hover:border-accent-black transition-all duration-300 overflow-hidden">
          {product.image && (
            <div className="relative w-full h-48 md:h-64 bg-base-lightGray overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-lg md:text-xl font-sans font-medium mb-2 group-hover:text-accent-black transition-colors">
              {product.title}
            </h3>
            <p className="text-sm text-text-darkGray mb-4 line-clamp-2">
              {product.description}
            </p>
            {product.price_range && (
              <p className="text-sm font-medium text-accent-black">
                {product.price_range}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

