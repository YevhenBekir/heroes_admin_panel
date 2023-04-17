import { useHttp } from "../../hooks/http.hook";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
};

export const heroesFetch = createAsyncThunk("heroes/heroesFetch", async () => {
  const { request } = useHttp();
  return await request("http://localhost:3001/heroes");
});

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    heroCreated: (state, action) => {
      const newHeroList = [...state.heroes, action.payload];
      state.heroes = newHeroList;
    },
    heroDelete: (state, action) => {
      state.heroes = state.heroes.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(heroesFetch.pending, (state) => {
        state.heroesLoadingStatus = "loading";
      })
      .addCase(heroesFetch.fulfilled, (state, action) => {
        state.heroesLoadingStatus = "idle";
        state.heroes = action.payload;
      })
      .addCase(heroesFetch.rejected, (state) => {
        state.heroesLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = heroesSlice;

export default reducer;
export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroCreated,
  heroDelete,
} = actions;
