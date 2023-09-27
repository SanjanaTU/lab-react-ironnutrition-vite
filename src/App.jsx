import { useState } from "react";
import { v4 as idGenerator } from "uuid";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";


function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteItem = (id) => {
    const newArray = [...foods];
    newArray.splice(id, 1);
    setFoods(newArray);
  };

  const createItem = (newFood) => {
    const newFoodArray = { ...newFood, id: idGenerator() };
    console.log(newFoodArray);
    const newArray = [newFoodArray, ...foods];
    setFoods(newArray);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm foods={foods} createItem={createItem} />

      {foods.map((food) => (
        <FoodBox key={food.id} food={food} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default App;
