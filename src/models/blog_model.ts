import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    blog: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'general',
      index: true,
    },
    summary: {
      type: String,
      default: '',
    },
    heroImage: {
      type: String,
      default: '',
    },
    estimatedReadMinutes: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
)

export const BlogModel = mongoose.models.Blog || mongoose.model('Blog', Schema)
