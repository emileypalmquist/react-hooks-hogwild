function HogDetails({ highestMedalAcheived, weight, greased, specialty }) {
  const isGreased = greased ? "Greased" : "Not Greased";

  return (
    <ul>
      <li>{highestMedalAcheived}</li>
      <li>{weight}</li>
      <li>{specialty}</li>
      <li>{isGreased}</li>
    </ul>
  );
}

export default HogDetails;
