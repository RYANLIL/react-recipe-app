import { useState } from "react";
import Search from "./components/Search";
import { ComplexSearchResults } from "./models/recipes/complexSearch";
import { FoodList } from "./components/FoodList";
function App() {
  const [foodData, setFoodData] = useState<ComplexSearchResults[]>([]);

  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </>
  );
}

export default App;
//React.Dispatch<React.SetStateAction<string>>
