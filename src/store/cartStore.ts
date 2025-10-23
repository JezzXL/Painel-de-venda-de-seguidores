import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (id: number) => void;
  getTotal: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const existing = get().items.find((item) => item.id === product.id);
        if (existing) {
          set((state) => ({
            items: state.items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          }));
        } else {
          set((state) => ({ items: [...state.items, { ...product, quantity: 1 }] }));
        }
      },
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
      getTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      clearCart: () => set({ items: [] }),
    }),
    { name: 'cart-storage' }
  )
);