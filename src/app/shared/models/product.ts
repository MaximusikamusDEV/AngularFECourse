export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl?: string;
  stock?: number;
  ratingRate?: number;
  ratingCount?: number;
}
