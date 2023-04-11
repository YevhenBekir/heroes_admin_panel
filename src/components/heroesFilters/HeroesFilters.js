const HeroesFilters = () => {
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter heroes by elements</p>
        <div className="btn-group">
          <button className="btn btn-outline-dark active">All</button>
          <button className="btn btn-outline-dark">Fire</button>
          <button className="btn btn-outline-dark">Water</button>
          <button className="btn btn-outline-dark">Wind</button>
          <button className="btn btn-outline-dark">Earth</button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
