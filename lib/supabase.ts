import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase環境変数が設定されていません。.env.localファイルを確認してください。')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// データベース型定義
export interface Product {
  id: string
  slug: string
  title: string
  description: string
  image?: string
  specs?: Record<string, any>
  price_range?: string
  created_at: string
  updated_at: string
}

export interface Tag {
  id: string
  name: string
  slug: string
  created_at: string
}

export interface Article {
  id: string
  slug: string
  title: string
  content: string
  excerpt?: string
  image?: string
  published_at?: string
  created_at: string
  updated_at: string
  tags?: Tag[]
}

export interface ArticleTag {
  id: string
  article_id: string
  tag_id: string
  created_at: string
}

export interface Case {
  id: string
  slug: string
  title: string
  content: string
  image?: string
  customer_info?: Record<string, any>
  results?: Record<string, any>
  created_at: string
  updated_at: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  display_order?: number
  created_at: string
}

