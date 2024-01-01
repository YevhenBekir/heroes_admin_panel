// I WON'T USE THESE REDUX-THUNK ACTIONS ANYMORE BECAUSE I CREATED THEM WITH createAsyncThunk() IN filtersSlice.js
// import {
//   filtersFetching,
//   filtersFetched,
//   filterFetchingError,
// } from "../components/heroesFilters/filtersSlice";

// export const filtersFetch = (request) => (dispatch) => {
//   dispatch(filtersFetching());
//   request("http://localhost:3001/filters")
//     .then((filters) => dispatch(filtersFetched(filters)))
//     .catch(() => dispatch(filterFetchingError()));
// };



// I WON'T USE THE ACTION CREATORS BELOW BECAUSE I CREATE THEM DIRECTLY IN createSlice() IN filtersSlice.js
// export const filtersFetching = () => {
//   return {
//     type: "FILTERS_FETCHING",
//   };
// };

// export const filtersFetching = createAction("FILTERS_FETCHING");

// export const filtersFetched = (filters) => {
//   return {
//     type: "FILTERS_FETCHED",
//     payload: filters,
//   };
// };

// export const filtersFetched = createAction("FILTERS_FETCHED");

// export const filterFetchingError = () => {
//   return {
//     type: "FILTERS_FETCHING_ERROR",
//   };
// };

// export const filterFetchingError = createAction("FILTERS_FETCHING_ERROR");

// export const activeFilterChange = (filterName) => {
//   return {
//     type: "ACTIVE_FILTER",
//     payload: filterName,
//   };
// };

// export const activeFilterChange = createAction("ACTIVE_FILTER");
