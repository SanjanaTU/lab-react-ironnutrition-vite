import { useState } from "react";

const AddFoodForm = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={props.foods.name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>

      <label>
        Image
        <input
          name="image"
          type="text"
          value={props.foods.image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
      </label>

      <label>
        Calories
        <input
          name="calories"
          type="number"
          value={props.foods.calories}
          onChange={(event) => {
            setCalories(event.target.value);
          }}
        />
      </label>

      <label>
        Servings
        <input
          name="servings"
          type="number"
          value={props.foods.servings}
          onChange={(event) => {
            setServings(event.target.value);
          }}
        />
      </label>

      <button
        type="submit"
        onClick={() => props.createItem({ name, image, calories, servings })}
      >
        Create
      </button>
    </form>
  );
};

export default AddFoodForm;
