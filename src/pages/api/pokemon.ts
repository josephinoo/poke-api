/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type NextApiRequest, type NextApiResponse } from "next";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonData {
  count: number;
  results: Pokemon[];
}

type ResponseData = {
  message: string;
  pokemonData?: Pokemon[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results } = response.data as PokemonData;

    const pokemonData = await Promise.all(
      results.map(async (pokemon, index) => {
        const paddedId = ("00" + (index + 1)).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

        const pokemonDetailsResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${index + 1}`
        );
        const types = pokemonDetailsResponse.data.types.map(
          (type: { type: { name: string } }) => type.type.name
        );

        return {
          ...pokemon,
          id: paddedId,
          image,
          types,
        };
      })
    );

    res.status(200).json({ pokemonData });
  } catch (error) {
    console.error("Error al realizar la consulta a la API de Pokémon:", error);
    res.status(500).json({ message: "Error al obtener datos de Pokémon" });
  }
}
