import Canvas from '@/components/Canvas'
import Divider from '@/components/Divider'
import Title from '@/components/Title'
import React from 'react'
import Data from './Data'

export default function page() {

    return (
        <Canvas>
            <section className="my-16">
                <Title Title={'Projects'} Description={'Things i′ve done on Github 💡'} />
                <Divider />
                <Data />
            </section>
        </Canvas>
    )
}
