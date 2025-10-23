import React from 'react';
import { Link } from 'react-router-dom';
import CartItemComponent from '../components/CartItem';
import Sidebar from '../components/Sidebar';
import { useCartStore } from '../store/cartStore';

const Cart: React.FC = () => {
  const { items, getTotal } = useCartStore();

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Carrinho</h1>
        {items.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            {items.map((item) => (
              <CartItemComponent key={item.id} item={item} />
            ))}
            <div className="mt-6">
              <p className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</p>
              <Link to="/checkout" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                Finalizar Compra
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;