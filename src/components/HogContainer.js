import { useState } from "react";
import HogTile from "./HogTile";
import Filters from "./Filters";

function HogContainer({ hogs }) {
  const [chosenFilter, setChosenFilter] = useState('all')
  const [chosenSort, setChosenSort] = useState('none')

  const renderHogs = filterHogs().map(hog => <HogTile key={hog.name} hog={hog} />)

  function handleChange(e) {
    setChosenFilter(e.target.value)
  }

  function handleSortChange(e) {
    setChosenSort(e.target.value)
  }

  function filterHogs() {
    if (chosenFilter === 'greased'){
      return sortHogs().filter(hog => hog.greased)
    } else if(chosenFilter === 'not-greased') {
      return sortHogs().filter(hog => !hog.greased)
    } else {
      return sortHogs()
    }
  }

  function sortHogs() {
    if(chosenSort === 'weight'){
      return hogs.sort((hogA, hogB) => hogA.weight - hogB.weight )
    } else if (chosenSort === 'name') {
      return hogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    } else {
      return hogs
    }
  }

  return (
    <div>
      <Filters handleChange={handleChange} handleSortChange={handleSortChange}/>
      {renderHogs}
    </div>
  )
}

export default HogContainer;