'use client'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  darkMode?: boolean
}

export default function SectionWrapper({ 
  children, 
  id, 
  className = '',
  darkMode = false 
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 px-4 md:px-6 ${
        darkMode ? 'bg-accent-black text-base-white' : 'bg-base-white text-text-black'
      } ${className}`}
    >
      {children}
    </section>
  )
}
