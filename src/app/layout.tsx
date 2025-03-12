import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
export const metadata: Metadata = {
  title: "Arpit Agrahari - Full Stack Developer",
  description: "Full Stack Developer | Passionate about Web Development, React, Next.js, and scalable solutions.",
  keywords: "Arpit Agrahari, MERN Stack Developer, React Developer, Next.js, Web Development, Full Stack Engineer, JavaScript, TypeScript, Node.js, MongoDB, Tailwind CSS",
  openGraph: {
    title: "Arpit Agrahari - Full Stack Developer",
    description: "Building scalable web apps using React, Next.js, Node.js, and MongoDB.",
    url: "https://arpitdev.vercel.app",
    siteName: "Arpit Agrahari Portfolio",
    images: [
      {
        url: "https://arpitdev.vercel.app/favicon.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Arpit Agrahari - Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Agrahari - MERN Stack Developer",
    description: "MERN Full Stack Developer | Passionate about Web Development, React, Next.js, and scalable solutions.",
    images: ["https://arpitdev.vercel.app/favicon.jpg"], // Make sure this image exists
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="G2swBI0MBGznGNU4S18HR_g2urdYQdP1KsL0fGd7-sM" />
        <link rel="canonical" href="https://arpitdev.vercel.app" />
        <meta name="publisher" content="Arpit Agrahari" />
        <meta name="author" content="Arpit Agrahari" />
        <meta name="theme-color" content="#FF6F38" />
          
          {/* Favicon */}
          <link rel="icon" href="https://arpitdev.vercel.app/favicon.jpg" sizes="any" />
          <link rel="apple-touch-icon" href="https://arpitdev.vercel.app/favicon.jpg" />
          <link rel="shortcut icon" href="https://arpitdev.vercel.app/favicon.jpg" type="image/x-icon" />

        {/* ✅ Ensure Google Indexing */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Arpit Agrahari - MERN Stack Developer" />
        <meta property="og:description" content="Building scalable web apps using React, Next.js, Node.js, and MongoDB." />
        <meta property="og:image" content="/favicon.jpg" />
        <meta property="og:url" content="https://arpitdev.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arpit Agrahari - MERN Stack Developer" />
        <meta name="twitter:description" content="MERN Full Stack Developer | Passionate about Web Development, React, Next.js, and scalable solutions." />
        <meta name="twitter:image" content="/favicon.jpg" />


        <title>Arpit Agrahari - Full Stack Developer</title>
      </head>
      <body>
        <Suspense fallback={<Loading/>} >
        {children}
        </Suspense>
      </body>
    </html>
  );
}
