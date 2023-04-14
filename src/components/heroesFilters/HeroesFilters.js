import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { filtersFetch, activeFilterChange } from "../../actions/filterActions";

import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
  const { request } = useHttp();
  const { filters, filtersLoadingStatus, activeFilter } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //діспетчу ФУНКЦІЮ, яка буде робити запит на сервер за фільтрами і в цілому - сама буде діспетчити потрібні дані в reducer()
    dispatch(filtersFetch(request));

    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  }
  if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Damn... We have some trash !</h5>;
  }

  const renderFilters = (filters) => {
    if (filters.length === 0) {
      return <h5 className="text-center mt-5">There are no filters !</h5>;
    }

    return filters.map(({ name, label, className }) => {
      const btnClass = classNames("btn", className, {
        active: name === activeFilter,
      });

      return (
        <button
          className={btnClass}
          key={name}
          id={name}
          onClick={() => dispatch(activeFilterChange(name))}
        >
          {label}
        </button>
      );
    });
  };

  const elements = renderFilters(filters);
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter heroes by elements</p>
        <div className="btn-group">{elements}</div>
      </div>
    </div>
  );
};

export default HeroesFilters;
