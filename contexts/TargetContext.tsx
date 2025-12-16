'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'

export type TargetType = 'no-solar' | 'has-solar' | null

interface TargetContextType {
  target: TargetType
  setTarget: (target: TargetType) => void
  isSelected: boolean
}

const TargetContext = createContext<TargetContextType | undefined>(undefined)

export function TargetProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const [target, setTarget] = useState<TargetType>(null)

  useEffect(() => {
    const urlTarget = searchParams.get('target') as TargetType
    if (urlTarget && ['no-solar', 'has-solar'].includes(urlTarget)) {
      setTarget(urlTarget)
    }
  }, [searchParams])

  return (
    <TargetContext.Provider value={{ target, setTarget, isSelected: target !== null }}>
      {children}
    </TargetContext.Provider>
  )
}

export function useTarget() {
  const context = useContext(TargetContext)
  if (context === undefined) {
    throw new Error('useTarget must be used within a TargetProvider')
  }
  return context
}
