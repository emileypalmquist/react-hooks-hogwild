function PigDetails({ greased, weight, specialty, highestMedalAchieved }) {
  return (
    <section>
      <p>
        {greased ? "greased" : "not greased"} - {weight} - {specialty} -{" "}
        {highestMedalAchieved}
      </p>
    </section>
  );
}

export default PigDetails;
