import type {
  BlogDetail,
  BlogListItem,
  ParsedBlogPayload,
} from '@/types/blog'

type BlogDocument = {
  _id: { toString(): string } | string
  blog?: string | ParsedBlogPayload
  title?: string
  category?: string
  summary?: string
  heroImage?: string
  estimatedReadMinutes?: number
  createdAt?: string | Date
}

const toIso = (value?: string | Date) => {
  if (!value) return new Date().toISOString()
  if (value instanceof Date) return value.toISOString()
  return value
}

export const parseBlogPayload = (
  raw?: string | ParsedBlogPayload | null
): ParsedBlogPayload => {
  if (!raw) return {}
  if (typeof raw === 'object') return raw

  try {
    return JSON.parse(raw) as ParsedBlogPayload
  } catch {
    return {}
  }
}

export const toBlogListItem = (doc: BlogDocument): BlogListItem => {
  const parsed = parseBlogPayload(doc.blog)
  const meta = parsed.blog || {}

  return {
    _id: typeof doc._id === 'string' ? doc._id : doc._id.toString(),
    title: doc.title || meta.title || 'Untitled Blog',
    category: (doc.category || meta.category || 'general').toLowerCase(),
    summary: doc.summary || meta.summary || '',
    heroImage: doc.heroImage || meta.heroImage || '',
    estimatedReadMinutes:
      doc.estimatedReadMinutes || meta.estimatedReadMinutes || 5,
    createdAt: toIso(doc.createdAt),
  }
}

export const toBlogDetail = (doc: BlogDocument): BlogDetail => {
  const parsed = parseBlogPayload(doc.blog)
  const listItem = toBlogListItem(doc)

  return {
    ...listItem,
    content: parsed.content || [],
    keyTakeaways: parsed.keyTakeaways || [],
    faq: parsed.faq || [],
    relatedVideos: parsed.relatedVideos || [],
    sources: parsed.sources || [],
    seoTitle: parsed.seo?.title || listItem.title,
    metaDescription: parsed.seo?.metaDescription || listItem.summary,
    keywords: parsed.seo?.keywords || [],
  }
}
