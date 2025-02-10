import { create } from "zustand";
import { Product } from "../types";

interface CartState {
  cart: Product[];
  open: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  toggleCart: () => void; 
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  open: false,
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (index) =>
    set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
  toggleCart: () => set((state) => ({ open: !state.open })),
}));
