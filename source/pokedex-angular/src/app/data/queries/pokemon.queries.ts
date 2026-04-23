import { gql } from 'apollo-angular';

export const GET_POKEMONS = gql`
  query GetPokemons($limit: Int!) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      weight
      height
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
        }
      }
    }
  }
`;

export const GET_POKEMON_TYPES = gql`
  query GetPokemonTypes {
    pokemon_v2_type(order_by: { name: asc }) {
      id
      name
    }
  }
`;

export const GET_POKEMON_SPECIE = gql`
  query GetPokemonSpecie($pokemonId: Int!, $languageId: Int!) {
    pokemon_v2_pokemonspecies(where: { id: { _eq: $pokemonId } }) {
      id
      name
      pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: $languageId } }) {
        genus
      }
      pokemon_v2_pokemonspeciesflavortexts(where: { language_id: { _eq: $languageId } }) {
        pokemon_v2_version {
          name
        }
        flavor_text
      }
      pokemon_v2_pokemons {
        weight
        height
        pokemon_v2_pokemonsprites {
          sprites
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonstats {
          pokemon_v2_stat {
            name
          }
          base_stat
        }
      }
    }
  }
`;
