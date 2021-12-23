import React from 'react';
import { Section } from '../../stories/moleculas/section/Section';
import { useGetPokemonByNameQuery } from '../pokedex/pokemon';
import { DivPokemon } from '../pokedex/style';

interface props {
  pokemon: string;
}
export const AllPokemon: React.FC<props> = ({ pokemon = ''}) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon);
  return (
    <div>
      {error ? (
        <>No se encontro el pokémon</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <> {data.species ? (
              <>
                <Section
                  backgroundColor="#ffffff"
                  borderRadius="10px"
                  height="300px"
                  shadow
                  width="300px"
                  margin="10px 0"
                > 
                  <DivPokemon>
                    <div className="header" />
                    <div className="center">
                      <img src={data.sprites.front_default} alt={data.species.name} />
                    </div>
                    <h3>#{data.id} {data.species.name}</h3>
                  </DivPokemon>
                  {/*<div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    {data.stats.map(({stat}: any) => (
                      <div>{stat.name}</div>
                    ))}
                    </div>*/}
                </Section>
              </>
            ) :null}
        </>
      ): null}
    </div>
  );
};
