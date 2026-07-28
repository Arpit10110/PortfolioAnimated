import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogDetailView from '@/components/BlogDetailView'
import { getBlogById } from '@/lib/blogs'
import {
  JsonLdScript,
  blogFaqJsonLd,
  blogPostJsonLd,
  breadcrumbJsonLd,
} from '@/lib/seo'
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
} from '@/lib/site'

type BlogDetailPageProps = {
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({
  params,
}: BlogDetailPageProps): Promise<Metadata> => {
  const { id } = await params
  const blog = await getBlogById(id)

  if (!blog) {
    return {
      title: 'Blog not found',
      robots: { index: false, follow: false },
    }
  }

  const title = blog.seoTitle || blog.title
  const description =
    blog.metaDescription || blog.summary || `${title} — by ${SITE_NAME}`
  const keywords = [
    ...(blog.keywords || []),
    blog.category,
    SITE_NAME,
    'tech blog',
  ].filter(Boolean)
  const url = absoluteUrl(`/blog/${blog._id}`)
  const image =
    blog.heroImage && blog.heroImage !== 'generate_image'
      ? blog.heroImage
      : DEFAULT_OG_IMAGE

  return {
    title: {
      absolute: `${title} | ${SITE_NAME}`,
    },
    description,
    keywords,
    authors: [{ name: SITE_NAME, url: absoluteUrl('/') }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: blog.category,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: `${SITE_NAME} Portfolio`,
      publishedTime: blog.createdAt,
      modifiedTime: blog.createdAt,
      authors: [SITE_NAME],
      tags: blog.keywords,
      section: blog.category,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { id } = await params
  const blog = await getBlogById(id)

  if (!blog) notFound()

  const faqSchema = blogFaqJsonLd(blog)

  return (
    <>
      <JsonLdScript
        data={[
          blogPostJsonLd(blog),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: blog.title, path: `/blog/${blog._id}` },
          ]),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />
      <BlogDetailView blog={blog} />
    </>
  )
}

export default BlogDetailPage
