import { SimplePokemon } from "./simple-pokemon.interface";

export interface Pokemon extends SimplePokemon {
  height: number;
  weight: number;
  order: number;
  species: PokemonItem;
  location_area_encounters: string;
  base_experience: number;
  is_default: boolean;
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  past_abilitites: PokemonAbility[];
  moves: PokemonMove[];
  cries: PokemonCries;
  forms: PokemonItem[];
  types: PokemonType[];
  past_types: PokemonType[];
  held_items: PokemonHeldItem[];
  sprites: PokemonSprites;
}

export interface PokemonItem {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonItem;
}

export interface PokemonAbility {
  slot: number;
  is_hidden: boolean;
  ability: PokemonItem;
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}

export interface PokemonMove {
  move: PokemonItem;
  version_group_details: any[];
}

export interface PokemonType {
  slot: number;
  type: PokemonItem;
}

export interface PokemonHeldItem {
  item: PokemonItem;
  version_details: any[];
}

export interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_shiny: string;
  front_shiny_female: string;
}