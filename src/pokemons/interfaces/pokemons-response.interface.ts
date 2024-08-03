export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonsResult[];
}

export interface PokemonsResult {
  name: string;
  url: string;
}