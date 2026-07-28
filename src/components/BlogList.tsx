'use client'

import BlogCard from '@/components/BlogCard'
import type { BlogListItem } from '@/types/blog'

type BlogListProps = {
  blogs: BlogListItem[]
  loading: boolean
  error: string | null
}

const BlogListSkeleton = () => (
  <div className="flex flex-col gap-[1.6rem]">
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className="flex w-full flex-col overflow-hidden rounded-[1.2rem] border border-blog-border bg-blog-surface md:flex-row"
      >
        <div className="h-[22rem] w-full animate-pulse bg-blog-accent-soft md:w-[34rem]" />
        <div className="flex flex-1 flex-col justify-center gap-[1.2rem] p-[2.2rem]">
          <div className="h-[1.4rem] w-[35%] animate-pulse rounded bg-blog-accent-soft" />
          <div className="h-[2.4rem] w-[85%] animate-pulse rounded bg-blog-accent-soft" />
          <div className="h-[1.5rem] w-full animate-pulse rounded bg-blog-accent-soft" />
          <div className="h-[1.5rem] w-[65%] animate-pulse rounded bg-blog-accent-soft" />
        </div>
      </div>
    ))}
  </div>
)

const BlogList = ({ blogs, loading, error }: BlogListProps) => {
  if (loading) {
    return (
      <div className="px-blog-nav-x pb-[2rem]">
        <BlogListSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className="px-blog-nav-x pb-[4rem]">
        <p className="rounded-[1rem] border border-blog-border bg-blog-surface p-blog-card text-[1.6rem] text-blog-muted">
          {error}
        </p>
      </div>
    )
  }

  if (!blogs.length) {
    return (
      <div className="px-blog-nav-x pb-[4rem]">
        <p className="rounded-[1rem] border border-blog-border bg-blog-surface p-blog-card text-center text-[1.6rem] text-blog-muted">
          No blogs found. Try another search or topic.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-[1.6rem] px-blog-nav-x pb-[2rem]">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogList
