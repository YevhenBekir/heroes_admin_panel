const HeroesAddForm = () => {
  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          The name of the new hero
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
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
          placeholder="Does the hero do something?"
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Choose a hero element
        </label>
        <select required className="form-select" id="element" name="element">
          <option>What element does the hero have ?</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="wind">Wind</option>
          <option value="earth">Earth</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success">
        Create a hero
      </button>
    </form>
  );
};

export default HeroesAddForm;
