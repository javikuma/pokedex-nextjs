export interface PokemonListResponse {
    count:      number;
    next?:      null | string;
    previous?:  null | string;
    results:    SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id: number;
    img: string;
}
