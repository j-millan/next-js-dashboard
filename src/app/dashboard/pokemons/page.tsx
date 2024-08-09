import { SimplePokemon, PokemonsResponse } from "@/pokemons";
import styles from "./page.module.css";
import { PokemonCard } from "@/pokemons";

const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemons = async (): Promise<SimplePokemon[]> => {
  const apiCall: Promise<Response> = fetch(`${pokemonListUrl}?limit=80`, {
    next: { revalidate: 60 },
  });

  const response: Promise<PokemonsResponse> = apiCall
    .then((res) => res.json())
    .catch(() => {
      throw new Error("Failed to fetch pokemons");
    });

  return (await response).results.map(({ name, url }) => {
    const id = url.split("/").at(-2)!;
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    return {
      name: capitalizedName,
      id: id,
    };
  });
};

const PokemonsPage = async () => {
  const pokemons = await fetchPokemons();

  return (
    <>
      <h1>Pokémons</h1>
      <div className={styles.pokemons}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  );
};

export default PokemonsPage;
