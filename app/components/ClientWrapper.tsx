"use client"

import { Suspense } from "react";
import SearchInput from "./SearchInput";
import RegionFilter from "./RegionFilter";
import CountryList from "./CountryList";

type ClientWrapperProps = {
    countries: Country[],
}

export default function ClientWrapper({ countries }: ClientWrapperProps) {
    return (
        <Suspense>
            <div className="flex flex-col gap-8 w-full lg:flex-row lg:justify-between">
                <SearchInput />

                <RegionFilter />
            </div>

            <CountryList countries={countries} />
        </Suspense>
    )
}