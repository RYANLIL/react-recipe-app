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
  console.log(`From Food details ${recipeId}`);
  //console.log(recipeInfo);
  const URL = `${constants.API_URL}/recipes/${recipeId}/information`;

  useEffect(() => {
    // get recipe info from
    getRecipeInfo(recipeId);
  }, [recipeId]);

  function getRecipeInfo(id: number) {
    switch (id) {
      case 716429:
        setRecipeInfo(constants.recipe_716429);
        break;
      case 715538:
        setRecipeInfo(constants.recipe_715538);
    }
  }

  return (
    <div>
      food details {recipeId} <br /> {URL} <br />
      {JSON.stringify(recipeInfo)}
    </div>
  );
}
