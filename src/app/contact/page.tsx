'use client'

import Canvas from '@/components/Canvas'
import Divider from '@/components/Divider'
import Title from '@/components/Title'
import React from 'react'
import { Form } from './components/Form'

export default function page() {


    return (
        <Canvas>
            <section className="my-16">
                <Title Title={'Contact'} Description={'Get in touch!'} />
                <Divider />
                <form action="" className='mt-5'>
                    <div className="grid grid-cols-2 gap-5">
                        <Form placeholder='Name' type='text' required />
                        <Form placeholder='Email' type='email' required />
                    </div>
                    <Form placeholder='Subject' type='email' required />
                    <div className="py-2">
                        <p>Message <span className='text-indigo-500'>*</span></p>
                        <textarea placeholder={"Message"} rows={5} className='w-full p-3 bg-transparent border border-neutral-400 dark:border-neutral-700 rounded-lg' />
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-dark dark:bg-light text-light dark:text-dark px-10 py-4 rounded-full duration-300'>Under Maintenance</button>
                    </div>
                </form>
            </section>
        </Canvas>
    )
}