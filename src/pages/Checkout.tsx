import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';

const Checkout: React.FC = () => {
  const { getTotal, clearCart } = useCartStore();
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Compra finalizada! Total: $${getTotal().toFixed(2)}. Obrigado, ${formData.name}!`);
    clearCart();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Endereço"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Confirmar Pagamento - Total: ${getTotal().toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default Checkout;