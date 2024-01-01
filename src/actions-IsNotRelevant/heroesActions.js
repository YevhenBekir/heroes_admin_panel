// I WON'T USE THESE REDUX-THUNK ACTIONS BECAUSE I CREATED THEM WITH createAsyncThunk() IN heroesSlice.js
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



// I WON'T USE THE ACTION CREATORS BELOW BECAUSE I CREATE THEM DIRECTLY IN createSlice() IN heroesSlice.js
// export const heroesFetching = () => {
//   return {
//     type: "HEROES_FETCHING",
//   };
// };
// export const heroesFetching = createAction("HEROES_FETCHING");

// export const heroesFetched = (heroes) => {
//   return {
//     type: "HEROES_FETCHED",
//     payload: heroes,
//   };
// };

// export const heroesFetched = createAction("HEROES_FETCHED");

// export const heroesFetchingError = () => {
//   return {
//     type: "HEROES_FETCHING_ERROR",
//   };
// };

// export const heroesFetchingError = createAction("HEROES_FETCHING_ERROR");

// export const heroCreated = (hero) => {
//   return {
//     type: "CREATE_NEW_HERO",
//     payload: hero,
//   };
// };

// export const heroCreated = createAction("CREATE_NEW_HERO");

// export const heroDelete = (id) => {
//   return {
//     type: "DELETE_ONE_HERO",
//     payload: id,
//   };
// };

// export const heroDelete = createAction("DELETE_ONE_HERO");
