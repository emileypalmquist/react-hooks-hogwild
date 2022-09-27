function Filter({ showGreased, setShowGreased }) {
  function handleChange(e) {
    setShowGreased(e.target.checked);
  }
  return (
    <>
      <fieldset>
        <legend>Select a filter</legend>
        <div>
          <input
            type="checkbox"
            id="greased"
            name="greased"
            onChange={handleChange}
            checked={showGreased}
          />
          <label htmlFor="greased">Greased</label>
        </div>
      </fieldset>
    </>
  );
}

export default Filter;
