interface IFoodDetails {
  recipeId: number;
}
export default function FoodDetails({ recipeId }: IFoodDetails) {
  console.log(`From Food details ${recipeId}`);
  return <div>food details {recipeId}</div>;
}
