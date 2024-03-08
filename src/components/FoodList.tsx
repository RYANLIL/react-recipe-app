import { ComplexSearchResults } from "../models/recipes/complexSearch";
import FoodItem from "./FoodItem";
interface IFoodListProps {
  foodData: ComplexSearchResults[];
  setRecipeId: React.Dispatch<React.SetStateAction<number>>;
}

export function FoodList({ foodData, setRecipeId }: IFoodListProps) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setRecipeId={setRecipeId} />
      ))}
    </>
  );
}
