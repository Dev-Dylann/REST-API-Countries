import CountryList from "./components/CountryList";
import RegionFilterWrapper from "./components/RegionFilterWrapper";
import SearchInputWrapper from "./components/SearchInputWrapper";

export default async function Home() {

  const data = await fetch('https://restcountries.com/v3.1/all?fields=name,nativename,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3')
  const countries: Country[] = await data.json()

  return (
    <section className="px-5 py-8 flex flex-col items-center gap-8 md:px-10 lg:px-20 xl:max-w-[1350px] xl:mx-auto">
      <div className="flex flex-col gap-8 w-full lg:flex-row lg:justify-between">
        <SearchInputWrapper />

        <RegionFilterWrapper />
      </div>

      <CountryList countries={countries} />
    </section>
  );
}
