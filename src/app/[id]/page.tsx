'use client';
import DetailCard from '@components/DetailCard';
import TypeChip from '@components/TypeChip';
import Chip from '@components/Chip';
import DetailFrame from '@components/DetailFrame';
import StatChip from '@components/BaseStatChip';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDetails } from '../../utilities/pokemon';
import LoadingIcon from '@components/loading/icon';
import { PageLayout } from '@components/Layouts/PageLayout';

export default function DetailPage() {
  const params = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getDetails(parseInt(params.id)).then((result) => {
      if (result.data.pokemon && result.data.pokemon.length > 0) {
        setPokemon(result.data.pokemon[0]);
        setIsLoading(false);
      }
    });
  }, [params.id]);

  return (
    <div>
      <PageLayout title={`Pokemon - ${params.id}`} description='Pokemon detail page'/>
      {
        isLoading ? (
          <div className='flex items-center justify-center'>
            <LoadingIcon />
          </div>
        ) : (
          <div>
            <div className='flex md:flex-row flex-col justify-center items-center'>
              <DetailCard
                name={pokemon?.name}
                images={[
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`,
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon?.id}.png`,
                ]}
                id={pokemon?.id}
              ></DetailCard>
              <div className='max-w-sm flex flex-col justify-between rounded-lg bg-teal-500'>
                <div>
                  <DetailFrame title='Type'>
                    <>
                      {pokemon?.types &&
                        pokemon.types.map((type: any, inedex: number) => {
                          return (
                            <TypeChip
                              type={type.pokemon_v2_type.name}
                              key={inedex + 1000}
                            />
                          );
                        })}
                    </>
                  </DetailFrame>
                </div>
                <div>
                  <DetailFrame title='Abilities'>
                    <>
                      {pokemon?.abilities &&
                        pokemon.abilities.map((ability: any, inedex: number) => {
                          return (
                            <Chip
                              text={`${ability?.pokemon_v2_ability?.name} ${
                                ability.is_hidden ? ' (hidden)' : ''
                              }`}
                              key={inedex + 2000}
                            />
                          );
                        })}
                    </>
                  </DetailFrame>
                </div>
                <div>
                  <DetailFrame title='Base Stats'>
                    <>
                      <div className='flex flex-row'>
                        {pokemon?.stats &&
                          pokemon.stats.map((stat: any, inedex: number) => {
                            return (
                              <StatChip
                                title={stat.pokemon_v2_stat.name}
                                value={stat.base_stat}
                                key={inedex + 3000}
                              />
                            );
                          })}
                      </div>
                    </>
                  </DetailFrame>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
