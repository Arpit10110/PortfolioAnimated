'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import BlogNav from '@/components/BlogNav'
import BlogList from '@/components/BlogList'
import BlogPagination from '@/components/BlogPagination'
import { useDebounce } from '@/hooks/useDebounce'
import type { BlogListItem, BlogsApiResponse } from '@/types/blog'

const BLOGS_PER_PAGE = 10

const BlogPageClient = () => {
  const [search, setSearch] = useState('')
  const [topic, setTopic] = useState('all')
  const [page, setPage] = useState(1)
  const [blogs, setBlogs] = useState<BlogListItem[]>([])
  const [total, setTotal] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const debouncedSearch = useDebounce(search, 400)

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch])

  useEffect(() => {
    const controller = new AbortController()

    const fetchBlogs = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await axios.get<BlogsApiResponse>('/api/getallbogs', {
          params: {
            topic,
            search: debouncedSearch,
            page,
            limit: BLOGS_PER_PAGE,
          },
          signal: controller.signal,
        })

        const data = response.data
        if (!data.success) {
          setError(data.message || 'Failed to load blogs')
          setBlogs([])
          setTotal(0)
          setTotalPages(1)
          return
        }

        setBlogs(data.blogs || [])
        setTotal(data.total || 0)
        setTotalPages(data.totalPages || 1)
      } catch (err) {
        if (axios.isCancel(err) || controller.signal.aborted) return
        setError('Failed to load blogs. Please try again.')
        setBlogs([])
        setTotal(0)
        setTotalPages(1)
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchBlogs()

    return () => controller.abort()
  }, [topic, debouncedSearch, page])

  const handleTopicChange = (value: string) => {
    setTopic(value)
    setPage(1)
  }

  return (
    <>
      <Navbar />
      <main className="blog-page min-h-screen bg-blog-bg">
        <div className="blog-page-glow pointer-events-none" aria-hidden="true" />
        <section className="relative z-[1] px-blog-nav-x pb-[1rem] pt-[1rem]">
          <p className="poppins-font mb-[0.6rem] text-[1.3rem] uppercase tracking-[0.18em] text-blog-muted">
            Blog
          </p>
          <h1 className="oswald-font text-[3.4rem] text-blog-text below-mob:text-[2.6rem]">
            Latest articles
          </h1>
          <p className="poppins-font mt-[0.8rem] max-w-[60rem] text-[1.5rem] text-blog-muted">
            Insights on AI, technology, programming, startups, and more from
            Arpit Agrahari.
          </p>
        </section>
        <BlogNav
          search={search}
          topic={topic}
          onSearchChange={setSearch}
          onTopicChange={handleTopicChange}
        />
        <BlogList blogs={blogs} loading={loading} error={error} />
        <BlogPagination
          page={page}
          totalPages={totalPages}
          total={total}
          onPageChange={setPage}
        />
      </main>
    </>
  )
}

export default BlogPageClient
