'use client'

import { useEffect, useState } from 'react'
import DefaultImage from '@/assets/DefaultImage.png'

type BlogImageProps = {
  src?: string | null
  alt: string
  className?: string
}

const fallbackSrc = DefaultImage.src

const isValidImageSrc = (src?: string | null) =>
  Boolean(src && src !== 'generate_image' && src.trim() !== '')

const resolveSrc = (src?: string | null) =>
  isValidImageSrc(src) ? (src as string) : fallbackSrc

const BlogImage = ({ src, alt, className = '' }: BlogImageProps) => {
  const [imageSrc, setImageSrc] = useState(() => resolveSrc(src))

  useEffect(() => {
    setImageSrc(resolveSrc(src))
  }, [src])

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc)
        }
      }}
    />
  )
}

export default BlogImage
