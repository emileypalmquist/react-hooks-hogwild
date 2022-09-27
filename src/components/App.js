import React, { useState } from "react";

import Nav from "./Nav";
import HogCardList from "./HogCardList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
  const [showGreased, setShowGreased] = useState(false);

  const filteredHogs = hogs.filter((hog) => {
    if (showGreased) {
      return hog.greased;
    } else {
      return true;
    }
  });

  return (
    <div className="App">
      <Nav />
      <Filter showGreased={showGreased} setShowGreased={setShowGreased} />
      <HogCardList hogs={filteredHogs} />
    </div>
  );
}

export default App;
