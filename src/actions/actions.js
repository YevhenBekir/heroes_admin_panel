export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

//

export const heroDelete = (id) => {
  return {
    type: "DELETE_ONE_HERO",
    payload: id,
  };
};

export const heroCreated = (hero) => {
  return {
    type: "CREATE_NEW_HERO",
    payload: hero,
  };
};

export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};

export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
  };
};

export const filterFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};

export const activeFilterChange = (filterName) => {
  return {
    type: "ACTIVE_FILTER",
    payload: filterName,
  };
};
