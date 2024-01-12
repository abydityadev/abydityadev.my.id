'use client'

import Canvas from '@/components/Canvas'
import Link from 'next/link'
import React from 'react'
import { ExternalLink } from 'lucide-react'
import Divider from '@/components/Divider'
import Title from '@/components/Title'
import { allPosts } from "contentlayer/generated";

export default function page() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Canvas>
      <section className="my-10">
        <p className='text-xs flex justify-end font-mono text-neutral-500'>BKS, IDN · 6.2383° S, 106.9756° E</p>
        <h1 className='text-4xl sm:text-8xl font-black text-justify'>ABYAN RADITYA THE DEVELOPER</h1>
        <p className='my-5 max-w-lg text-neutral-600 dark:text-neutral-400 pb-4'>
          I′m a 14 year old web developer from Indonesia 🇮🇩.
          I′m currently studying at a Junior High School, and
          enjoy making websites in NextJS! and playing music,
          especially playing the guitar 🎸
        </p>
        <div className='flex gap-5 items-center'>
          <Link className='px-6 py-2 border border-neutral-950 hover:text-light dark:border-neutral-500 hover:bg-neutral-950 dark:hover:bg-neutral-50 dark:hover:text-dark duration-300' href={'/'}>Blog</Link>
          <Link className='flex gap-2 items-center hover:underline' href={'/Contact'}>
            Contact <ExternalLink size={15} />
          </Link>
        </div>
      </section>
      <Divider />
      <section className="my-10">
        <div className='sm:grid grid-flow-col grid-cols-5 items-center'>
          <div className='col-span-1'>
            <p className='text-neutral-500'>✱ About Me</p>
          </div>
          <div className='col-span-4'>
            <h1 className=' text-5xl sm:text-7xl font-black font-serif'>
              A big fan of Guitar, Coding and Music.
            </h1>
            <p className='mt-5 text-neutral-600 dark:text-neutral-400'>
              Hi, my name is Abyan Raditya, also known as Aby, is an aspiring front-end developer with just 4 years of experience.
              Abyan′s journey began with a solid foundation in HTML, CSS, and JavaScript, enabling him to create basic web pages
              and delve into popular frameworks like TailwindCSS, React, and NextJS.
            </p>
            <br />
            <p className='text-neutral-600 dark:text-neutral-400'>
              I love music! I love The Beatles, Queen, Oasis, Frank Sinatra, Tyler the Creator and many more! My favorite genres are indie pop,
              soft rock, RnB & Jazz. I play musical instruments such as Guitar, Bass, Keyboard & Drums.
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="my-10">
        <div className='sm:flex justify-between items-center'>
          <Title Title={'Latest Posts'} Description={'Prepared especially for you.'} />
          <Link className='px-3 py-1 border border-neutral-400 dark:border-neutral-600 rounded hover:ring-4 ring-neutral-300 dark:ring-neutral-800 duration-200' href={'/thread'}>
            View more →
          </Link>
        </div>
        <div className='grid grid-cols-1 py-10'>
          {posts.map((post, idx) => {
            return (
              <Link key={idx} href={post.url} className='flex justify-between py-3'>
                <span>
                  <h1 className='text-xl font-medium'>{post.title}!</h1>
                  <p className='base font-medium text-neutral-500'>
                    {new Intl.DateTimeFormat("en-US", { dateStyle: 'long' }).format(new Date(post.date))}
                  </p>
                </span>
                <p className='text-neutral-500 hidden sm:block'>{post.readTimeMinutes} min reads</p>
              </Link>
            )
          })}
        </div>
        <p className='text-center text-sm text-neutral-500'>Showing 2 out of <span className='text-amber-700'>{posts.length} posts</span></p>
      </section>
    </Canvas>
  )
}
