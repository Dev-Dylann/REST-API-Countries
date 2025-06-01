"use client"

import { useEffect, useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { Suspense } from "react"

export default function RegionFilter() {

    const [filter, setFilter] = useState('')
    const [openFilter, setOpenFilter] = useState(false)
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]

    const handleRegionChange = (region: string) => {
        const params = new URLSearchParams(searchParams)

        params.set('region', region);

        replace(`${pathname}?${params.toString()}`);
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams)

        const region = params.get('region')

        setFilter(region ?? '')
    }, [])

    return (
        <Suspense>
            <div className="bg-white px-5 py-4 shadow self-start flex justify-between items-center rounded-lg relative w-2/3 max-w-[250px] font-semibold dark:bg-dark-elements cursor-pointer" onClick={() => setOpenFilter(prev => !prev)}>
                <p className="">{filter || "Filter by region"}</p>

                <ChevronDownIcon className="h-5 w-5" />

                {openFilter && (
                    <div className="bg-white shadow rounded-lg flex flex-col gap-2 absolute py-3 top-[110%] left-0 w-full dark:bg-dark-elements z-10">
                        <ul>
                            {regions.map((region) => (
                                <li className="px-5 py-2 hover:bg-light-bg dark:hover:bg-dark-bg" key={region} onClick={() => {
                                    handleRegionChange(region)
                                    setFilter(region)
                                }}>{region}</li>
                            ))}
                        </ul>

                    </div>
                )}
            </div>
        </Suspense>
    )
}