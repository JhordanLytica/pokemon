import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { pokemonApi } from '../pokedex/pokemon'
import pokemonSlice from '../pokedex/redux/pokemonSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemon: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;