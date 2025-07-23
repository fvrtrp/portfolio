import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sesh - Browser Extension | fvrtrp',
  description: 'Sesh is a powerful browser extension that transforms your new tab page into a personal dashboard and provides intuitive tab/bookmark management through a popup interface.',
  keywords: ['sesh', 'browser extension', 'new tab', 'tab management', 'bookmarks', 'chrome extension'],
}

interface SeshLayoutProps {
  children: React.ReactNode
}

export default function SeshLayout({ children }: SeshLayoutProps) {
  return <>{children}</>
} 