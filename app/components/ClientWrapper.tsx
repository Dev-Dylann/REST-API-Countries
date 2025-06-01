"use client"

import { Suspense } from "react";
import RegionFilter from "./RegionFilter";
import SearchInput from "./SearchInput";

export default function ClientWrapper() {
    return (
        <div className="flex flex-col gap-8 w-full lg:flex-row lg:justify-between">
            <Suspense>
                <SearchInput />
            </Suspense>

            <Suspense>
                <RegionFilter />
            </Suspense>
        </div>
    )
}