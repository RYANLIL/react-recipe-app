import { ComplexSearchResults } from "../models/recipes/complexSearch";

interface IFoodItemProps {
  item: ComplexSearchResults;
}
export default function FoodItem({ item }: IFoodItemProps) {
  return (
    <>
      <div key={item.id}>
        <img src={item.image} />
        <h2>{item.title}</h2>
        <button>View Recipe</button>
      </div>
    </>
  );
}
