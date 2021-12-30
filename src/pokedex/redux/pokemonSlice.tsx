import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
interface PokemonState {
  pokemon: string
}

const initialState = { pokemon: '' } as PokemonState

const pokemonSlice = createSlice({
  name: "getPokemons",
  initialState,
  reducers: {
    getPokemon: (state, action: PayloadAction<string>) => {
      state.pokemon = action.payload;
    },
  },
});

export const { getPokemon } = pokemonSlice.actions;
export const selectPokemon = (state: RootState) => state.pokemon;
export default pokemonSlice.reducer;