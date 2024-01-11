import Canvas from '@/components/Canvas'
import Divider from '@/components/Divider'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'
import { Config } from './Config'
import Link from 'next/link'

export default function page() {
    return (
        <Canvas>
            <section className="my-10 mt-14">
                <div className='sm:grid grid-flow-col grid-cols-2'>
                    <div className='col-span-1'>
                        <Title Title={'Gears'} Description={'Software, Setup etc.'} />
                    </div>
                    <p className='text-2xl text-neutral-400 dark:text-neutral-500'>
                        Check out the list of hardware and software that I currently use professionally and personally.
                    </p>
                </div>
            </section>
            <Divider />
            <section className="my-10">
                <div className='sm:grid grid-cols-5 grid-flow-col gap-5'>
                    <Image src='/image/IMG_0354.jpg' alt='desk setup' width={1000} height={1000} className='mb-10 rounded-xl col-span-2' priority />
                    <div className='prose dark:prose-invert col-span-3'>
                        <div>
                            <h1>Computer & Hardware</h1>
                            <ul>
                                {Config.hardware.map((h) => {
                                    return (
                                        <li key={h.Spec}>
                                            <span className="flex flex-wrap gap-2">
                                                {h.Category}: {h.Spec} {h.link == '' ?
                                                    (
                                                        <span className='no-underline px-1 border border-neutral-500 rounded text-neutral-500 cursor-not-allowed'>Buy now</span>
                                                    )
                                                    :
                                                    (
                                                        <Link className='no-underline px-1 border border-emerald-500 rounded text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950' target='_blank' href={h.link}>Buy now</Link>
                                                    )
                                                }
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h1>Instruments</h1>
                            <ul>
                                {Config.instruments.map((h) => {
                                    return (
                                        <li key={h.Spec}>
                                            <span className="flex flex-wrap gap-2">
                                                {h.Category}: {h.Spec} {h.link == '' ?
                                                    (
                                                        <span className='no-underline px-1 border border-neutral-500 rounded text-neutral-500 cursor-not-allowed'>Buy now</span>
                                                    )
                                                    :
                                                    (
                                                        <Link className='no-underline px-1 border border-emerald-500 rounded text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950' target='_blank' href={h.link}>Buy now</Link>
                                                    )
                                                }
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Canvas >
    )
}
