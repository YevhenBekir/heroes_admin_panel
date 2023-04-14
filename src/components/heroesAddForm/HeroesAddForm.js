import { useHttp } from "../../hooks/http.hook";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { heroCreated } from "../../actions/heroesActions";

const HeroesAddForm = () => {
  const [heroName, setHeroName] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [heroElement, setHeroElement] = useState("");

  const { filters, filtersLoadingStatus } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  const { request } = useHttp();

  const onCreateHero = (e) => {
    e.preventDefault();

    const formData = {
      id: uuidv4(),
      name: heroName,
      description: heroDescription,
      element: heroElement,
    };

    request("http://localhost:3001/heroes", "POST", JSON.stringify(formData))
      .then((data) => console.log(data))
      .then(dispatch(heroCreated(formData)))
      .catch((err) => console.log(err));

    setHeroName("");
    setHeroDescription("");
    setHeroElement("");
  };

  const renderFilters = (filters, filtersLoadingStatus) => {
    if (filtersLoadingStatus === "loading") {
      return <option>Wait a second !</option>;
    }
    if (filtersLoadingStatus === "error") {
      return <option>Error !</option>;
    }

    if (filters && filters.length > 0) {
      return filters.map(({ name, label }) => {
        // eslint-disable-next-line
        if (name === "all") return;
        //
        return (
          <option key={name} value={name}>
            {label}
          </option>
        );
      });
    }
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onCreateHero}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          The name of new hero
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
          placeholder="Give a name to hero"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Description
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          value={heroDescription}
          onChange={(e) => setHeroDescription(e.target.value)}
          placeholder="Does the hero do something?"
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Choose a hero element
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          value={heroElement}
          onChange={(e) => setHeroElement(e.target.value)}
        >
          {filters && filters.length === 0 ? (
            <option>Shit... There are no elements !</option>
          ) : (
            <option>What element does the hero have ?</option>
          )}
          {renderFilters(filters, filtersLoadingStatus)}
        </select>
      </div>

      <button type="submit" className="btn btn-success">
        Create a hero
      </button>
    </form>
  );
};

export default HeroesAddForm;
