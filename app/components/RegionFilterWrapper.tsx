"use client"

import { Suspense } from "react"
import RegionFilter from "./RegionFilter"

export default function RegionFilterWrapper() {
    return (
        <Suspense>
            <RegionFilter />
        </Suspense>
    )
}