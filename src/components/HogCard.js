import { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({
  hog: {
    name,
    image,
    "highest medal achieved": highestMedalAcheived,
    specialty,
    weight,
    greased,
  },
}) {
  const [showDetail, setShowDetail] = useState(false);

  const renderDetails = showDetail && (
    <HogDetails
      highestMedalAcheived={highestMedalAcheived}
      specialty={specialty}
      weight={weight}
      greased={greased}
    />
  );

  function handleCardClick() {
    setShowDetail((currentShowDetail) => !currentShowDetail);
  }

  return (
    <li className="pigTile" onClick={handleCardClick}>
      <h3>{name}</h3>
      <img src={image} alt={name} className="minPigTile" />
      {renderDetails}
    </li>
  );
}
export default HogCard;
