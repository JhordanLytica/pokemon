import { selectPokemon } from './redux/pokemonSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getPokemon } from './redux/pokemonSlice';
import { useNavigate } from "react-router-dom";
import { Section } from '../stories/moleculas/section/Section';
import { Info } from './style';
import logo from '../images/logopokemon.png';
import loader from '../images/loader.gif';
import error404 from '../images/pikachu.gif';
import { useGetPokemonByNameQuery } from './pokemon';
export const PokemonInformation = () => {
  const pokemon = useAppSelector(selectPokemon);
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon.pokemon);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const back = () => {
    navigate('/');
    dispatch(getPokemon(''));
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
                  <img src={error404} height="300px" alt="no se encontro pokemon" />
                  <p style={{textAlign: 'center'}}>No se encontro el pokémon</p>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button 
                      style={{border: 'none', background: 'transparent', textDecoration: 'underline'}} 
                      type="button" onClick={back}
                    >
                      regresar
                    </button>
                  </div>
                </>
              ) : isLoading ? (
                <><img src={loader} height="300px" /></>
              ) : data ? (
                <> {data.species ? (
                      <>
                        <Section
                          backgroundColor="#ffffff"
                          borderRadius="10px"
                          height="500px"
                          shadow
                          width="900px"
                          margin="10px 0"
                        > 
                          <Info>
                            <div className="pokemon center">
                              <div className="center">
                                <img src={data.sprites.front_default} alt={data.species.name} />
                              </div>
                            </div>
                            <div className="info">
                              <h3>#{data.id} {data.species.name}</h3>
                              <h2>Stats</h2>
                              <div className="center">
                                <div className="grid">
                                  {data.stats.map(({stat, base_stat}: any) => {
                                    return (
                                      <div>
                                        {stat.name}: {base_stat}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              <br />
                              <div className="center">
                                <div className="grid">
                                  <div>
                                    <h2>Types</h2>
                                    {data.types.map(({type}: any) => {
                                      return (
                                        <div style={{textAlign: 'center'}}>
                                          {type.name}
                                        </div>
                                      );
                                    })}
                                  </div>
                                  <div>
                                    <h2>Weight</h2>
                                    <div>{data.weight}</div>
                                  </div>
                                  <div>
                                    <h2>Height</h2>
                                    <div>{data.height}</div>
                                  </div>
                                </div>
                              </div>
                              <br /><br />
                              <div className="center">
                                <button type="button" onClick={back}>Regresar</button>
                              </div>
                            </div>
                          </Info>
                        </Section>
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
