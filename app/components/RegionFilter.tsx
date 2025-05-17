"use client"

import { useState } from "react"

export default function RegionFilter() {

    const [filter, setFilter] = useState('')
    const [openFilter, setOpenFilter] = useState(false)

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]

    return (
        <div className="bg-white px-5 py-4 shadow self-start flex justify-between items-center rounded-lg relative w-2/3 max-w-[250px]" onClick={() => setOpenFilter(prev => !prev)}>
            <p className="">{filter || "Filter by region"}</p>

            &#8964;

            {openFilter && (
                <div className="bg-white shadow rounded-lg flex flex-col gap-2 absolute px-5 py-3 top-[110%] left-0 w-full">
                    <ul>
                        {regions.map((region) => (
                            <li className="px-5 py-2" key={region} onClick={() => setFilter(region)}>{region}</li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    )
}