function Filters({
  greasedChecked,
  handleGreasedChange,
  sortBy,
  handleSortChange,
}) {
  return (
    <>
      <form>
        <label htmlFor="greased">Greased</label>
        <input
          id="greased"
          type="checkbox"
          checked={greasedChecked}
          onChange={handleGreasedChange}
        />
      </form>
      <fieldset>
        <legend>Select a Sort:</legend>
        <div>
          <input
            type="radio"
            id="original"
            value="original"
            checked={sortBy === "original"}
            onChange={handleSortChange}
          />
          <label htmlFor="original">Original</label>
        </div>
        <div>
          <input
            type="radio"
            id="name"
            value="name"
            checked={sortBy === "name"}
            onChange={handleSortChange}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            type="radio"
            id="weight"
            value="weight"
            checked={sortBy === "weight"}
            onChange={handleSortChange}
          />
          <label htmlFor="weight">Weight</label>
        </div>
      </fieldset>
    </>
  );
}

export default Filters;
