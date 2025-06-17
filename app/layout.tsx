import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project 1',
  description: 'Players only project 1',
  generator: 'next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
