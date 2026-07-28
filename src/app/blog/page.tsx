import BlogPageClient from '@/components/BlogPageClient'
import { JsonLdScript, blogListJsonLd, breadcrumbJsonLd } from '@/lib/seo'

const BlogPage = () => {
  return (
    <>
      <JsonLdScript
        data={[
          blogListJsonLd(),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />
      <BlogPageClient />
    </>
  )
}

export default BlogPage
