// Я БІЛЬШЕ НЕ ВИКОРИСТОВУВАТИМУ ЦІ Redux-Thunk ДІЇ, ТОМУ ЩО Я СТВОРИВ ЇХ ЗАВДЯКИ createAsyncThunk() В heroesSlice.js
// import {
//   heroesFetching,
//   heroesFetched,
//   heroesFetchingError,
// } from "../components/heroesList/heroesSlice";

// export const heroesFetch = (request) => (dispatch) => {
//   dispatch(heroesFetching());
//   request("http://localhost:3001/heroes")
//     .then((data) => dispatch(heroesFetched(data)))
//     .catch(() => dispatch(heroesFetchingError()));
// };
//___________________________________________________________________

//Я НЕ ВИКОРИСТОВУВАТИМУ ACTION CREATOR'И, ЩО НИЖЧЕ, ОСКІЛЬКИ Я ЇХ СТВОРЮЮ БЕЗПОСЕРЕДНЬО В createSlice() В heroesSlice.js

// export const heroesFetching = () => {
//   return {
//     type: "HEROES_FETCHING",
//   };
// };
//___________________________________________________________________
// export const heroesFetching = createAction("HEROES_FETCHING");

// export const heroesFetched = (heroes) => {
//   return {
//     type: "HEROES_FETCHED",
//     payload: heroes,
//   };
// };
//___________________________________________________________________
// export const heroesFetched = createAction("HEROES_FETCHED");

// export const heroesFetchingError = () => {
//   return {
//     type: "HEROES_FETCHING_ERROR",
//   };
// };
//___________________________________________________________________
// export const heroesFetchingError = createAction("HEROES_FETCHING_ERROR");

// export const heroCreated = (hero) => {
//   return {
//     type: "CREATE_NEW_HERO",
//     payload: hero,
//   };
// };
//___________________________________________________________________
// export const heroCreated = createAction("CREATE_NEW_HERO");

// export const heroDelete = (id) => {
//   return {
//     type: "DELETE_ONE_HERO",
//     payload: id,
//   };
// };
//___________________________________________________________________
// export const heroDelete = createAction("DELETE_ONE_HERO");
