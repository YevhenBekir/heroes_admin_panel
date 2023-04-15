import { createAction } from "@reduxjs/toolkit";

export const filtersFetch = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then((filters) => dispatch(filtersFetched(filters)))
    .catch(() => dispatch(filterFetchingError()));
};

// export const filtersFetching = () => {
//   return {
//     type: "FILTERS_FETCHING",
//   };
// };
export const filtersFetching = createAction("FILTERS_FETCHING");

// export const filtersFetched = (filters) => {
//   return {
//     type: "FILTERS_FETCHED",
//     payload: filters,
//   };
// };
export const filtersFetched = createAction("FILTERS_FETCHED");

// export const filterFetchingError = () => {
//   return {
//     type: "FILTERS_FETCHING_ERROR",
//   };
// };
export const filterFetchingError = createAction("FILTERS_FETCHING_ERROR");

// export const activeFilterChange = (filterName) => {
//   return {
//     type: "ACTIVE_FILTER",
//     payload: filterName,
//   };
// };
export const activeFilterChange = createAction("ACTIVE_FILTER");
