import React from 'react';
import { Section } from '../../stories/moleculas/section/Section';
import { AllPokemon } from '../allPokemon/allPokemon';
import { useGetPokemonByNameQuery } from './pokemon';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import logo from '../../images/logopokemon.png';
import { DivPokemon, InputContainer, Grid } from './style';
interface Values {
  firstName: string;
}
//bulbasaur
export const Pokedex = () => {
  const [state, setState] = React.useState('');
  const { data, error, isLoading } = useGetPokemonByNameQuery(state);
  
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
              firstName: '',
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setState(values.firstName);
              setSubmitting(true);
            }}
            style={{width: '100%'}}
          >
            <Form style={{width: '100%'}}>
              <InputContainer>
                <Field id="firstName" name="firstName" placeholder="Nombre del pokémon" />
                <button type="submit">Submit</button>
              </InputContainer>
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