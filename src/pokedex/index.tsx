import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { getPokemon } from './redux/pokemonSlice';
import { Section } from '../stories/moleculas/section/Section';
import { AllPokemon } from './allPokemon';
import { useNavigate } from "react-router-dom";
import { useGetPokemonByNameQuery } from './pokemon';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import logo from '../images/logopokemon.png';
import loader from '../images/loader.gif';
import error404 from '../images/pikachu.gif';
import { DivPokemon, InputContainer, Grid } from './style';
interface Values {
  firstName: string;
}
//bulbasaur
export const Pokedex = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState('');
  const { data, error, isLoading } = useGetPokemonByNameQuery(state);
  const navigate = useNavigate();
  const back = () => {
    setState('');
    navigate('/');
  }
  const infoPokemon = (name: string) => {
    navigate(`/${name}`);
    dispatch(getPokemon(name));
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
          <Formik
            initialValues={{
              firstName: state,
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setState(values.firstName);
              setSubmitting(true);
              navigate(`/${values.firstName}`);
              dispatch(getPokemon(values.firstName));
            }}
            style={{width: '100%'}}
          >
            <Form style={{width: '100%'}}>
              <InputContainer>
                <Field id="firstName" name="firstName" placeholder="Nombre del pokémon" />
                <button type="submit">Submit</button>
              </InputContainer>
              {error ? (
                <>
                  <img src={error404} height="300px" alt="no se encontro pokemon" />
                  No se encontro el pokémon
                  <button type="button" onClick={back}>
                    regresar
                  </button>
                </>
              ) : isLoading ? (
                <>
                  <img src={loader} height="300px" />
                </>
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
                    ) : (
                      <Grid>
                        {data.results.map(({url}: any, index: number) => {
                          const poke: string =  url;
                          return(<AllPokemon key={index} pokemon={poke.substring(34)}/>);
                        })}
                      </Grid>
                    )}
                </>
              ): null}
            </Form>
          </Formik>
        </Section>
      </Section>
    </Section>
  );
}