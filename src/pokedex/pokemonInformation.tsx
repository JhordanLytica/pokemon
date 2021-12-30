import { selectPokemon } from './redux/pokemonSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useNavigate } from "react-router-dom";
import { Section } from '../stories/moleculas/section/Section';
import { DivPokemon, InputContainer, Grid } from './style';
import logo from '../images/logopokemon.png';
import { useGetPokemonByNameQuery } from './pokemon';
export const PokemonInformation = () => {
  const pokemon = useAppSelector(selectPokemon);
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon.pokemon);
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  }
  return (
    <Section width='100%' height='auto'>
      <Section 
        width='100%'
        height='150px'
        backgroundColor="#e60012"
        position="absolute"
        top="0px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={logo} width="300px" alt="pokemon" />
      </Section>
      <Section width="100%" height="50px" backgroundColor="#000" position="absolute" top="150px" />
      <Section width="96.6%" backgroundColor="#fff" position="absolute" top="200px" padding="25px">
        <Section 
          width="100%"
          height="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <div>
          {error ? (
                <>
                  No se encontro el pokémon
                  <button type="button" onClick={back}>
                    regresar
                  </button>
                </>
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
                            <button 
                              type="button"
                              className="buttonTitle"
                            >
                              #{data.id} {data.species.name}
                            </button>
                          </DivPokemon>
                        </Section>
                        <button type="button" onClick={() => navigate('/')}>regresar</button>
                      </>
                    ) : null}
                </>
              ): null}
          </div>
        </Section>
      </Section>
    </Section>
  );
};
