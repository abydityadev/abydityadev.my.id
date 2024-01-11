'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Provider({ children }: React.PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme='dark' attribute='class'>
            {children}
        </ThemeProvider>
    )
}
