'use client'

import BlogImage from '@/components/BlogImage'
import type { BlogContentBlock } from '@/types/blog'

type BlogContentProps = {
  blocks: BlogContentBlock[]
}

const BlogContent = ({ blocks }: BlogContentProps) => {
  if (!blocks.length) {
    return (
      <p className="poppins-font text-[1.6rem] text-blog-muted">
        Content coming soon.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-[2rem]">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={`${block.type}-${index}`}
              className="oswald-font text-[2.4rem] text-blog-text below-mob:text-[2rem]"
            >
              {block.content}
            </h2>
          )
        }

        if (block.type === 'paragraph') {
          return (
            <p
              key={`${block.type}-${index}`}
              className="poppins-font text-[1.6rem] leading-relaxed text-blog-muted"
            >
              {block.content}
            </p>
          )
        }

        if (block.type === 'image') {
          return (
            <figure
              key={`${block.type}-${index}`}
              className="overflow-hidden rounded-blog border border-blog-border"
            >
              <BlogImage
                src={block.url}
                alt={block.caption || 'Blog image'}
                className="h-auto w-full object-cover"
              />
              {block.caption ? (
                <figcaption className="bg-blog-surface px-[1.2rem] py-[0.8rem] text-[1.2rem] text-blog-muted">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          )
        }

        if (block.type === 'bullet_list') {
          return (
            <ul
              key={`${block.type}-${index}`}
              className="list-disc space-y-[0.8rem] pl-[2rem] text-[1.5rem] text-blog-muted"
            >
              {block.items.map((item, itemIndex) => (
                <li key={`${index}-${itemIndex}`}>{item}</li>
              ))}
            </ul>
          )
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={`${block.type}-${index}`}
              className="rounded-blog border-l-4 border-blog-accent bg-blog-surface px-[1.5rem] py-[1.2rem]"
            >
              <p className="poppins-font text-[1.6rem] italic text-blog-text">
                {block.content}
              </p>
              {block.author ? (
                <cite className="mt-[0.8rem] block text-[1.3rem] text-blog-muted not-italic">
                  — {block.author}
                </cite>
              ) : null}
            </blockquote>
          )
        }

        return null
      })}
    </div>
  )
}

export default BlogContent
