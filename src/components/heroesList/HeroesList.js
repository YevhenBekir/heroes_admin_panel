import { useHttp } from "../../hooks/http.hook";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { heroesFetched, heroDelete } from "../../actions/heroesActions";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

const HeroesList = () => {
  const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    (state) => state.heroes.heroes,
    (activeFilter, heroes) => {
      if (activeFilter === "all") {
        return heroes;
      } else {
        return heroes.filter((item) => item.element === activeFilter);
      }
    }
  );

  //Те саме створення масиву з фільтрованими героями, але через пряме витягування значень з глобального стейту
  // const filteredHeroes = useSelector((state) => {
  //   if (state.filters.activeFilter === "all") {
  //     console.log("rerender");
  //     return state.heroes.heroes;
  //   } else {
  //     return state.heroes.heroes.filter(
  //       (item) => item.element === state.filters.activeFilter
  //     );
  //   }
  // });

  const filteredHeroes = useSelector(filteredHeroesSelector);
  const heroesLoadingStatus = useSelector(
    (state) => state.heroes.heroesLoadingStatus
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch("HEROES_FETCHING");
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch("HEROES_FETCHING_ERROR"));

    // eslint-disable-next-line
  }, []);

  const onDeleteOneHero = useCallback(
    (id) => {
      request(`http://localhost:3001/heroes/${id}`, "DELETE")
        .then(dispatch(heroDelete(id)))
        .catch((error) => console.log(error));
    },
    //eslint-disable-next-line
    [request]
  );

  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Error loading</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">There are no heroes</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return (
        <HeroesListItem
          key={id}
          {...props}
          onDeleteOneHero={() => onDeleteOneHero(id)}
        />
      );
    });
  };

  const elements = renderHeroesList(filteredHeroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
