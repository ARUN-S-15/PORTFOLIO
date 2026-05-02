import './globals.css'
import type { Metadata } from 'next'
import CustomCursor from '@/components/CustomCursor'
import ParticleBackground from '@/components/ParticleBackground'
import ScrollProgress from '@/components/ScrollProgress'
import PageLoader from '@/components/PageLoader'

export const metadata: Metadata = {
  title: 'Arun S - Machine Learning Developer',
  description: 'Portfolio of Arun S - Aspiring MLOps Engineer with expertise in AI, Machine Learning, and full-stack development',
  keywords: ['Arun S', 'Machine Learning', 'MLOps', 'AI', 'Portfolio', 'Web Development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <ParticleBackground />
        {children}
      </body>
    </html>
  )
}
