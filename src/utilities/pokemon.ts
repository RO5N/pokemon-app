const baseUrl = 'https://beta.pokeapi.co/graphql/v1beta'; //TODO: move to .env

const searchPokemon = async (offset: number, limit: number, name: string) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            query pokemonNameSearch($name: String, $limit: Int, $offset: Int) {
              pokemons: pokemon_v2_pokemon_aggregate(limit: $limit, offset: $offset, where: {name: {_ilike: $name}}, order_by: {name: asc}) {
                nodes {
                  name
                  id
                  is_default
                  pokemon_species_id
                  pokemon_v2_pokemonsprites {
                    sprites
                  }
                }
              }

              pagination: pokemon_v2_pokemon_aggregate(where: {name: {_ilike: $name}}, order_by: {name: asc}) {
                total: aggregate {
                  count
                }
              }
            }`,
      variables: {
        name: `%${name}%`,
        limit: limit,
        offset: offset,
      },
    }),
  });
  return await response.json();
};

const listPokemon = async (offset: number, limit: number) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: ` query listPokemon($limit: Int, $offset: Int) {
                pokemons: pokemon_v2_pokemon_aggregate(limit: $limit, offset: $offset) {
                    nodes {
                      name
                      pokemon_species_id
                      id
                      pokemon_v2_pokemonsprites {
                        sprites
                      }
                  }
                }

                pagination: pokemon_v2_pokemonspecies_aggregate {
                  total: aggregate {
                    count
                  }
                }
              }`,
      variables: {
        offset: offset,
        limit: limit,
      },
    }),
  });
  return await response.json();
};

const getDetails = async (id: number) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query listPokemon($id: Int) {
                pokemon: pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
                  id
                  name
                  pokemon_species_id
                  types: pokemon_v2_pokemontypes {
                    pokemon_v2_type {
                      id
                      name
                      generation_id
                    }
                  }
                  stats: pokemon_v2_pokemonstats {
                    base_stat
                    effort
                    pokemon_v2_stat {
                      name
                      id
                      game_index
                    }
                  }
                  abilities: pokemon_v2_pokemonabilities {
                    pokemon_v2_ability {
                      name
                      id
                      generation_id
                    }
                    is_hidden
                  }
                  pokemonsprites: pokemon_v2_pokemonsprites {
                    sprites
                  }
                }
              }
            `,
      variables: {
        id: id,
      },
    }),
  });
  return await response.json();
};

export { searchPokemon, listPokemon, getDetails };
