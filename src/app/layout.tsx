import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/utilities.css'
import Provider from './provider'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Abyan Raditya',
  description: '💫 An online portfolio and blog by Abyan. Showcase of my projects, and some of my thoughts about website development.',
  referrer: 'origin-when-cross-origin',
  keywords: ['abyditya', 'abydityadev', 'abyan raditya'],
  metadataBase: new URL('https://acme.com'),
  openGraph: {
    siteName: 'abydityadev.my.id',
    title: 'Abyan Raditya',
    description: '💫 An online portfolio and blog by Abyan. Showcase of my projects, and some of my thoughts about website development.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"bg-light dark:bg-dark text-dark dark:text-light font-base duration-300"}>
        <Provider>
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  )
}
