import PokeCard from "~/components/PokeCard";
import { useEffect, useState } from "react";

interface Pokemon {
  id: string;
  name: string;
  url: string;
  image: string;
  types: Array<string>;
}

export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("/api/pokemon");
        const resultJson = (await result.json()) as { results: Pokemon[] };
        console.log(resultJson);
        if (resultJson.pokemonData) {
          setPokemonData(resultJson.pokemonData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void fetchData();
  }, []);

  return (
    <main className="m flex min-h-screen flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center gap-6 rounded-md bg-black bg-opacity-70  p-10">
        <div className="container">
          <h1 className="text-2xl font-bold leading-loose text-white">
            Pokedex
          </h1>
        </div>
        <div className="container">
          <form className="flex flex-col gap-3 md:flex-row">
            <div className="flex">
              <input
                type="text"
                placeholder="Search pokemon"
                className="border- h-10 w-full rounded-lg bg-neutral-800 px-3 focus:bg-neutral-800 focus:outline-none md:w-96"
              />
            </div>
            <select
              id="pokemonType"
              name="pokemonType"
              className="border- h-10 rounded-lg bg-neutral-800 px-3 text-white focus:bg-neutral-800 focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Freemium">Freemium</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
            <div className="flex-grow">
              <div className=" grid justify-items-end">
                <button className="h-10 rounded-lg bg-neutral-800 px-3 text-white focus:bg-neutral-800 focus:outline-none">
                  Create New
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="-mx-4 -my-4 flex flex-wrap">
          {pokemonData.map((pokemon) => (
            <div
              key={pokemon.id}
              className="mb-7 w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PokeCard
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.image}
                types={pokemon.types}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
