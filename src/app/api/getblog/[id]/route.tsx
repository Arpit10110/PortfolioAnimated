import { connectDB } from '@/db/db'
import { BlogModel } from '@/models/blog_model'
import { toBlogDetail } from '@/utils/parseBlog'
import { NextResponse } from 'next/server'

type Params = {
  params: Promise<{ id: string }>
}

export const GET = async (_request: Request, { params }: Params) => {
  try {
    const { id } = await params
    await connectDB()

    const doc = await BlogModel.findById(id).lean()
    if (!doc) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      blog: toBlogDetail(doc as never),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching blog',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
