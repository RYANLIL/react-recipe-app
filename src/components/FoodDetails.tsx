import { useEffect, useState } from "react";
import * as constants from "../constants";
import {
  // Ingredient,
  RecipeInformation,
} from "../models/recipes/recipeInformation";
import styles from "./foodDetails.module.css";
import IngredientContainer from "./IngredientContainer";
interface IFoodDetails {
  recipeId: number;
}
export default function FoodDetails({ recipeId }: IFoodDetails) {
  const [recipeInfo, setRecipeInfo] = useState<RecipeInformation>(
    new RecipeInformation()
  );

  const [isLoading, setIsLoading] = useState(true);
  const URL = `${constants.API_URL}/recipes/${recipeId}/information`;

  useEffect(() => {
    async function getRecipeInfo(id: number) {
      //getting mock data
      await constants.wait(1000);
      switch (id) {
        case 716429:
          setRecipeInfo(constants.recipe_716429);
          break;
        case 715538:
          setRecipeInfo(constants.recipe_715538);
          break;
        case 654959:
          setRecipeInfo(constants.recipe_654959);
          break;
        case 716300:
          setRecipeInfo(constants.recipe_716300);
          break;
        default:
          {
            try {
              //fetching from api
              const res = await fetch(`${URL}?apiKey=${constants.API_KEY}`);
              //fetch only throws error there is no response;
              //have to check if response is okay any http code in 200 - 299
              //sets okay to true
              if (!res.ok) {
                const message = await res.json();
                throw Error(message.message);
              }
              const data = await res.json();

              console.log(data);
              console.log(res);
              setRecipeInfo(data);
            } catch (e) {
              console.error(e);
            }
          }

          break;
      }
      setIsLoading(false);
    }
    // get recipe info
    getRecipeInfo(recipeId);
  }, [recipeId, URL]);

  //Could put isLoading or place holder jsx
  if (isLoading) {
    return;
  }

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{recipeInfo.title}</h1>
        <img className={styles.recipeImage} src={recipeInfo.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱{recipeInfo.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>Serves {recipeInfo.servings}</strong>
          </span>
          <span>
            <strong>
              {recipeInfo.vegetarian ? "🥕Vegetarian" : "🍖Not Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{recipeInfo.vegan ? "🥗Vegan" : "Not Vegan"}</strong>
          </span>
        </div>
        <div>
          <strong>
            <span>${recipeInfo.pricePerServing / 100} Per serving</span>
          </strong>
        </div>
        <h2>Ingredients</h2>
        <div className={styles.ingredientContainer}>
          {recipeInfo.extendedIngredients.map((item) => {
            return <IngredientContainer key={item.id} ingredient={item} />;
          })}
        </div>

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          {/* Conditional render based on loading state not used in final version  */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ol>
              {/* {todo check if array is empty/null/undefined first} */}
              {recipeInfo.analyzedInstructions.length > 0 ? (
                recipeInfo.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              ) : (
                <div>
                  <span>Find detailed instructions at </span>
                  {
                    <a href={recipeInfo.sourceUrl} target="_blank">
                      {recipeInfo.sourceName}
                    </a>
                  }
                </div>
              )}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
