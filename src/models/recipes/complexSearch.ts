export class ComplexSearch {
  offset: number;
  number: number;
  results: ComplexSearchResults[];
  totalResults: number;
}

export class ComplexSearchResults {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
