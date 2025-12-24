'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4" aria-label="パンくずリスト">
      <ol className="flex items-center gap-2 text-xs text-text-darkGray">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <span className="text-text-darkGray/40">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-accent-black transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-black">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

