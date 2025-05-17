import RegionFilter from "./components/RegionFilter";

export default function Home() {
  return (
    <section className="px-5 py-8 flex flex-col items-center gap-8">
      <input type="text" className="shadow w-full px-5 py-4 bg-white rounded-lg focus:outline-0" placeholder="Search for a country" />

      <RegionFilter />
    </section>
  );
}
