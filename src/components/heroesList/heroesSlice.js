import { useHttp } from "../../hooks/http.hook";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

//Видалив стейт, та сформував його завдяки - createEntityAdapter()
const heroesAdapter = createEntityAdapter();

const { selectAll } = heroesAdapter.getSelectors((state) => state.heroes);

export const filteredHeroesSelector = createSelector(
  (state) => state.filters.activeFilter,
  selectAll,
  (activeFilter, heroes) => {
    console.log(`Now you're looking at - ${activeFilter} filter.`);
    if (activeFilter === "all") {
      return heroes;
    } else {
      return heroes.filter((item) => item.element === activeFilter);
    }
  }
);

const initialState = heroesAdapter.getInitialState({
  heroesLoadingStatus: "idle",
});

export const heroesFetch = createAsyncThunk("heroes/heroesFetch", async () => {
  const { request } = useHttp();
  return await request("http://localhost:3001/heroes");
});

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    heroCreated: (state, action) => {
      heroesAdapter.addOne(state, action.payload);
    },
    heroDelete: (state, action) => {
      heroesAdapter.removeOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(heroesFetch.pending, (state) => {
        state.heroesLoadingStatus = "loading";
      })
      .addCase(heroesFetch.fulfilled, (state, action) => {
        state.heroesLoadingStatus = "idle";
        heroesAdapter.setAll(state, action.payload);
      })
      .addCase(heroesFetch.rejected, (state) => {
        state.heroesLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = heroesSlice;

export default reducer;

export const { heroCreated, heroDelete } = actions;
