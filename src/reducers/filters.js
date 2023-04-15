import { createReducer } from "@reduxjs/toolkit";

import {
  filtersFetching,
  filtersFetched,
  filterFetchingError,
  activeFilterChange,
} from "../actions/filterActions";

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
};

const filters = createReducer(initialState, (builder) => {
  builder
    .addCase(filtersFetching, (state) => {
      state.filtersLoadingStatus = "loading";
    })
    .addCase(filtersFetched, (state, action) => {
      state.filtersLoadingStatus = "idle";
      state.filters = action.payload;
    })
    .addCase(filterFetchingError, (state) => {
      state.filtersLoadingStatus = "error";
    })
    .addCase(activeFilterChange, (state, action) => {
      state.activeFilter = action.payload;
    });
});

//2 варіант створення reducer завдяки createReducer()
// const filters = createReducer(
//   initialState,
//   {
//     [filtersFetching]: (state) => {
//       state.filtersLoadingStatus = "loading";
//     },
//     [filtersFetched]: (state, action) => {
//       state.filtersLoadingStatus = "idle";
//       state.filters = action.payload;
//     },
//     [filterFetchingError]: (state) => {
//       state.filtersLoadingStatus = "error";
//     },
//     [activeFilterChange]: (state, action) => {
//       state.activeFilter = action.payload;
//     },
//   },
//   [],
//   (state) => state
// );

//Дефолтний синтаксис Redux іммутабельного reducer()
// const filters = (state = initialState, action) => {
//   switch (action.type) {
//     case "FILTERS_FETCHING":
//       return {
//         ...state,
//         filtersLoadingStatus: "loading",
//       };

//     case "FILTERS_FETCHED":
//       return {
//         ...state,
//         filtersLoadingStatus: "idle",
//         filters: action.payload,
//       };

//     case "FILTERS_FETCHING_ERROR":
//       return {
//         ...state,
//         filtersLoadingStatus: "error",
//       };

//     case "ACTIVE_FILTER":
//       return {
//         ...state,
//         activeFilter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default filters;
