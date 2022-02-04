import { useState } from "react";

function NewPigForm() {
  const [newHog, setNewHog] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: 0.5,
    "highest medal achieved": "",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/porkchop.jpg",
  });

  function handleChange(e) {
    setNewHog((currentHog) => ({
      ...currentHog,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newHog.name}
        />
      </label>
      <label>
        Specialty:{" "}
        <input type="text" name="specialty" value={newHog.specialty} />
      </label>
      <label>
        greased: <input type="checkbox" name="greased" value={newHog.greased} />
      </label>
      <label>
        weight:{" "}
        <input
          type="number"
          min=".5"
          max="100"
          step="0.1"
          name="weight"
          value={newHog.weight}
        />
      </label>
      <label>
        medal:{" "}
        <input
          type="text"
          name="highest medal achieved"
          value={newHog["highest medal achieved"]}
        />
      </label>
      <label>
        image: <input type="text" name="image" value={newHog.image} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default NewPigForm;
