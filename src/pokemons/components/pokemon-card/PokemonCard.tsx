import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@primer/octicons-react";
import { SimplePokemon } from "../../interfaces/simple-pokemon.interface";
import styles from './PokemonCard.module.css';

export const pokeSpriteUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon: { name, id } }: PokemonCardProps) => {
  return (
    <div className={styles.card}>
      <HeartIcon size={21} className={styles.icon} />
      <Image
        src={`${pokeSpriteUrl}${id}.svg`}
        alt={name}
        width={100}
        height={100}
        priority={false}
      />
      <span className={styles.name}>{name}</span>
      <Link className={styles.details} href={"pokemons/" + name.toLowerCase()}>
        See details
      </Link>
    </div>
  );
};
