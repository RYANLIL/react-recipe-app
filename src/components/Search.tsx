import { useState, useEffect } from "react";
import * as constants from "../constants";
import { ComplexSearchResults } from "../models/recipes/complexSearch";
import styles from "./search.module.css";
interface ISearchProps {
  //foodData: object;
  setFoodData: React.Dispatch<React.SetStateAction<ComplexSearchResults[]>>;
}

export default function Search({ setFoodData }: ISearchProps) {
  const [query, setQuery] = useState("Pasta");
  //const URL = `${constants.API_URL}/recipes/complexSearch?apiKey=${constants.API_KEY}`;
  const URL = `${constants.API_URL}/recipes/complexSearch?}`;

  async function fetchFood(e: React.FormEvent<HTMLElement>, query: string) {
    e.preventDefault();
    const toSearch = query.toLowerCase();
    if (toSearch === "pasta") {
      setFoodData(constants.dataRecipe.results);
      console.log("Searched Pasta");
    } else if (toSearch === "pizza") {
      setFoodData(constants.dataRecipePizza.results);
      console.log("Searched Pizza");
    } else if (toSearch === "pancake") {
      setFoodData(constants.dataRecipePancake.results);
      console.log("Searched Pancake");
    } else {
      try {
        const res = await fetch(
          `${URL}&query=${query}&apiKey=${constants.API_KEY}`
        );
        if (!res.ok) {
          const message = await res.json();
          throw Error(message.message);
        }
        const data = await res.json(); //res is a promise
        setFoodData(data.results);
        console.log(data);
        console.log(res);
      } catch (e) {
        console.error(e);
      }
      console.log(query);
    }
  }

  return (
    <form onSubmit={(e) => fetchFood(e, query)}>
      <div className={styles.searchContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.itemButton}>🔍</button>
      </div>
    </form>
  );

  /**useEffect */
  //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   //the return function is called when the component is done is clean up
  //   return () => {
  //     // run clean up of any manually added event listeners
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); //empty dependency array means useEffect only runs onMount.

  // return <div>{windowWidth}</div>;
}
