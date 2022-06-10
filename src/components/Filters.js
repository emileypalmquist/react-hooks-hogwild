function Filters({ checked, setChecked, sortBy, setSortBy }) {
  function handleGreasedChange() {
    setChecked((currentChecked) => !currentChecked);
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <div>
      <label htmlFor="greased">Greased</label>
      <input
        type="checkbox"
        name="greased"
        id="greased"
        onChange={handleGreasedChange}
        checked={checked}
      />

      <fieldset>
        <legend>Select a SORT:</legend>
        <label htmlFor="name">Name</label>
        <input
          type="radio"
          name="sort"
          id="name"
          value="name"
          onChange={handleSortChange}
        />
        <label htmlFor="weight">weight</label>
        <input
          type="radio"
          name="sort"
          id="weight"
          value="weight"
          onChange={handleSortChange}
        />
      </fieldset>
    </div>
  );
}

export default Filters;
