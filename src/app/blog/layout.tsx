import type { Metadata } from 'next'
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
} from '@/lib/site'

const blogTitle = `Tech Blog | ${SITE_NAME}`
const blogDescription =
  'Read the latest tech blogs on AI, programming, cybersecurity, startups, gaming, and more — written by Full Stack Developer Arpit Agrahari.'

export const metadata: Metadata = {
  title: {
    absolute: blogTitle,
  },
  description: blogDescription,
  keywords: [
    'tech blog',
    'AI news',
    'programming blog',
    'cybersecurity',
    'startups',
    'Arpit Agrahari blog',
    'web development articles',
  ],
  alternates: {
    canonical: absoluteUrl('/blog'),
  },
  openGraph: {
    title: blogTitle,
    description: blogDescription,
    url: absoluteUrl('/blog'),
    siteName: `${SITE_NAME} Portfolio`,
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: blogTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: blogTitle,
    description: blogDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
