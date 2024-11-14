import React from 'react'
import Link from 'next/link'
import "../../../../styles/globals.scss"

interface ILayoutProps {

    children: React.ReactNode
}

export default function layout({ children }: ILayoutProps) {
    return (
        <div>
            <Link href="/" className='link-home'>Volver al Inicio</Link>
            {children}
        </div>
    )
}
