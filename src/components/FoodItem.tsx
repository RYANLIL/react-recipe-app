import { ComplexSearchResults } from "../models/recipes/complexSearch";
import styles from "./foodItem.module.css";

interface IFoodItemProps {
  food: ComplexSearchResults;
  setRecipeId: React.Dispatch<React.SetStateAction<number>>;
}
export default function FoodItem({ food, setRecipeId }: IFoodItemProps) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => setRecipeId(food.id)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
