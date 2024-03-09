import { useEffect, useState } from "react";
import * as constants from "../constants";
import { RecipeInformation } from "../models/recipes/recipeInformation";
interface IFoodDetails {
  recipeId: number;
}
export default function FoodDetails({ recipeId }: IFoodDetails) {
  const [recipeInfo, setRecipeInfo] = useState<RecipeInformation>(
    new RecipeInformation()
  );
  const [isLoading, setIsLoading] = useState(true);

  //console.log(recipeInfo);
  const URL = `${constants.API_URL}/recipes/${recipeId}/information`;

  useEffect(() => {
    async function getRecipeInfo(id: number) {
      //fetching from api
      //const res = await fetch(`${URL}?apiKey=${constants.API_KEY}`);
      //const data = await res.json();

      //getting mock data
      switch (id) {
        case 716429:
          setRecipeInfo(constants.recipe_716429);
          break;
        case 715538:
          setRecipeInfo(constants.recipe_715538);
      }
      await constants.wait(1000);
      setIsLoading(false);
    }
    // get recipe info
    getRecipeInfo(recipeId);
  }, [recipeId]);

  return (
    <div>
      <div>
        <h1>{recipeInfo.title}</h1>
      </div>
      <img src={recipeInfo.image} />
      <div>
        <span>
          <strong>⏱{recipeInfo.readyInMinutes} Minutes</strong>
        </span>
        <span>
          👨‍👩‍👧‍👦<strong>Serves {recipeInfo.servings}</strong>
        </span>
        <span>
          {recipeInfo.vegetarian ? "🥕Vegetarian" : "🍖Not Vegetarian"}
        </span>
        <span>{recipeInfo.vegan ? "Vegan" : "Not Vegan"}</span>
      </div>
      <div>
        <span>{recipeInfo.pricePerServing / 100} Per serving</span>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {/* {todo check if array is empty/null/undefined first} */}
            {recipeInfo.analyzedInstructions.length > 0 ? (
              recipeInfo.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            ) : (
              <div>
                <p>Find detailed instructions at</p>
                {<a href={recipeInfo.sourceUrl}>{recipeInfo.sourceName}</a>}
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
