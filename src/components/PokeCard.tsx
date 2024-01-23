import Image from "next/image";

interface PokeCardProps {
  id: string;
  name: string;
  image: string;
  types: Array<string>;
}

const typesColors: Record<string, string> = {
  normal: "bg-gray-300",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-500",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-blue-300",
  psychic: "bg-purple-700",
  bug: "bg-green-700",
  rock: "bg-yellow-800",
  ghost: "bg-purple-800",
  dark: "bg-gray-800",
  dragon: "bg-red-800",
  steel: "bg-gray-400",
  fairy: "bg-pink-300",
};

export default function PokeCard(pokemon: PokeCardProps) {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="overflow-hidden rounded-md bg-neutral-800 shadow-lg">
      <div className="flex items-center justify-center">
        <Image
          className="h-60 w-60 object-center"
          src={pokemon.image}
          width={100}
          height={100}
          alt="Nombre del Pokémon"
        />
      </div>

      <div className=" mb-8 flex flex-col items-center">
        <div className="text-base font-bold text-white">Nº {pokemon.id}</div>
        <div className="text-xl font-bold text-white">{name}</div>
        <div className="flex flex-row justify-center gap-2">
          {pokemon.types.map((type) => (
            <div
              key={type}
              className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 ${typesColors[type]}`}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
