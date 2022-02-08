import { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({
  oneHog: {
    name,
    image,
    greased,
    specialty,
    weight,
    "highest medal achieved": highestMedalAchieved,
  },
}) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    // setShowDetails(changeState)
    setShowDetails((currentShowDetails) => !currentShowDetails);
  }

  // function changeState(currentShowDetails) {
  //   return !currentShowDetails
  // }

  function displayDetails() {
    if (showDetails) {
      return (
        <HogDetails
          greased={greased}
          specialty={specialty}
          weight={weight}
          highestMedalAchieved={highestMedalAchieved}
        />
      );
    }
  }

  return (
    <article className="pigTile" onClick={handleClick}>
      <h3>{name}</h3>
      <img src={image} alt={name} className="minPigTile" />
      {displayDetails()}
    </article>
  );
}

export default HogCard;
