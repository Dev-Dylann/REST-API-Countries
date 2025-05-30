import Image from "next/image"
import Link from "next/link"

type CountryCardProps = {
    country: Country,
}

export default function CountryCard({ country }: CountryCardProps) {

    return (
        <Link href={`/${country.cca3}`} className="flex flex-col rounded-lg overflow-hidden bg-white shadow dark:bg-dark-elements w-full md:h-full hover:scale-105 transition-all">
            <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                width={320}
                height={210}
                className="w-full h-auto"
            />

            <div className="flex flex-col gap-1 px-5 py-8">
                <h2 className="font-extrabold text-2xl mb-5">{country.name.common}</h2>

                <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {country.region}</p>
                <p><span className="font-semibold">Capital:</span> {country.capital}</p>
            </div>
        </Link>
    )
}