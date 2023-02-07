import { useState } from "react";

import hogs from "../porkers_data";

import HogTile from "./HogTile";
import Filters from "./Filters";

function HogsContainer() {
  const [greasedChecked, setGreasedChecked] = useState(false);
  const [sortBy, setSortBy] = useState("original");

  // const filterGreasedHogs = hogs.filter((hog) => {
  //   if (greasedChecked) {
  //     return hog.greased;
  //   }

  //   return true;
  // });
  const filterGreasedHogs = greasedChecked
    ? hogs.filter((hog) => hog.greased)
    : hogs;

  function sortHogs() {
    if (sortBy === "name") {
      console.log("sortBy name");
    } else if (sortBy === "weight") {
      console.log(" sortBy weight");
    } else {
      console.log("original ordering");
    }
  }

  function handleGreasedChange(e) {
    setGreasedChecked(e.target.checked);
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  const hogTiles = filterGreasedHogs.map((hog) => (
    <HogTile key={hog.name} {...hog} />
  ));

  return (
    <section>
      <Filters
        greasedChecked={greasedChecked}
        handleGreasedChange={handleGreasedChange}
        sortBy={sortBy}
        handleSortChange={handleSortChange}
      />
      {hogTiles}
    </section>
  );
}

export default HogsContainer;
