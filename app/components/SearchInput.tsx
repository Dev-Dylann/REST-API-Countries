"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchInput() {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(query: string) {
        const params = new URLSearchParams(searchParams);

        if (query) {
            params.set('query', query.trim().toLowerCase());
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <input type="text" className="shadow w-full px-5 py-4 bg-white rounded-lg focus:outline-0 dark:bg-dark-elements" placeholder="Search for a country" onChange={(e) => {
            handleSearch(e.target.value);
        }} />
    )
}