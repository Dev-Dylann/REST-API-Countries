import CountryList from "./components/CountryList";
import RegionFilter from "./components/RegionFilter";
import SearchInput from "./components/SearchInput";

// type HomepageProps = {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>,
// }

export default async function Home() {

  const data = await fetch('https://restcountries.com/v3.1/all?fields=name,nativename,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3')
  const countries: Country[] = await data.json()

  return (
    <section className="px-5 py-8 flex flex-col items-center gap-8">
      <SearchInput />

      <RegionFilter />

      <CountryList countries={countries} />
    </section>
  );
}
