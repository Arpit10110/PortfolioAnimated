import { connectDB } from '@/db/db'
import { BlogModel } from '@/models/blog_model'
import { toBlogDetail, toBlogListItem } from '@/utils/parseBlog'
import type { BlogDetail, BlogListItem } from '@/types/blog'

export const getBlogById = async (id: string): Promise<BlogDetail | null> => {
  try {
    await connectDB()
    const doc = await BlogModel.findById(id).lean()
    if (!doc) return null
    return toBlogDetail(doc as never)
  } catch {
    return null
  }
}

export const getAllBlogListItems = async (): Promise<BlogListItem[]> => {
  try {
    await connectDB()
    const docs = await BlogModel.find({}).sort({ createdAt: -1 }).lean()
    return docs.map((doc) => toBlogListItem(doc as never))
  } catch {
    return []
  }
}

export const getBlogSitemapEntries = async () => {
  try {
    await connectDB()
    const docs = await BlogModel.find({})
      .select('_id updatedAt createdAt')
      .sort({ createdAt: -1 })
      .lean()

    return docs.map((doc) => ({
      id: String(doc._id),
      lastModified: (doc as { updatedAt?: Date }).updatedAt || doc.createdAt || new Date(),
    }))
  } catch {
    return []
  }
}
