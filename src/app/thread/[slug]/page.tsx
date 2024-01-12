import React from 'react'
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from 'next-contentlayer/hooks';
import Footer from '@/components/Footer/Footer';
import type { MDXComponents } from "mdx/types";
import { BlogNav } from '@/components/Navbar/Navigation';
import Divider from '@/components/Divider';


const mdxComponents: MDXComponents = {};

export default function Page({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    const Content = getMDXComponent(post?.body.code)

    return (
        <main>
            <BlogNav />
            <section className='max-w-3xl mx-auto px-3 xl:px-0'>
                <section className="my-16">
                    <header >
                        <p className='text-xs clear-start flex gap-3'>thread <span>/</span> {new Intl.DateTimeFormat("en-US", { dateStyle: 'long' }).format(new Date(post?.date))}</p>
                        <h1 className='sm:text-8xl text-4xl font-black'>{post?.title}</h1>
                        <p className='flex gap-5'>{post?.readTimeMinutes} min reads <span className='text-indigo-500'>{post?.tags}</span></p>
                    </header>
                    <Divider />
                    <article className='prose dark:prose-invert xl:prose-xl'>
                        <Content components={mdxComponents} />
                    </article>
                </section>
            </section>
            <hr className='pb-10  border-t border-t-neutral-700' />
            <Footer />
        </main >
    )
}

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }));