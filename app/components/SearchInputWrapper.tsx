"use client"

import { Suspense } from "react";
import SearchInput from "./SearchInput";

export default function SearchInputWrapper() {
    return (
        <Suspense>
            <SearchInput />
        </Suspense>
    )
}