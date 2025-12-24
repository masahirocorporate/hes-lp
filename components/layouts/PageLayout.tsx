'use client'

import Navigation from '../Navigation'
import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {(title || description) && (
          <div className="bg-base-white py-12 md:py-16 px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center">
              {title && (
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-wide mb-4">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-text-darkGray text-sm md:text-base max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
        {children}
      </main>
    </>
  )
}

