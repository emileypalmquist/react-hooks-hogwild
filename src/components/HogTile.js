import { useState } from "react";

import HogDetails from "./HogDetails";

function HogTile({
  name,
  image,
  greased,
  specialty,
  weight,
  "highest medal achieved": highestMedal,
}) {
  const [showDetails, setShowDetails] = useState(false);

  // function callbackFunction(currentState) {
  //   return !currentState
  // }

  function handleClick() {
    // setShowDetails(!showDetails);
    // setShowDetails(callbackFunction);
    setShowDetails((currentState) => !currentState);
  }

  return (
    <article className="pigTile" onClick={handleClick}>
      <h2>{name}</h2>
      <img className="minPigTile" src={image} alt={name} />
      {/* {showDetails ? <HogDetails /> : null} */}
      {showDetails && (
        <HogDetails
          greased={greased}
          specialty={specialty}
          weight={weight}
          highestMedal={highestMedal}
        />
      )}
    </article>
  );
}

export default HogTile;
