'use client'

type BlogPaginationProps = {
  page: number
  totalPages: number
  total: number
  onPageChange: (page: number) => void
}

const BlogPagination = ({
  page,
  totalPages,
  total,
  onPageChange,
}: BlogPaginationProps) => {
  if (total <= 10) return null

  const canGoPrev = page > 1
  const canGoNext = page < totalPages

  return (
    <div className="mt-[2rem] flex flex-col items-center gap-[1.5rem] px-blog-nav-x pb-[5rem]">
      <p className="poppins-font text-[1.3rem] text-blog-muted">
        Page {page} of {totalPages} · {total} blogs
      </p>

      <div className="flex flex-wrap items-center justify-center gap-[1rem]">
        <button
          type="button"
          disabled={!canGoPrev}
          onClick={() => onPageChange(page - 1)}
          className="rounded-[0.9rem] border border-blog-border bg-blog-surface px-[1.6rem] py-[0.9rem] text-[1.4rem] text-blog-text transition-colors duration-blog hover:bg-blog-surface-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        <div className="flex flex-wrap items-center justify-center gap-[0.6rem]">
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1
            const isActive = pageNumber === page

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => onPageChange(pageNumber)}
                className={`min-w-[3.6rem] rounded-[0.9rem] border px-[1rem] py-[0.8rem] text-[1.4rem] transition-colors duration-blog ${
                  isActive
                    ? 'border-blog-accent bg-blog-accent text-black'
                    : 'border-blog-border bg-blog-surface text-blog-text hover:bg-blog-surface-hover'
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
          onClick={() => onPageChange(page + 1)}
          className="rounded-[0.9rem] border border-blog-border bg-blog-surface px-[1.6rem] py-[0.9rem] text-[1.4rem] text-blog-text transition-colors duration-blog hover:bg-blog-surface-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default BlogPagination
