'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import BlogContent from '@/components/BlogContent'
import BlogImage from '@/components/BlogImage'
import type { BlogDetail } from '@/types/blog'

type BlogDetailViewProps = {
  blog: BlogDetail
}

const BlogDetailView = ({ blog }: BlogDetailViewProps) => {
  return (
    <>
      <Navbar />
      <main className="blog-page min-h-screen bg-blog-bg px-blog-nav-x pb-[5rem] pt-[2rem]">
        <nav aria-label="Breadcrumb" className="mb-[2rem]">
          <ol className="flex flex-wrap items-center gap-[0.8rem] text-[1.3rem] text-blog-muted">
            <li>
              <Link
                href="/"
                className="transition-colors duration-blog hover:text-blog-text"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/blog"
                className="transition-colors duration-blog hover:text-blog-text"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="line-clamp-1 text-blog-text">{blog.title}</li>
          </ol>
        </nav>

        <article
          className="mx-auto max-w-[90rem]"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <meta itemProp="headline" content={blog.seoTitle || blog.title} />
          <meta
            itemProp="description"
            content={blog.metaDescription || blog.summary}
          />
          {blog.keywords?.length ? (
            <meta itemProp="keywords" content={blog.keywords.join(', ')} />
          ) : null}

          <div className="mb-[1.5rem] flex flex-wrap items-center gap-[1rem] text-[1.3rem] text-blog-muted">
            <span className="uppercase tracking-wide text-blog-accent">
              {blog.category}
            </span>
            <span>•</span>
            <time dateTime={blog.createdAt} itemProp="datePublished">
              {new Date(blog.createdAt).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{blog.estimatedReadMinutes} min read</span>
          </div>

          <h1
            itemProp="headline"
            className="oswald-font mb-[1.5rem] text-[3.6rem] leading-tight text-blog-text below-mob:text-[2.6rem]"
          >
            {blog.title}
          </h1>

          {blog.summary ? (
            <p
              itemProp="description"
              className="poppins-font mb-[2.5rem] text-[1.7rem] leading-relaxed text-blog-muted"
            >
              {blog.summary}
            </p>
          ) : null}

          <div className="mb-[3rem] overflow-hidden rounded-blog border border-blog-border">
            <BlogImage
              src={blog.heroImage}
              alt={blog.title}
              className="h-auto max-h-[48rem] w-full object-cover"
            />
          </div>

          <div itemProp="articleBody">
            <BlogContent blocks={blog.content} />
          </div>

          {blog.keyTakeaways?.length ? (
            <section className="mt-[3.5rem] rounded-blog border border-blog-border bg-blog-surface p-blog-card">
              <h2 className="oswald-font mb-[1.2rem] text-[2.2rem] text-blog-text">
                Key Takeaways
              </h2>
              <ul className="list-disc space-y-[0.8rem] pl-[2rem] text-[1.5rem] text-blog-muted">
                {blog.keyTakeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {blog.faq?.length ? (
            <section className="mt-[3rem]">
              <h2 className="oswald-font mb-[1.5rem] text-[2.2rem] text-blog-text">
                FAQ
              </h2>
              <div className="flex flex-col gap-[1.2rem]">
                {blog.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-blog border border-blog-border bg-blog-surface p-blog-card"
                  >
                    <h3 className="mb-[0.6rem] text-[1.6rem] text-blog-text">
                      {item.question}
                    </h3>
                    <p className="text-[1.4rem] leading-relaxed text-blog-muted">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {blog.relatedVideos?.length ? (
            <section className="mt-[3rem]">
              <h2 className="oswald-font mb-[1.5rem] text-[2.2rem] text-blog-text">
                Related Videos
              </h2>
              <div className="grid grid-cols-1 gap-blog-gap md:grid-cols-2">
                {blog.relatedVideos.map((video) =>
                  video.videoId ? (
                    <div
                      key={video.videoId}
                      className="overflow-hidden rounded-[1rem] border border-blog-border bg-blog-surface"
                    >
                      <div className="relative aspect-video w-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.videoId}`}
                          title={video.title || 'Related video'}
                          className="absolute inset-0 h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      </div>
                      <div className="p-[1.4rem]">
                        <p className="text-[1.5rem] text-blog-text">
                          {video.title}
                        </p>
                        {video.channel ? (
                          <p className="mt-[0.4rem] text-[1.2rem] text-blog-muted">
                            {video.channel}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </section>
          ) : null}

          {blog.sources?.length ? (
            <section className="mt-[3rem]">
              <h2 className="oswald-font mb-[1.2rem] text-[2.2rem] text-blog-text">
                Sources
              </h2>
              <ul className="space-y-[0.8rem]">
                {blog.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[1.4rem] text-blog-muted underline underline-offset-4 transition-colors duration-blog hover:text-blog-text"
                    >
                      {source.title || source.url}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
      </main>
    </>
  )
}

export default BlogDetailView
