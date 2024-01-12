'use client'

import { Config } from './Config'
import { Moon, Sun, Text } from 'lucide-react'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

export function Navigation() {
    const pathname = usePathname();
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [Mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!Mounted) {
        return null;
    }

    return (
        <nav className='sticky top-0 border-b border-b-neutral-700 bg-light dark:bg-dark duration-300 z-50'>
            <div className='max-w-3xl mx-auto flex justify-between items-center py-5 px-3 xl:px-0'>
                {/* Navbar name */}
                <h1 className='text-2xl font-bold'>abyditya.</h1>

                {/* Navbar paths */}
                <ul className='hidden sm:flex gap-5'>
                    {Config.map((map, idx) => {
                        return (
                            <li key={idx}>
                                <Link className={pathname == map.path ? 'font-medium text-neutral-600 dark:text-neutral-400' : 'font-medium'} href={map.path}>{map.label}</Link>
                            </li>
                        )
                    })}
                </ul>
                {/* Navbar utilities */}
                <ul className='flex items-center gap-3'>
                    <li>
                        {/* Theme changer */}
                        <button
                            onClick={() => (setTheme(resolvedTheme === 'light' ? 'dark' : 'light'))}
                            className='p-2 rounded border border-neutral-400 dark:border-neutral-600 duration-200 hover:ring-4 ring-neutral-200 dark:ring-neutral-800'>
                            {resolvedTheme == 'light' ? <Moon /> : <Sun />}
                        </button>
                    </li>
                    <li>
                        {/* Burger button for mobile */}
                        <button
                            onClick={() => setOpen(prev => !prev)}
                            className='p-2 rounded duration-200 hover:ring-4 ring-neutral-200 dark:ring-neutral-800 block sm:hidden'>
                            <Text />
                        </button>
                    </li>
                </ul>
            </div>
            {open && (
                <div className='block sm:hidden absolute'>
                    <div className='bg-light dark:bg-dark duration-300 w-screen h-screen px-4 xl:px-0'>
                        <ul className='py-8'>
                            {Config.map((path, idx) => {
                                return (
                                    <li className='py-3' key={idx}>
                                        <Link className={pathname == path.path ? 'text-4xl font-bold text-neutral-500' : 'text-4xl font-bold'} href={path.path}>{path.label}</Link>
                                        <hr className='border-t border-t-neutral-400 dark:border-t-neutral-700 my-2' />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
            }
        </nav >
    )
}

export function BlogNav({ post }: { post: string }) {
    const pathname = usePathname();
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [Mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!Mounted) {
        return null;
    }

    return (
        <nav className='sticky top-0 border-b border-b-neutral-700 bg-light dark:bg-dark duration-300 z-50'>
            <div className='max-w-3xl mx-auto flex justify-between items-center py-5 px-3 xl:px-0'>
                {/* Navbar name */}
                <Link href={'/thread'}>← Back</Link>

                <p className='hidden sm:block'>Thread / {post}</p>
                {/* Navbar utilities */}
                <ul className='flex items-center gap-3'>
                    <li>
                        {/* Theme changer */}
                        <button
                            onClick={() => (setTheme(resolvedTheme === 'light' ? 'dark' : 'light'))}
                            className='p-2 rounded border border-neutral-400 dark:border-neutral-600 duration-200 hover:ring-4 ring-neutral-200 dark:ring-neutral-800'>
                            {resolvedTheme == 'light' ? <Moon /> : <Sun />}
                        </button>
                    </li>
                </ul>
            </div>
        </nav >
    )
}