import { useState } from "react";
import Search from "./components/Search";
import { ComplexSearchResults } from "./models/recipes/complexSearch";
import { FoodList } from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
function App() {
  const [foodData, setFoodData] = useState<ComplexSearchResults[]>([]);

  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </>
  );
}

export default App;
//React.Dispatch<React.SetStateAction<string>>
