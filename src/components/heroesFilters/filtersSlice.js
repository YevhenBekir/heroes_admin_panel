import { useHttp } from "../../hooks/http.hook";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
};

export const filtersFetch = createAsyncThunk(
  "filters/filtersFetch",
  async () => {
    const { request } = useHttp();
    return await request("http://localhost:3001/filters");
  }
);

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersFetching: (state) => {
      state.filtersLoadingStatus = "loading";
    },
    filtersFetched: (state, action) => {
      state.filtersLoadingStatus = "idle";
      state.filters = action.payload;
    },
    filterFetchingError: (state) => {
      state.filtersLoadingStatus = "error";
    },
    activeFilterChange: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filtersFetch.pending, (state) => {
        state.filtersLoadingStatus = "loading";
      })
      .addCase(filtersFetch.fulfilled, (state, action) => {
        state.filtersLoadingStatus = "idle";
        state.filters = action.payload;
      })
      .addCase(filtersFetch.rejected, (state) => {
        state.filtersLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const {
  filtersFetching,
  filtersFetched,
  filterFetchingError,
  activeFilterChange,
} = actions;
