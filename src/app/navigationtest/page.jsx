"use client"

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavigationTest = () => {

    // CLIENT SIDE NAVIGATION

    const router = useRouter()

    const pathname = usePathname()
    console.log(pathname)

    const searchParams = useSearchParams()
    const q = searchParams.get("q")
    console.log(q)

    const handleClick = () => {
        console.log("clicked")
        router.forward()
    }

    return (
        <div>
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTest