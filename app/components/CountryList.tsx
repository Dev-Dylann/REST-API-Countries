"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"

type CountryListProps = {
    countries: Country[]
}

export default function CountryList({ countries }: CountryListProps) {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')

    const [filteredCountries, setFilteredCountries] = useState(countries)

    useEffect(() => {
        if (query !== null) {
            const filtered = countries.filter((country) => {
                return country.name.common.toLowerCase().includes(query) || country.name.official.toLowerCase().includes(query)
            })

            setFilteredCountries(filtered)
        } else {
            setFilteredCountries(countries)
        }

    }, [query])

    return (
        <article className="flex flex-col gap-8 items-center px-5">
            {filteredCountries.map((country, index) => <CountryCard key={`country${index}`} country={country} />)}

        </article>
    )
}