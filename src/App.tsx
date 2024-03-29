import { useState } from "react";
import Search from "./components/Search";
import { ComplexSearchResults } from "./models/recipes/complexSearch";
import { FoodList } from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState<ComplexSearchResults[]>([]);
  const [recipeId, setRecipeId] = useState<number>(0);

  return (
    <>
      <Nav />
      <Search setFoodData={setFoodData} />
      {/*Passing the food list component as 
      a child to the container component  */}
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setRecipeId={setRecipeId} />
        </InnerContainer>
        <InnerContainer>
          {recipeId === 0 ? <></> : <FoodDetails recipeId={recipeId} />}
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
//React.Dispatch<React.SetStateAction<string>>
