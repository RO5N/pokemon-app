'use client';
import { useState, useEffect } from 'react';
import Card from '@components/Card';
import { listPokemon, searchPokemon } from '../utilities/pokemon';
import Pagination from '@components/Pagination';
import LoadingIcon from '@components/loading/icon';
import { PageLayout } from '@components/Layouts/PageLayout';

interface dataType {
  id: number;
  name: string;
  pokemon_species_id: number;
  pokemon_v2_pokemonsprites: any;
}

export default function Home() {
  const [data, setData] = useState<dataType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [seachKey, setSearchKey] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const limit = 20;

  const next = () => {
    setOffset(offset + limit);
  };

  const prev = () => {
    setOffset(offset - limit);
  };

  useEffect(() => {
    setIsLoading(true);
    listPokemon(offset, limit).then((event) => {
      setData(event.data.pokemons.nodes);
      setTotal(event.data.pagination.total.count);
      setIsLoading(false);
    });
  }, [offset]);

  const search = () => {
    setIsLoading(true);
    searchPokemon(offset, limit, seachKey).then((event) => {
      setData(event.data.pokemons.nodes);
      setTotal(event.data.pagination.total.count);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <PageLayout
        title='Pokemon Home'
        description='Welcome to pokemon demo home page'
      />
      {isLoading ? (
        <div className='flex items-center justify-center'>
          <LoadingIcon />
        </div>
      ) : (
        <div>
          <div className='flex flex-row items-center justify-center mb-4'>
            <div>
              <div className='max-w-md mx-auto min-w-80'>
                <label className='mb-2 text-sm font-medium text-gray-900 sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                    <svg
                      className='w-4 h-4 text-gray-500'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      />
                    </svg>
                  </div>
                  <input
                    type='search'
                    id='default-search'
                    className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-600 focus:border-emerald-600'
                    placeholder='Search Pika, Chari...'
                    onChange={(e) => {
                      setSearchKey(e.target.value);
                    }}
                  />
                  <button
                    type='submit'
                    className='text-white absolute end-2.5 bottom-2.5 bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-400 font-medium rounded-lg text-sm px-4 py-2'
                    onClick={search}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className='ml-2'>
              <button
                id='dropdownMenuIconButton'
                className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none'
                type='button'
              >
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 4 15'
                >
                  <path d='M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
                </svg>
              </button>

              <div
                id='dropdownDots'
                className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44'
              >
                <ul
                  className='py-2 text-sm text-gray-700'
                  aria-labelledby='dropdownMenuIconButton'
                >
                  <li>
                    <span className='block px-4 py-2 hover:bg-gray-100'>
                      By Index
                    </span>
                  </li>
                  <li>
                    <span className='block px-4 py-2 hover:bg-gray-100'>
                      By Name A-Z
                    </span>
                  </li>
                  <li>
                    <span className='block px-4 py-2 hover:bg-gray-100'>
                      By Name Z-A
                    </span>
                  </li>
                </ul>
                <div className='py-2'>
                  <span className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    By Base stat
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
            {data.map((pokemon, index) => {
              return (
                <Card
                  name={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  id={pokemon.id}
                  key={index}
                />
              );
            })}
          </div>
          {
            <div className='mt-4 flex justify-end'>
              <Pagination
                total={total}
                limit={limit}
                offset={offset}
                next={next}
                prev={prev}
              />
            </div>
          }
        </div>
      )}
    </div>
  );
}
