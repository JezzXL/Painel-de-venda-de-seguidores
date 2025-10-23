import React from 'react';
import type { CartItem as CartItemType } from '../types';
import { useCartStore } from '../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p>{item.followers} seguidores - ${item.price} x {item.quantity}</p>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remover
      </button>
    </div>
  );
};

export default CartItemComponent;