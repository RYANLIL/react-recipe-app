import { Ingredient } from "../models/recipes/recipeInformation";
import styles from "./ingredientContainer.module.css";
interface IIngredient {
  ingredient: Ingredient;
}

export default function IngredientContainer({ ingredient }: IIngredient) {
  return (
    <div>
      <div className={styles.ingredientCard}>
        <div className={styles.imageWrapper}>
          <img
            title={ingredient.name}
            alt={ingredient.name}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
          />
        </div>
        <div className={styles.ingredientName}>
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.amount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
