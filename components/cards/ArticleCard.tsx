'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/lib/supabase'
import TagList from '../TagList'
import { motion } from 'framer-motion'

interface ArticleCardProps {
  article: Article
  index?: number
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-base-white border border-base-lightGray hover:border-accent-black transition-all duration-300 overflow-hidden group"
    >
      <Link href={`/articles/${article.slug}`} className="block">
        {article.image && (
          <div className="relative w-full h-48 md:h-64 bg-base-lightGray overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          {publishedDate && (
            <time className="text-xs text-text-darkGray mb-2 block">
              {publishedDate}
            </time>
          )}
          <h3 className="text-lg md:text-xl font-sans font-medium mb-2 group-hover:text-accent-black transition-colors">
            {article.title}
          </h3>
          {article.excerpt && (
            <p className="text-sm text-text-darkGray mb-4 line-clamp-3">
              {article.excerpt}
            </p>
          )}
          {article.tags && article.tags.length > 0 && (
            <TagList tags={article.tags} />
          )}
        </div>
      </Link>
    </motion.article>
  )
}

