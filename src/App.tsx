import { useState } from "react";
import Search from "./components/Search";
import { ComplexSearchResults } from "./models/recipes/complexSearch";
import { FoodList } from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
function App() {
  const [foodData, setFoodData] = useState<ComplexSearchResults[]>([]);

  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      {/*Passing the food list component as 
      a child to the container component  */}
      <Container>
        <FoodList foodData={foodData} />
      </Container>
    </>
  );
}

export default App;
//React.Dispatch<React.SetStateAction<string>>
