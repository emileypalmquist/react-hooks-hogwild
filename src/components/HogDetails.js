function HogDetails({ greased, specialty, weight, highestMedalAchieved }) {
  return (
    <ul>
      <li>{greased ? "greased" : "not greased"}</li>
      <li>{specialty}</li>
      <li>{weight}</li>
      <li>{highestMedalAchieved}</li>
    </ul>
  );
}
export default HogDetails;
