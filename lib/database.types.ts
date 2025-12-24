// Supabaseデータベースの型定義
// このファイルはSupabaseの型生成ツールで自動生成することもできます

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          slug: string
          title: string
          description: string
          image: string | null
          specs: Json | null
          price_range: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          description: string
          image?: string | null
          specs?: Json | null
          price_range?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          description?: string
          image?: string | null
          specs?: Json | null
          price_range?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          slug: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          created_at?: string
        }
      }
      articles: {
        Row: {
          id: string
          slug: string
          title: string
          content: string
          excerpt: string | null
          image: string | null
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          content: string
          excerpt?: string | null
          image?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          content?: string
          excerpt?: string | null
          image?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      article_tags: {
        Row: {
          id: string
          article_id: string
          tag_id: string
          created_at: string
        }
        Insert: {
          id?: string
          article_id: string
          tag_id: string
          created_at?: string
        }
        Update: {
          id?: string
          article_id?: string
          tag_id?: string
          created_at?: string
        }
      }
      cases: {
        Row: {
          id: string
          slug: string
          title: string
          content: string
          image: string | null
          customer_info: Json | null
          results: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          content: string
          image?: string | null
          customer_info?: Json | null
          results?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          content?: string
          image?: string | null
          customer_info?: Json | null
          results?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      faqs: {
        Row: {
          id: string
          question: string
          answer: string
          category: string | null
          display_order: number | null
          created_at: string
        }
        Insert: {
          id?: string
          question: string
          answer: string
          category?: string | null
          display_order?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          category?: string | null
          display_order?: number | null
          created_at?: string
        }
      }
    }
  }
}

