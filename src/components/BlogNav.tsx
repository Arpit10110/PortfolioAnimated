'use client'

import { TOPIC_GROUPS } from '@/utils/topics'

type BlogNavProps = {
  search: string
  topic: string
  onSearchChange: (value: string) => void
  onTopicChange: (value: string) => void
}

const BlogNav = ({
  search,
  topic,
  onSearchChange,
  onTopicChange,
}: BlogNavProps) => {
  return (
    <nav className="flex w-full flex-col gap-[1.4rem] px-blog-nav-x pb-[2.5rem] pt-[1.5rem] md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-[58rem]">
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search blogs..."
          autoComplete="off"
          className="blog-dark-input w-full rounded-[1rem] border border-blog-border bg-[#0d0d0d] px-[1.6rem] py-[1.15rem] text-[1.5rem] text-blog-text outline-none transition-all duration-blog placeholder:text-blog-muted focus:border-blog-muted focus:bg-[#121212]"
        />
      </div>

      <select
        value={topic}
        onChange={(event) => onTopicChange(event.target.value)}
        className="blog-dark-input w-full rounded-[1rem] border border-blog-border bg-[#0d0d0d] px-[1.5rem] py-[1.15rem] text-[1.45rem] text-blog-text outline-none transition-all duration-blog focus:border-blog-muted md:w-auto md:min-w-[22rem]"
      >
        <option value="all">Show all blogs</option>
        {TOPIC_GROUPS.map((group) => (
          <option key={group.id} value={group.id}>
            {group.id.charAt(0).toUpperCase() + group.id.slice(1)}
          </option>
        ))}
      </select>
    </nav>
  )
}

export default BlogNav
