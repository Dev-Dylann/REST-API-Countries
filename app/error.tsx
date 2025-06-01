'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="py-20 w-fit mx-auto grid grid-flow-row md:grid-cols-2 gap-y-4 gap-x-6">
            <h2 className="text-2xl font-extrabold text-center pb-4 md:col-span-full md:pb-0">Something went wrong!</h2>

            <button className="font-semibold bg-white dark:bg-dark-elements rounded-lg shadow-lg px-6 py-2 cursor-pointer" onClick={() => reset()}>Try again</button>
            <Link href={"/"} className="font-semibold bg-white dark:bg-dark-elements rounded-lg shadow-lg px-6 py-2 text-center">Back to Home</Link>
        </div>
    )
}