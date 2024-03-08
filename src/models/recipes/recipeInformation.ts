export class RecipeInformation {
  vegetarian: false;
  vegan: false;
  glutenFree: false;
  dairyFree: false;
  veryHealthy: false;
  cheap: false;
  veryPopular: false;
  sustainable: false;
  lowFodmap: false;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: Ingredients[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  winePairing?: {
    pairedWines: [];
    pairingText: string;
    productMatches: [];
  };
  instructions: string;
  analyzedInstructions: [];
  originalId: null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

export class Ingredients {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
}
