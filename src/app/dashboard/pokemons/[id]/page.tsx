import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Pokemon, pokeSpriteUrl } from "@/pokemons";

import styles from "./page.module.css";
import { notFound } from "next/navigation";

interface PokemonPageProps {
  params: { id: string };
}

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

export const generateMetadata = async ({
  params,
}: PokemonPageProps): Promise<Metadata> => {
  const { name, id } = await fetchPokemon(params.id);
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `#${id} - ${capitalizedName} Pokémon information`,
    description: `Detailed information for ${capitalizedName}.`,
  };
};

const fetchPokemon = async (id: string): Promise<Pokemon> => {
  const apiCall: Promise<Response> = fetch(`${pokemonUrl}${id}`, {
    next: { revalidate: 60 },
  });

  const response: Promise<Pokemon> = apiCall
    .then((res) => res.json())
    .catch(() => {
      notFound();
    });


  return await response;
};

const PokemonPage = async ({ params }: PokemonPageProps) => {
  const pokemon = await fetchPokemon(params.id);
  console.debug(pokemon);

  return (
    <>
    <Link className={styles.back} href={"/dashboard/pokemons"}>{' < Back to Pokémons'}</Link>
    <div className={styles["card-container"]}>
      <span className={styles.title}>
        #{pokemon.id} {pokemon.name}
      </span>
      <Image
        className={styles.image}
        src={`${pokeSpriteUrl}${pokemon.id}.svg`}
        alt={pokemon.name}
        width={150}
        height={150}
        priority={false}
      />
      <p className={styles.moves}>
        {pokemon.moves.map((move) => `${move.move.name}\n`)}
      </p>
      <div className={styles["info-cards"]}>
        <div className={styles.card}>
          <span className={styles.title}>Types</span>
          <span className={styles.text}>
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </span>
        </div>

        <div className={styles.card}>
          <span className={styles.title}>Weight / Height</span>
          <span className={styles.text}>
            {pokemon.weight}kg / {pokemon.height}ft.
          </span>
        </div>

        <div className={styles.card}>
          <span className={styles.title}>Regular Sprites</span>
          <div className={styles.sprites}>
            <Image
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name}'s front sprite`}
              width={80}
              height={80}
            ></Image>

            <Image
              src={pokemon.sprites.back_default}
              alt={`${pokemon.name}'s back sprite`}
              width={80}
              height={80}
            ></Image>
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.title}>Shiny Sprites</span>
          <div className={styles.sprites}>
            <Image
              src={pokemon.sprites.front_shiny}
              alt={`${pokemon.name}'s front shiny sprite`}
              width={80}
              height={80}
            ></Image>

            <Image
              src={pokemon.sprites.back_shiny}
              alt={`${pokemon.name}'s back shiny sprite`}
              width={80}
              height={80}
            ></Image>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PokemonPage;
