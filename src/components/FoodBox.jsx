const foodBox = (props) => {
    return (
      <div key={props.food.id}>
        <p>{props.food.name}</p>
  
        <img src={props.food.image} style={{height:"100px"}} />
  
        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>
  
        <p>
          <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
        </p>
  
        <button onClick={() => props.deleteItem(props.food.id)}>Delete</button>
      </div>
    );
  };
  
  export default foodBox;
  