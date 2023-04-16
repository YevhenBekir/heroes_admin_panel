import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
};

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
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const {
  filtersFetching,
  filtersFetched,
  filterFetchingError,
  activeFilterChange,
} = actions;
