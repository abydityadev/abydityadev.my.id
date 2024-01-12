'use client'

import Canvas from '@/components/Canvas'
import Divider from '@/components/Divider'
import Title from '@/components/Title'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader, Loader2 } from 'lucide-react'

type Repository = {
    id: number;
    full_name: string;
    name: string;
    html_url: string;
    description: string;
    size: number;
    stargazers_count: number;
};

export default function page() {
    const [data, setData] = useState<Repository[]>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/abydityadev/repos')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (!data) return <p>No profile data</p>

    return (
        <Canvas>
            <section className="my-16">
                <Title Title={'Projects'} Description={'Things i′ve done on Github 💡'} />
                <Divider />
                {isLoading ?
                    (
                        <span className='flex gap-3 items-center text-2xl'>
                            <Loader2 size={15} className='animate-spin' />
                            Processing...
                        </span>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                            {data.map((r) => {
                                return (
                                    <motion.div key={r.id} whileHover={{ scale: 1.03 }} className='border-dashed border-2 border-neutral-500 dark:border-neutral-700 rounded-xl p-5 relative'>
                                        <h1 className='font-bold text-3xl'>{r.name}</h1>
                                        <p className='text-neutral-600 dark:text-neutral-400'>
                                            {r.description}
                                        </p>
                                        <div className='absolute -bottom-3 bg-indigo-500 px-3 rounded font-semibold text-light'>
                                            ⭐ {r.stargazers_count}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    )}
            </section>
        </Canvas>
    )
}
