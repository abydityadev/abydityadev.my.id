'use client'

import Canvas from '@/components/Canvas'
import Divider from '@/components/Divider'
import Title from '@/components/Title'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
    const [repo, setRepo] = useState<Repository[]>([]);

    useEffect(() => {
        fetch(
            "https://api.github.com/users/abydityadev/repos?sort=created&direction=desc"
        )
            .then((res) => res.json())
            .then((data: any) => {
                if (Array.isArray(data)) setRepo(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <Canvas>
            <section className="my-16">
                <Title Title={'Projects'} Description={'Things i′ve done on Github 💡'} />
                <Divider />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {repo.map((r) => {
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
            </section>
        </Canvas>
    )
}
