//Я НЕ КОРИСТУВАТИМУСЯ РЕДЮСЕРАМИ, ЩО НИЖЧЕ, ОСКІЛЬКИ Я ЇХ СТВОРИВ ЗАВДЯКИ createSlice() В heroesSlice.js

// import { createReducer } from "@reduxjs/toolkit";

// import {
//   heroesFetching,
//   heroesFetched,
//   heroesFetchingError,
//   heroCreated,
//   heroDelete,
// } from "../actions/heroesActions";

// const initialState = {
//   heroes: [],
//   heroesLoadingStatus: "idle",
// };

// const heroes = createReducer(initialState, (builder) => {
//   builder
//     .addCase(heroesFetching, (state) => {
//       state.heroesLoadingStatus = "loading";
//     })
//     .addCase(heroesFetched, (state, action) => {
//       state.heroesLoadingStatus = "idle";
//       state.heroes = action.payload;
//     })
//     .addCase(heroesFetchingError, (state) => {
//       state.heroesLoadingStatus = "error";
//     })
//     .addCase(heroCreated, (state, action) => {
//       const newHeroList = [...state.heroes, action.payload];
//       state.heroes = newHeroList;
//     })
//     .addCase(heroDelete, (state, action) => {
//       state.heroes = state.heroes.filter((item) => item.id !== action.payload);
//     })
//     .addDefaultCase(() => {});
// });
//___________________________________________________________________

//2 варіант створення reducer завдяки createReducer()
// const heroes = createReducer(
//   initialState,
//   {
//     [heroesFetching]: (state) => {
//       state.heroesLoadingStatus = "loading";
//     },
//     [heroesFetched]: (state, action) => {
//       state.heroesLoadingStatus = "idle";
//       state.heroes = action.payload;
//     },
//     [heroesFetchingError]: (state) => {
//       state.heroesLoadingStatus = "error";
//     },
//     [heroCreated]: (state, action) => {
//       const newHeroList = [...state.heroes, action.payload];
//       state.heroes = newHeroList;
//     },
//     [heroDelete]: (state, action) => {
//       state.heroes = state.heroes.filter((item) => item.id !== action.payload);
//     },
//   },
//   [],
//   (state) => state
// );
//___________________________________________________________________

//Дефолтний синтаксис Redux іммутабельного reducer()
// const heroes = (state = initialState, action) => {
//   switch (action.type) {
//     case "HEROES_FETCHING":
//       return {
//         ...state,
//         heroesLoadingStatus: "loading",
//       };
//     case "HEROES_FETCHED":
//       return {
//         ...state,
//         heroes: action.payload,
//         heroesLoadingStatus: "idle",
//       };
//     case "HEROES_FETCHING_ERROR":
//       return {
//         ...state,
//         heroesLoadingStatus: "error",
//       };

//     case "CREATE_NEW_HERO":
//       return {
//         ...state,
//         heroes: [...state.heroes, action.payload],
//       };
//     case "DELETE_ONE_HERO":
//       return {
//         ...state,
//         heroes: state.heroes.filter((item) => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default heroes;
