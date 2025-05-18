"use client"

export default function ThemeToggler() {

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
    }

    return (
        <button className="border font-medium dark:text-white" onClick={toggleDarkMode}>Dark Mode</button>
    )
}