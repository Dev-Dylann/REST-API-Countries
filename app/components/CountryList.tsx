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
    const region = searchParams.get('region')

    const [filteredCountries, setFilteredCountries] = useState(countries)

    useEffect(() => {
        if (query || region) {
            const filtered = countries.filter((country) => {
                const matchesQuery = query
                    ? country.name.common.toLowerCase().includes(query) ||
                    country.name.official.toLowerCase().includes(query)
                    : true;

                const matchesRegion = region
                    ? country.region.toLowerCase() === region.toLowerCase()
                    : true;

                return matchesQuery && matchesRegion;
            });

            setFilteredCountries(filtered);
        } else {
            setFilteredCountries(countries);
        }
    }, [query, region, countries]);


    return (
        <article className="flex flex-col gap-8 items-center px-5 md:px-10 md:grid md:grid-cols-2 md:gap-10 md:items-start">
            {filteredCountries.length !== 0 ? (
                filteredCountries.map((country, index) => <CountryCard key={`country${index}`} country={country} />)
            ) : (
                <p className="text-xl text-center">No countries matched your search</p>
            )}

        </article>
    )
}