import CountryList from "./components/CountryList";
import RegionFilter from "./components/RegionFilter";
import SearchInput from "./components/SearchInput";
import { Suspense } from "react";

export default async function Home() {

  const data = await fetch('https://restcountries.com/v3.1/all?fields=name,nativename,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3')
  const countries: Country[] = await data.json()

  return (
    <section className="px-5 py-8 flex flex-col items-center gap-8 md:px-10 lg:px-20 xl:max-w-[1350px] xl:mx-auto">
      <div className="flex flex-col gap-8 w-full lg:flex-row lg:justify-between">
        <Suspense>
          <SearchInput />
        </Suspense>

        <Suspense>
          <RegionFilter />
        </Suspense>
      </div>

      <CountryList countries={countries} />
    </section>
  );
}
