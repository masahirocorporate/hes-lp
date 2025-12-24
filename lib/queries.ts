import { supabase, Article, Tag } from './supabase'

// 記事一覧を取得（タグを含む）
export async function getArticles(): Promise<Article[]> {
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .order('published_at', { ascending: false, nullsFirst: false })

  if (error || !articles) {
    return []
  }

  // 各記事のタグを取得
  const articlesWithTags = await Promise.all(
    articles.map(async (article) => {
      const { data: articleTags } = await supabase
        .from('article_tags')
        .select('tag_id')
        .eq('article_id', article.id)

      if (articleTags && articleTags.length > 0) {
        const tagIds = articleTags.map((at) => at.tag_id)
        const { data: tags } = await supabase
          .from('tags')
          .select('*')
          .in('id', tagIds)

        return { ...article, tags: tags || [] }
      }

      return { ...article, tags: [] }
    })
  )

  return articlesWithTags
}

// スラッグで記事を取得（タグを含む）
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !article) {
    return null
  }

  // タグを取得
  const { data: articleTags } = await supabase
    .from('article_tags')
    .select('tag_id')
    .eq('article_id', article.id)

  if (articleTags && articleTags.length > 0) {
    const tagIds = articleTags.map((at) => at.tag_id)
    const { data: tags } = await supabase
      .from('tags')
      .select('*')
      .in('id', tagIds)

    return { ...article, tags: tags || [] }
  }

  return { ...article, tags: [] }
}

// タグスラッグで記事を取得
export async function getArticlesByTagSlug(tagSlug: string): Promise<Article[]> {
  // タグを取得
  const { data: tag } = await supabase
    .from('tags')
    .select('id')
    .eq('slug', tagSlug)
    .single()

  if (!tag) {
    return []
  }

  // タグがついた記事を取得
  const { data: articleTags } = await supabase
    .from('article_tags')
    .select('article_id')
    .eq('tag_id', tag.id)

  if (!articleTags || articleTags.length === 0) {
    return []
  }

  const articleIds = articleTags.map((at) => at.article_id)
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .in('id', articleIds)
    .order('published_at', { ascending: false, nullsFirst: false })

  if (!articles) {
    return []
  }

  // 各記事のタグを取得
  const articlesWithTags = await Promise.all(
    articles.map(async (article) => {
      const { data: articleTags } = await supabase
        .from('article_tags')
        .select('tag_id')
        .eq('article_id', article.id)

      if (articleTags && articleTags.length > 0) {
        const tagIds = articleTags.map((at) => at.tag_id)
        const { data: tags } = await supabase
          .from('tags')
          .select('*')
          .in('id', tagIds)

        return { ...article, tags: tags || [] }
      }

      return { ...article, tags: [] }
    })
  )

  return articlesWithTags
}

// すべてのタグを取得
export async function getAllTags(): Promise<Tag[]> {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name', { ascending: true })

  if (error || !data) {
    return []
  }

  return data
}

