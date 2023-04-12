const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
  filteredHeroes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
        filteredHeroes:
          state.activeFilter === "all"
            ? action.payload
            : action.payload.filter(
                (hero) => hero.element === state.activeFilter
              ),
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };

    //

    case "DELETE_ONE_HERO":
      const changedHeroesList = state.heroes.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        heroes: changedHeroesList,
        filteredHeroes:
          state.activeFilter === "all"
            ? changedHeroesList
            : changedHeroesList.filter(
                (hero) => hero.element === state.activeFilter
              ),
      };
    case "CREATE_NEW_HERO":
      const newHeroesList = [...state.heroes, action.payload];
      return {
        ...state,
        heroes: newHeroesList,
        filteredHeroes:
          state.activeFilter === "all"
            ? newHeroesList
            : newHeroesList.filter(
                (hero) => hero.element === state.activeFilter
              ),
      };

    //

    case "FILTERS_FETCHING":
      return {
        ...state,
        filtersLoadingStatus: "loading",
      };

    case "FILTERS_FETCHED":
      return {
        ...state,
        filtersLoadingStatus: "idle",
        filters: action.payload,
      };

    case "FILTERS_FETCHING_ERROR":
      return {
        ...state,
        filtersLoadingStatus: "error",
      };

    case "ACTIVE_FILTER":
      return {
        ...state,
        activeFilter: action.payload,
        filteredHeroes:
          action.payload === "all"
            ? state.heroes
            : state.heroes.filter(
                (hero) => hero.element === state.activeFilter
              ),
      };
    default:
      return state;
  }
};

export default reducer;
