import { connectDB } from '@/db/db'
import { BlogModel } from '@/models/blog_model'
import { toBlogListItem } from '@/utils/parseBlog'
import { NextResponse } from 'next/server'

const DEFAULT_LIMIT = 10

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const topic = (searchParams.get('topic') || 'all').toLowerCase()
  const search = (searchParams.get('search') || '').trim().toLowerCase()
  const page = Math.max(1, Number(searchParams.get('page') || 1))
  const limit = Math.max(
    1,
    Math.min(50, Number(searchParams.get('limit') || DEFAULT_LIMIT))
  )
  const skip = (page - 1) * limit

  try {
    await connectDB()

    const docs = await BlogModel.find({}).sort({ createdAt: -1 }).lean()
    let blogs = docs.map((doc) => toBlogListItem(doc as never))

    if (topic !== 'all') {
      blogs = blogs.filter(
        (blog) =>
          blog.category === topic ||
          blog.category.includes(topic) ||
          topic.includes(blog.category)
      )
    }

    if (search) {
      blogs = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search) ||
          blog.summary.toLowerCase().includes(search) ||
          blog.category.toLowerCase().includes(search)
      )
    }

    const total = blogs.length
    const totalPages = Math.max(1, Math.ceil(total / limit))
    const safePage = Math.min(page, totalPages)
    const safeSkip = (safePage - 1) * limit
    const paginatedBlogs = blogs.slice(safeSkip, safeSkip + limit)

    return NextResponse.json({
      success: true,
      blogs: paginatedBlogs,
      total,
      page: safePage,
      limit,
      totalPages,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching blogs',
        blogs: [],
        total: 0,
        page: 1,
        limit: DEFAULT_LIMIT,
        totalPages: 1,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
