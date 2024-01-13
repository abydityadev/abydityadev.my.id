import Canvas from '@/components/Canvas'
import Divider from '@/components/Divider'
import Title from '@/components/Title'
import Link from 'next/link'
import React from 'react'
import { allPosts } from "contentlayer/generated";

export default function page() {
    const posts = allPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <Canvas>
            <section className="my-16">
                <Title Title={'Blogs ' + `(${posts.length})`} Description={'Programming, Life etc'} />
                <Divider />
                <div className='grid grid-cols-1'>
                    {posts.map((post, idx) => {
                        return (
                            <Link key={idx} href={post.url} className='flex justify-between py-3'>
                                <span>
                                    <h1 className='text-xl font-medium'>{post.title}</h1>
                                    <p className='base font-medium text-neutral-500'>
                                        {new Intl.DateTimeFormat("en-US", { dateStyle: 'long' }).format(new Date(post.date))}
                                    </p>
                                </span>
                                <p className='text-neutral-500 hidden sm:block'>{post.readTimeMinutes} min read</p>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </Canvas>
    )
}
