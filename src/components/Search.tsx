import { useState, useEffect } from "react";
import * as constants from "../constants";
import { ComplexSearchResults } from "../models/recipes/complexSearch";
import styles from "./search.module.css";
interface ISearchProps {
  //foodData: object;
  setFoodData: React.Dispatch<React.SetStateAction<ComplexSearchResults[]>>;
}

export default function Search({ setFoodData }: ISearchProps) {
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
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}
