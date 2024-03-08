import { useState } from "react";
import Search from "./components/Search";
import { ComplexSearchResults } from "./models/recipes/complexSearch";
function App() {
  const [foodData, setFoodData] = useState<ComplexSearchResults[]>([]);

  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </>
  );
}

export default App;
//React.Dispatch<React.SetStateAction<string>>
