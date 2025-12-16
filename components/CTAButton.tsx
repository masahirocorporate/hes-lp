'use client'

import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  className?: string
  onClick?: () => void
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 text-center'
  
  const variantStyles = {
    primary: 'bg-accent-black text-base-white hover:bg-text-darkGray',
    secondary: 'border border-accent-black text-accent-black hover:bg-accent-black hover:text-base-white',
  }

  const sizeStyles = {
    small: 'px-4 py-2 text-xs',
    medium: 'px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm',
    large: 'px-8 py-4 md:px-10 md:py-5 text-sm md:text-base',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  )
}
