import Canvas from '@/components/Canvas'
import Divider from '@/components/Divider'
import Title from '@/components/Title'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <Canvas>
            <section className="my-16">
                <Title Title={'Threads'} Description={'Programming, Life etc'} />
                <Divider />
                <div className='grid grid-cols-1'>
                    <Link href={'/'} className='flex justify-between py-3'>
                        <span>
                            <h1 className='text-xl font-medium'>Hidup ini terlalu banyak kamu!</h1>
                            <p className='base font-medium text-neutral-500'>December 17, 2023</p>
                        </span>
                        <p className='text-neutral-500 hidden sm:block'>1 min read</p>
                    </Link>
                    <Link href={'/'} className='flex justify-between py-3'>
                        <span>
                            <h1 className='text-xl font-medium'>Hidup ini terlalu banyak kamu!</h1>
                            <p className='base font-medium text-neutral-500'>December 17, 2023</p>
                        </span>
                        <p className='text-neutral-500 hidden sm:block'>1 min read</p>
                    </Link>
                </div>
            </section>
        </Canvas>
    )
}
