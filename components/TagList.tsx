'use client'

import Link from 'next/link'
import { Tag } from '@/lib/supabase'

interface TagListProps {
  tags: Tag[]
  className?: string
}

export default function TagList({ tags, className = '' }: TagListProps) {
  if (!tags || tags.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag.id}
          href={`/articles/tag/${tag.slug}`}
          className="inline-block px-3 py-1 text-xs bg-base-lightGray text-text-darkGray hover:bg-accent-black hover:text-base-white transition-colors"
        >
          {tag.name}
        </Link>
      ))}
    </div>
  )
}

