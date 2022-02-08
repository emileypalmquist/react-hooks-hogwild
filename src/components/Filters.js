function Filters({ greased, setGreased }) {
  function handleGreasedChange() {
    setGreased((currentGreased) => !currentGreased);
  }

  return (
    <form>
      <label htmlFor="greased"> Greased </label>
      <input
        id="greased"
        type="checkbox"
        checked={greased}
        onChange={handleGreasedChange}
      />
    </form>
  );
}

export default Filters;
