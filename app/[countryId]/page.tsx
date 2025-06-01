import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

type CountryPageProps = {
    params: Promise<{ countryId: string }>,
}

export default async function CountryPage({ params }: CountryPageProps) {

    const { countryId } = await params

    const data = await fetch(`https://restcountries.com/v3.1/alpha/${countryId}?fields=name,nativename,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3`)
    if (!data.ok) {
        throw new Error()
    }

    const country: Country = await data.json()

    // the nativename object contins different language codes so im just getting the first one and using it later on
    const nativeCode = country.name?.nativeName
        ? Object.keys(country.name.nativeName)[0]
        : null;

    // same situation as above
    const currencyCode = country.currencies
        ? Object.keys(country.currencies)[0]
        : null;

    // fetch border countries
    const borderIds = country.borders.join(",")
    const borderData = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderIds}&fields=name,cca3`)
    const borderCountries: Pick<Country, 'name' | 'cca3'>[] = await borderData.json()

    return (
        <section className="px-10 py-8 flex flex-col gap-6 pb-20 lg:px-20 xl:max-w-[1350px] xl:mx-auto xl:py-20 xl:grid xl:grid-cols-[2fr_1fr_1fr] xl:grid-rows-[repeat(4,_auto)] xl:gap-x-12">
            <Link href={"/"} className="flex gap-4 items-center px-6 py-2 bg-white shadow-lg dark:bg-dark-elements w-fit rounded-lg xl:col-span-full xl:mb-10">
                <ArrowLeftIcon className="h-6 w-6" />
                Back
            </Link>

            <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                width={320}
                height={210}
                className="w-full h-auto pt-12 md:w-3/4 md:mx-auto xl:row-start-2 xl:row-span-3 xl:w-full lg:py-16 xl:py-0"
            />

            <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl xl:col-span-2 xl:text-3xl">{country.name.common}</h2>

            <article className="flex flex-col gap-2 md:text-lg lg:text-xl xl:text-lg">
                <p><span className="font-semibold">Native Name:</span> {country.name.nativeName[nativeCode!].common}</p>

                <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>

                <p><span className="font-semibold">Region:</span> {country.region}</p>

                <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>

                <p><span className="font-semibold">Capital:</span> {country.capital}</p>
            </article>

            <article className="flex flex-col gap-2 md:text-lg lg:text-xl xl:text-lg">
                <p><span className="font-semibold">Top Level Domain:</span> {country.tld[0]}</p>

                <p><span className="font-semibold">Currencies:</span> {country.currencies[currencyCode!].name}</p>

                <p><span className="font-semibold">Languages:</span> {Object.values(country.languages).join(", ")}</p>

            </article>

            <article className="flex flex-col gap-4 md:text-lg lg:text-xl xl:col-span-2 xl:text-lg">
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-xl">Border Countries:</h3>

                {country.borders.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {borderCountries.map((border) => (
                            <Link key={`border${border.cca3}`} href={`/${border.cca3}`} className="px-6 py-2 bg-white shadow-lg dark:bg-dark-elements w-fit rounded-lg">
                                {border.name.common}
                            </Link>
                        ))}
                    </div>
                )}
            </article>
        </section>
    )
}