"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDebouncedCallback } from "use-debounce";
import { Suspense } from "react";

export default function SearchInput() {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const [inputValue, setInputValue] = useState('')

    const handleSearch = useDebouncedCallback((query: string) => {
        const params = new URLSearchParams(searchParams);

        if (query) {
            params.set('query', query.trim().toLowerCase());
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 500)

    const clearQuery = () => {
        handleSearch('')
        setInputValue('')
    }

    return (
        <Suspense>
            <form className="shadow w-full px-5 py-4 bg-white rounded-lg dark:bg-dark-elements flex gap-4 items-center lg:max-w-[512px]" onSubmit={(e) => e.preventDefault()}>
                <MagnifyingGlassIcon className="h-5 w-5 text-light-input" />

                <input type="text" className="focus:outline-0 grow" placeholder="Search for a country" value={inputValue} onChange={(e) => {
                    handleSearch(e.target.value);
                    setInputValue(e.target.value);
                }} />

                {inputValue && <button onClick={clearQuery}><XMarkIcon className="h-5 w-5 text-light-input" /></button>}
            </form>
        </Suspense>
    )
}