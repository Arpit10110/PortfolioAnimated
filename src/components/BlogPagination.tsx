'use client'

import { useState } from 'react'

type BlogPaginationProps = {
  page: number
  totalPages: number
  total: number
  onPageChange: (page: number) => void
}

type PageItem = number | 'dots-start' | 'dots-end'

const getPageNumbers = (currentPage: number, totalPages: number): PageItem[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // Near the start
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, 'dots-end', totalPages]
  }

  // Near the end
  if (currentPage >= totalPages - 3) {
    return [
      1,
      'dots-start',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]
  }

  // In the middle
  return [
    1,
    'dots-start',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    'dots-end',
    totalPages,
  ]
}

const BlogPagination = ({
  page,
  totalPages,
  total,
  onPageChange,
}: BlogPaginationProps) => {
  const [jumpInput, setJumpInput] = useState('')

  if (totalPages <= 1 || total <= 10) return null

  const canGoPrev = page > 1
  const canGoNext = page < totalPages

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    onPageChange(newPage)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const targetPage = parseInt(jumpInput, 10)
    if (!Number.isNaN(targetPage) && targetPage >= 1 && targetPage <= totalPages) {
      handlePageChange(targetPage)
      setJumpInput('')
    }
  }

  const pageItems = getPageNumbers(page, totalPages)

  return (
    <div className="mt-[3rem] flex flex-col items-center gap-[1.6rem] px-blog-nav-x pb-[5rem]">
      <p className="poppins-font text-[1.3rem] text-blog-muted text-center">
        Page <span className="font-semibold text-blog-text">{page}</span> of{' '}
        <span className="font-semibold text-blog-text">{totalPages}</span> ·{' '}
        <span>{total.toLocaleString()} blogs</span>
      </p>

      <nav
        aria-label="Blog pagination"
        className="flex flex-wrap items-center justify-center gap-[0.6rem] sm:gap-[0.8rem]"
      >
        <button
          type="button"
          disabled={!canGoPrev}
          onClick={() => handlePageChange(page - 1)}
          aria-label="Previous page"
          className="flex items-center gap-[0.6rem] rounded-[0.9rem] border border-blog-border bg-blog-surface px-[1.4rem] py-[0.85rem] text-[1.35rem] font-medium text-blog-text transition-all duration-blog hover:border-blog-muted/50 hover:bg-blog-surface-hover disabled:pointer-events-none disabled:opacity-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[1.4rem] w-[1.4rem]"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-[0.5rem] sm:gap-[0.6rem]">
          {pageItems.map((item) => {
            if (typeof item === 'string') {
              const isStart = item === 'dots-start'
              const jumpTarget = isStart
                ? Math.max(1, page - 5)
                : Math.min(totalPages, page + 5)

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handlePageChange(jumpTarget)}
                  title={isStart ? 'Jump backward 5 pages' : 'Jump forward 5 pages'}
                  aria-label={isStart ? 'Jump backward 5 pages' : 'Jump forward 5 pages'}
                  className="flex h-[3.6rem] min-w-[3.2rem] items-center justify-center rounded-[0.9rem] px-[0.4rem] text-[1.4rem] tracking-widest text-blog-muted transition-colors duration-blog hover:bg-blog-surface-hover hover:text-blog-text"
                >
                  •••
                </button>
              )
            }

            const pageNumber = item
            const isActive = pageNumber === page
            // On very small screens, hide secondary siblings so pagination fits neatly without horizontal overflow
            const isSecondary =
              pageNumber !== 1 &&
              pageNumber !== totalPages &&
              Math.abs(pageNumber - page) > 1

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => handlePageChange(pageNumber)}
                aria-current={isActive ? 'page' : undefined}
                className={`h-[3.6rem] min-w-[3.6rem] items-center justify-center rounded-[0.9rem] border px-[1rem] text-[1.35rem] transition-all duration-blog ${
                  isSecondary ? 'hidden sm:inline-flex' : 'inline-flex'
                } ${
                  isActive
                    ? 'border-blog-accent bg-blog-accent font-semibold text-black shadow-sm'
                    : 'border-blog-border bg-blog-surface text-blog-text hover:border-blog-muted/50 hover:bg-blog-surface-hover'
                }`}
              >
                {pageNumber}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          disabled={!canGoNext}
          onClick={() => handlePageChange(page + 1)}
          aria-label="Next page"
          className="flex items-center gap-[0.6rem] rounded-[0.9rem] border border-blog-border bg-blog-surface px-[1.4rem] py-[0.85rem] text-[1.35rem] font-medium text-blog-text transition-all duration-blog hover:border-blog-muted/50 hover:bg-blog-surface-hover disabled:pointer-events-none disabled:opacity-30"
        >
          <span className="hidden sm:inline">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[1.4rem] w-[1.4rem]"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </nav>

      {totalPages > 7 && (
        <form
          onSubmit={handleJumpSubmit}
          className="mt-[0.2rem] flex items-center gap-[0.8rem] text-[1.3rem] text-blog-muted"
        >
          <span>Go to page</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            placeholder={String(page)}
            className="w-[5.8rem] rounded-[0.8rem] border border-blog-border bg-[#0d0d0d] px-[0.8rem] py-[0.45rem] text-center text-[1.3rem] text-blog-text outline-none transition-colors focus:border-blog-muted"
          />
          <button
            type="submit"
            disabled={
              !jumpInput ||
              Number(jumpInput) === page ||
              Number(jumpInput) < 1 ||
              Number(jumpInput) > totalPages
            }
            className="rounded-[0.8rem] border border-blog-border bg-blog-surface px-[1.2rem] py-[0.45rem] text-[1.25rem] font-medium text-blog-text transition-colors hover:border-blog-muted/50 hover:bg-blog-surface-hover disabled:cursor-not-allowed disabled:opacity-30"
          >
            Go
          </button>
        </form>
      )}
    </div>
  )
}

export default BlogPagination
