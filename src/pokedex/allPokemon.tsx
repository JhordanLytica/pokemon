import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { getPokemon } from './redux/pokemonSlice';
import { useNavigate } from "react-router-dom";
import { Section } from '../stories/moleculas/section/Section';
import { useGetPokemonByNameQuery } from './pokemon';
import { DivPokemon } from './style';
import loader from '../images/loader.gif';

interface props {
  pokemon: string;
}

export const AllPokemon: React.FC<props> = ({ pokemon = ''}) => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon);
  const navigate = useNavigate();
  const infoPokemon = (name: string) => {
    navigate(`/${name}`);
    dispatch(getPokemon(name));
  }
  return (
    <div>
      {error ? (
        <>
          No se encontro el pokémon
          <button type="button" onClick={() => navigate('/')}>
            regresar
          </button>
        </>
      ) : isLoading ? (
        <><img src={loader} height="200px" /></>
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
                    <button 
                      type="button"
                      className="buttonTitle"
                      onClick={() => infoPokemon(data.species.name)}
                    >
                      #{data.id} {data.species.name}
                    </button>
                  </DivPokemon>
                </Section>
              </>
            ) :null}
        </>
      ): null}
    </div>
  );
};
