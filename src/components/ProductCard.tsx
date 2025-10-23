import React from 'react';
import { Users, Zap, Crown, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const iconMap = {
  users: Users,
  zap: Zap,
  crown: Crown,
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const Icon = iconMap[product.icon as keyof typeof iconMap] || Users;

  const gradients = {
    1: 'from-blue-500 to-blue-600',
    2: 'from-purple-500 to-purple-600',
    3: 'from-amber-500 to-orange-600',
  };

  const bgGradients = {
    1: 'from-blue-50 to-blue-100',
    2: 'from-purple-50 to-purple-100',
    3: 'from-amber-50 to-orange-100',
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2">
      {/* Header with gradient */}
      <div className={`bg-gradient-to-br ${bgGradients[product.id as keyof typeof bgGradients]} p-6 pb-16`}>
        <div className="flex items-center justify-between mb-4">
          <div className={`bg-gradient-to-br ${gradients[product.id as keyof typeof gradients]} p-3 rounded-xl shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {product.id === 3 && (
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-900">${product.price}</span>
          <span className="text-gray-600">/ pacote</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 -mt-8 relative">
        <div className="bg-white rounded-xl p-4 shadow-md mb-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-700">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-lg">{product.followers.toLocaleString()}</span>
            <span className="text-gray-500">seguidores</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 min-h-[3rem]">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Entrega em 24h</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Seguidores reais</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Garantia de reposição</span>
          </div>
        </div>

        <button
          onClick={() => addItem({ ...product, quantity: 1 })}
          className={`w-full bg-gradient-to-r ${gradients[product.id as keyof typeof gradients]} text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}
        >
          <ShoppingCart className="w-5 h-5" />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;