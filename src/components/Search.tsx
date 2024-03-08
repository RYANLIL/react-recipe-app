import { useState, useEffect } from "react";
import * as constants from "../constants";
import { ComplexSearchResults } from "../models/recipes/complexSearch";
interface ISearchProps {
  foodData: object;
  setFoodData: React.Dispatch<React.SetStateAction<ComplexSearchResults[]>>;
}

export default function Search({ foodData, setFoodData }: ISearchProps) {
  const [query, setQuery] = useState("pizza");
  //syntax of the useEffect hook
  //useEffect(()=>,[]);
  useEffect(() => {
    async function fetchFood() {
      //   const res = await fetch(
      //     `${constants.API_URL}/recipes/complexSearch?query=${query}`
      //   );
      //   const data = await res.json(); //res is a promise
      //   setFoodData(data.results);

      await constants.wait(500);
      setFoodData(constants.dataRecipe.results);
      console.log(foodData);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
      {/* {foodData.map((food) => {
        console.log(food);
        return <h1>{food.title}</h1>;
      })} */}
    </div>
  );
}
