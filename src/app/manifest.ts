import type { MetadataRoute } from 'next'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} - Full Stack Developer`,
    short_name: 'ArpitDev',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#070707',
    theme_color: '#070707',
    icons: [
      {
        src: '/favicon.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/favicon.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}

