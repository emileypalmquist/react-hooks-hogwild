import React from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import NewPigForm from "./NewPigForm";

import { hogs } from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<NewPigForm />
			<HogContainer hogs={hogs}/>
		</div>
	);
}

export default App;
