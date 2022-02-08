import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import HogForm from "./HogForm";
import HogsList from "./HogsList";

// import hogs from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/hogs")
      .then((resp) => resp.json())
      // .then((hogsData) => setHogs(hogsData));
      .then(setHogs);
  }, []);

  return (
    <div className="App">
      <Nav />
      <HogForm />
      <HogsList hogs={hogs} />
    </div>
  );
}

export default App;
