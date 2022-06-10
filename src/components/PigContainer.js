import { useState } from "react";

import PigTile from "./PigTile";
import Filters from "./Filters";

function PigContainer({ hogs }) {
  const [checked, setChecked] = useState(false);
  const [sortBy, setSortBy] = useState(false);

  const greasedHogs = hogs.filter((hog) => hog.greased);

  const filteredHogs = checked ? greasedHogs : hogs;

  // const filteredHogs = hogs.filter((hog) =>
  //   checked ? checked === hog.greased : true
  // );

  function sortedHogs() {
    if (sortBy === "name") {
      const sortedByName = [...filteredHogs].sort((hogA, hogB) =>
        hogA.name.toLowerCase().localeCompare(hogB.name.toLowerCase())
      );
      return sortedByName;
    } else if (sortBy === "weight") {
      const sortedByWeight = [...filteredHogs].sort(
        (hogA, hogB) => hogA.weight - hogB.weight
      );
      return sortedByWeight;
    } else {
      return filteredHogs;
    }
  }

  const renderHogs = sortedHogs().map((hog) => (
    <PigTile key={hog.name} {...hog} />
  ));

  return (
    <main>
      <Filters
        checked={checked}
        setChecked={setChecked}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {renderHogs}
    </main>
  );
}

export default PigContainer;
