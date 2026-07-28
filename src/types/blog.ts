export type BlogContentBlock =
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; url: string; caption?: string }
  | { type: 'bullet_list'; items: string[] }
  | { type: 'quote'; content: string; author?: string }

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogVideo = {
  title: string
  channel: string
  videoId: string
}

export type BlogSource = {
  title: string
  url: string
}

export type ParsedBlogPayload = {
  seo?: {
    title?: string
    metaDescription?: string
    keywords?: string[]
  }
  blog?: {
    category?: string
    title?: string
    summary?: string
    heroImage?: string
    heroImageSource?: string
    estimatedReadMinutes?: number
  }
  content?: BlogContentBlock[]
  keyTakeaways?: string[]
  faq?: BlogFaq[]
  relatedVideos?: BlogVideo[]
  sources?: BlogSource[]
}

export type BlogListItem = {
  _id: string
  title: string
  category: string
  summary: string
  heroImage: string
  estimatedReadMinutes: number
  createdAt: string
}

export type BlogDetail = BlogListItem & {
  content: BlogContentBlock[]
  keyTakeaways: string[]
  faq: BlogFaq[]
  relatedVideos: BlogVideo[]
  sources: BlogSource[]
  seoTitle: string
  metaDescription: string
  keywords: string[]
}

export type BlogsApiResponse = {
  success: boolean
  blogs: BlogListItem[]
  total: number
  page: number
  limit: number
  totalPages: number
  message?: string
}
