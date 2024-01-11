import React, { PropsWithChildren } from 'react'
import { Navigation } from './Navbar/Navigation'
import Footer from './Footer/Footer'

export default function Canvas({ children }: PropsWithChildren) {
    return (
        <main>
            <Navigation />
            <section className='max-w-3xl mx-auto px-3 xl:px-0'>
                {children}
            </section>
            <hr className='pb-10  border-t border-t-neutral-700' />
            <Footer />
        </main>
    )
}
