import { useState } from "react";

import HogCard from "./HogCard";
import Filters from "./Filters";

function HogsList({ hogs }) {
  const [greased, setGreased] = useState(false);

  const greasedHogs = hogs.filter((hog) => hog.greased);
  const hogsToDisplay = greased ? greasedHogs : hogs;

  const renderHogs = hogsToDisplay.map((hog) => (
    <HogCard key={hog.name} oneHog={hog} />
  ));

  return (
    <div>
      <Filters greased={greased} setGreased={setGreased} />
      {renderHogs}
      {/* {hogs.map((hog) => (
        <HogCard />
      ))} */}
    </div>
  );
}

export default HogsList;
