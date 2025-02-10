import { Product } from "./product";

export interface CartState {
  cart: Product[];
  open: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  toggleCart: () => void;
}