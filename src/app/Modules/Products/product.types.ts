export interface IProduct {
  save(): unknown;
  _id?: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  imageUrl: string;
  rating: number;
}
