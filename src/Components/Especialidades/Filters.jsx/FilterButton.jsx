const FilterButton = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <div>
          <label
            className="btn btn-outline-primary"
            htmlFor="flexRadioDefault1"
          >
            Single toggle
          </label>
          <br />
        </div>
      </div>
  
    </div>
  );
};

export default FilterButton;
