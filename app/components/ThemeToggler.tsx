"use client"

import { MoonIcon } from "@heroicons/react/24/outline"

export default function ThemeToggler() {

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
    }

    return (
        <button className="font-semibold dark:text-white flex gap-2 py-2 px-2 lg:text-lg lg:items-center lg:gap-3" onClick={toggleDarkMode}>
            <MoonIcon className="h-5 w-5" />
            Dark Mode
        </button>
    )
}