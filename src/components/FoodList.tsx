import { ComplexSearchResults } from "../models/recipes/complexSearch";
import FoodItem from "./FoodItem";
interface IFoodListProps {
  foodData: ComplexSearchResults[];
}

export function FoodList({ foodData }: IFoodListProps) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem key={food.id} item={food} />
      ))}
    </>
  );
}
