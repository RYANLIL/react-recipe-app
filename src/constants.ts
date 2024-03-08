//Constants
export const API_URL = "https://api.spoonacular.com";
export const API_KEY = import.meta.env.VITE_SPOON_API_KEY;

export const dataRecipe = {
  offset: 0,
  number: 2,
  results: [
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://spoonacular.com/recipeImages/715538-312x231.jpg",
      imageType: "jpg",
    },
  ],
  totalResults: 86,
};
//helper wait function to test out async tasks
export function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
