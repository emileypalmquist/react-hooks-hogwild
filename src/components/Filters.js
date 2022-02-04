function Filters({handleChange, handleSortChange}) {
  return (
    <>
      Fliter: <select onChange={handleChange}>
        <option value='all'>all</option>
        <option value='greased'>greased</option>
        <option value='not-greased'>not greased</option>
      </select>
      Sort: <select onChange={handleSortChange}>
        <option value='none'>none</option>
        <option value='name'>name</option>
        <option value='weight'>weight</option>
      </select>
    </>
  )
}

export default Filters;