export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://arpitdev.vercel.app'

export const SITE_NAME = 'Arpit Agrahari'
export const SITE_TITLE = 'Arpit Agrahari - Full Stack Developer'
export const SITE_DESCRIPTION =
  'Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore projects, experience, and tech blogs by Arpit Agrahari.'
export const SITE_KEYWORDS = [
  'Arpit Agrahari',
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Developer',
  'Next.js Developer',
  'Node.js',
  'MongoDB',
  'TypeScript',
  'Web Development',
  'Portfolio',
  'Tech Blog',
]

export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.jpg`
export const TWITTER_HANDLE = '@arpitagrahari'

export const absoluteUrl = (path = '/') => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
