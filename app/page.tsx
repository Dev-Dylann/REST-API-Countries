import CountryCard from "./components/CountryCard";
import RegionFilter from "./components/RegionFilter";

export default async function Home() {

  const data = await fetch('https://restcountries.com/v3.1/all?fields=name,nativename,population,region,subregion,capital,tld,currencies,languages,borders,flags')
  const countries: Country[] = await data.json()

  return (
    <section className="px-5 py-8 flex flex-col items-center gap-8">
      <input type="text" className="shadow w-full px-5 py-4 bg-white rounded-lg focus:outline-0 dark:bg-dark-elements" placeholder="Search for a country" />

      <RegionFilter />

      <article className="flex flex-col gap-8 items-center px-5">
        {countries.map((country, index) => <CountryCard key={`country${index}`} country={country} />)}

      </article>
    </section>
  );
}
