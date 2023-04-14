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

export const heroCreated = (hero) => {
  return {
    type: "CREATE_NEW_HERO",
    payload: hero,
  };
};

export const heroDelete = (id) => {
  return {
    type: "DELETE_ONE_HERO",
    payload: id,
  };
};
