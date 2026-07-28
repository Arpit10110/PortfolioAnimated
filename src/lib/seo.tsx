import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  absoluteUrl,
} from '@/lib/site'
import type { BlogDetail } from '@/types/blog'

type JsonLd = Record<string, unknown>

export const websiteJsonLd = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${absoluteUrl('/blog')}?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
})

export const personJsonLd = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: 'Full Stack Developer',
  description: SITE_DESCRIPTION,
  sameAs: [SITE_URL],
  knowsAbout: SITE_KEYWORDS,
})

export const blogListJsonLd = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `${SITE_NAME} Blog`,
  description:
    'Tech blogs on AI, programming, startups, cybersecurity, and more by Arpit Agrahari.',
  url: absoluteUrl('/blog'),
  author: {
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
  },
})

export const blogPostJsonLd = (blog: BlogDetail): JsonLd => {
  const url = absoluteUrl(`/blog/${blog._id}`)
  const image =
    blog.heroImage && blog.heroImage !== 'generate_image'
      ? blog.heroImage
      : DEFAULT_OG_IMAGE

  const article: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.seoTitle || blog.title,
    alternativeHeadline: blog.title,
    description: blog.metaDescription || blog.summary,
    keywords: blog.keywords?.join(', '),
    image: [image],
    datePublished: blog.createdAt,
    dateModified: blog.createdAt,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: blog.category,
    wordCount: blog.content
      ?.filter((block) => block.type === 'paragraph')
      .reduce((count, block) => {
        if (block.type !== 'paragraph') return count
        return count + block.content.split(/\s+/).filter(Boolean).length
      }, 0),
    timeRequired: `PT${blog.estimatedReadMinutes || 5}M`,
    url,
  }

  return article
}

export const blogFaqJsonLd = (blog: BlogDetail): JsonLd | null => {
  if (!blog.faq?.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: blog.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export const breadcrumbJsonLd = (
  items: { name: string; path: string }[]
): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
})

export const JsonLdScript = ({ data }: { data: JsonLd | JsonLd[] | null }) => {
  if (!data) return null
  const payload = Array.isArray(data) ? data.filter(Boolean) : data

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}

export { SITE_TITLE }
