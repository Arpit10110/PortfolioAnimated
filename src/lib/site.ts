export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arpitdev.sbs'

export const SITE_NAME = 'Arpit Agrahari'
export const SITE_TITLE = 'Arpit Agrahari - Full Stack Developer | Portfolio'
export const SITE_DESCRIPTION =
  'Official portfolio of Arpit Agrahari, a Full Stack Developer & Software Engineer specializing in React, Next.js, Node.js, TypeScript, and MongoDB. Explore cutting-edge web projects, real-world experience, and insightful tech blogs.'
export const SITE_KEYWORDS = [
  'Arpit Agrahari',
  'Arpit Dev',
  'arpitdev',
  'arpitdev.sbs',
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Developer',
  'Next.js Developer',
  'Node.js Developer',
  'TypeScript Developer',
  'JavaScript Engineer',
  'Software Engineer Portfolio',
  'Frontend Developer',
  'Backend Developer',
  'Web Development',
  'Tech Blogs',
  'Modern Web Apps',
]

export const DEFAULT_OG_IMAGE = `${SITE_URL}/portfolioImg.png`
export const TWITTER_HANDLE = '@ArpitAgrahari26'

export const SOCIAL_PROFILES = {
  github: 'https://github.com/Arpit10110',
  linkedin: 'https://www.linkedin.com/in/arpit-agrahari-54aa192a1/',
  twitter: 'https://x.com/ArpitAgrahari26',
  instagram: 'https://www.instagram.com/___arpit_._/',
  facebook: 'https://www.facebook.com/arpit.agrahari.5',
}

export const absoluteUrl = (path = '/') => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
