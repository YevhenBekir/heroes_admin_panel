import {
  filtersFetching,
  filtersFetched,
  filterFetchingError,
} from "../components/heroesFilters/filtersSlice";

export const filtersFetch = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then((filters) => dispatch(filtersFetched(filters)))
    .catch(() => dispatch(filterFetchingError()));
};

//Я НЕ ВИКОРИСТОВУВАТИМУ ACTION CREATOR'И, ЩО НИЖЧЕ, ОСКІЛЬКИ Я ЇХ СТВОРЮЮ БЕЗПОСЕРЕДНЬО В createSlice() В filtersSlice.js

// export const filtersFetching = () => {
//   return {
//     type: "FILTERS_FETCHING",
//   };
// };
//___________________________________________________________________
// export const filtersFetching = createAction("FILTERS_FETCHING");

// export const filtersFetched = (filters) => {
//   return {
//     type: "FILTERS_FETCHED",
//     payload: filters,
//   };
// };
//___________________________________________________________________
// export const filtersFetched = createAction("FILTERS_FETCHED");

// export const filterFetchingError = () => {
//   return {
//     type: "FILTERS_FETCHING_ERROR",
//   };
// };
//___________________________________________________________________
// export const filterFetchingError = createAction("FILTERS_FETCHING_ERROR");

// export const activeFilterChange = (filterName) => {
//   return {
//     type: "ACTIVE_FILTER",
//     payload: filterName,
//   };
// };
//___________________________________________________________________
// export const activeFilterChange = createAction("ACTIVE_FILTER");
