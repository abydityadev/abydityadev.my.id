import React from 'react'

export default function Title({ Title, Description }: { Title: String, Description: String }) {
    return (
        <div className='group mb-10 sm:mb-0'>
            <span className='absolute m-0 inline -ml-10'>
                <p className={"text-amber-500 opacity-100 sm:opacity-0 group-hover:opacity-100 text-3xl duration-100"}>✱</p>
            </span>
            <h1 className='text-3xl font-bold'>
                {Title}
            </h1>
            <h1 className='text-3xl font-bold text-neutral-500'>
                {Description}
            </h1>
        </div>
    )
}
