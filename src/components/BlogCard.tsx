'use client'

import Link from 'next/link'
import BlogImage from '@/components/BlogImage'
import type { BlogListItem } from '@/types/blog'

type BlogCardProps = {
  blog: BlogListItem
}

const formatCreatedAt = (value: string) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Date unavailable'

  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const createdAtLabel = formatCreatedAt(blog.createdAt)

  return (
    <Link
      href={`/blog/${blog._id}`}
      className="group flex w-full flex-col overflow-hidden rounded-[1.2rem] border border-blog-border bg-blog-surface/90 transition-all duration-blog hover:border-blog-muted/40 hover:bg-blog-surface-hover below-tab:rounded-[1rem] md:flex-row"
    >
      <div className="relative h-[22rem] w-full shrink-0 overflow-hidden bg-blog-accent-soft md:h-auto md:min-h-[22rem] md:w-[32rem]">
        <BlogImage
          src={blog.heroImage}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-[1.2rem] p-[2.2rem] below-mob:p-[1.6rem]">
        <div className="flex flex-wrap items-center gap-x-[1.2rem] gap-y-[0.6rem] text-[1.25rem]">
          <span className="rounded-full bg-blog-accent-soft px-[1.1rem] py-[0.4rem] font-medium uppercase tracking-[0.08em] text-blog-text">
            {blog.category}
          </span>
          <time
            dateTime={blog.createdAt}
            className="poppins-font text-blog-muted"
          >
            {createdAtLabel}
          </time>
          <span className="text-blog-border">|</span>
          <span className="poppins-font text-blog-muted">
            {blog.estimatedReadMinutes} min read
          </span>
        </div>

        <h3 className="oswald-font text-[2.4rem] leading-[1.2] text-blog-text transition-colors duration-blog group-hover:text-white below-mob:text-[2rem]">
          {blog.title}
        </h3>

        {blog.summary ? (
          <p className="poppins-font line-clamp-3 max-w-[70rem] text-[1.45rem] leading-relaxed text-blog-muted">
            {blog.summary}
          </p>
        ) : null}

        <span className="mt-[0.4rem] inline-flex items-center gap-[0.6rem] text-[1.35rem] text-blog-text opacity-80 transition-opacity duration-blog group-hover:opacity-100">
          Read article
          <span
            aria-hidden="true"
            className="transition-transform duration-blog group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  )
}

export default BlogCard
