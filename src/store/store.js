import { configureStore } from "@reduxjs/toolkit";
import filters from "../components/heroesFilters/filtersSlice";
import heroes from "../components/heroesList/heroesSlice";
// import filters from "../reducers-IsNotRelevant/filters";
// import heroes from "../reducers-IsNotRelevant/heroes";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

//Функціонал сворення власного enhancer
// const enhancer =
//   (createStore) =>
//   (...args) => {
//     const store = createStore(...args);

//     const oldDispatch = store.dispatch;

//     store.dispatch = (action) => {
//       if (typeof action === "string") {
//         return oldDispatch({
//           type: action,
//         });
//       }
//       return oldDispatch(action);
//     };

//     return store;
//   };

//Дефолтний синтаксис створення Store
// const store = createStore(
//   combineReducers({ heroes: heroes, filters: filters }),
//   compose(
//     applyMiddleware(ReduxThunk, stringMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = configureStore({
  reducer: { heroes, filters },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
