import React, { useState } from 'react';
import { Users, Zap, Crown, ShoppingCart, Heart, Eye } from 'lucide-react';
import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const iconMap = {
  users: Users,
  zap: Zap,
  crown: Crown,
  heart: Heart,
  eye: Eye,
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const Icon = iconMap[product.icon as keyof typeof iconMap] || Users;

  // Configurações baseadas no tipo de serviço
  const serviceConfig = {
    seguidores: { min: 100, max: 10000, step: 100, pricePerUnit: 0.045 },
    curtidas: { min: 100, max: 10000, step: 100, pricePerUnit: 0.02 },
    visualizacoes: { min: 1000, max: 100000, step: 1000, pricePerUnit: 0.002 },
  };

  const config = serviceConfig[product.serviceType || 'seguidores'];
  const [quantity, setQuantity] = useState(config.min);
  const totalPrice = (quantity * config.pricePerUnit).toFixed(2);
  const discount = quantity >= 5000 ? 10 : 0;
  const finalPrice = discount > 0 ? (parseFloat(totalPrice) * 0.9).toFixed(2) : totalPrice;

  const gradients = {
    seguidores: 'from-blue-600 to-blue-700',
    curtidas: 'from-pink-600 to-pink-700',
    visualizacoes: 'from-purple-600 to-purple-700',
  };

  const bgColors = {
    seguidores: 'bg-blue-500',
    curtidas: 'bg-pink-500',
    visualizacoes: 'bg-purple-500',
  };

  const serviceLabel = {
    seguidores: 'seguidores',
    curtidas: 'curtidas',
    visualizacoes: 'visualizações',
  };

  const handleAddToCart = () => {
    addItem({
      ...product,
      followers: quantity,
      price: parseFloat(finalPrice),
      quantity: 1,
    });
  };

  return (
    <div className="group relative bg-linear-to-br from-purple-900/40 to-black/60 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 overflow-hidden border border-purple-500/30 hover:border-purple-400/50 hover:-translate-y-2">
      {/* Efeito de brilho */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Header */}
      <div className={`relative bg-linear-to-br ${gradients[product.serviceType || 'seguidores']} p-6`}>
        <div className="flex items-center justify-between mb-4">
          <div className="bg-black/30 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/10">
            <Icon className="w-6 h-6 text-white" />
          </div>
          {discount > 0 && (
            <span className="bg-linear-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
              -{discount}% OFF
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {serviceLabel[product.serviceType || 'seguidores'].charAt(0).toUpperCase() + 
           serviceLabel[product.serviceType || 'seguidores'].slice(1)}
        </h3>
        <p className="text-white/80 text-sm">
          {product.platform === 'instagram' ? 'Instagram' : 'TikTok'}
        </p>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Alerta de conta pública */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
          <div className="flex items-start gap-2">
            <span className="text-yellow-500 text-lg">⚠️</span>
            <div className="text-xs text-yellow-200">
              <strong>Atenção:</strong> Sua conta precisa estar em modo <strong>público</strong>
            </div>
          </div>
        </div>

        {/* Quantidade Slider */}
        <div className="mb-6">
          <label className="block text-purple-200 text-sm font-semibold mb-3">
            Quantidade: <span className="text-white text-lg">{quantity.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-full h-2 bg-purple-900/50 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-xs text-purple-400 mt-1">
            <span>{config.min.toLocaleString()}</span>
            <span>{config.max.toLocaleString()}</span>
          </div>
        </div>

        {/* Preço */}
        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-4 border border-purple-500/20">
          <div className="text-center">
            {discount > 0 && (
              <div className="text-purple-400 line-through text-sm mb-1">
                R$ {totalPrice}
              </div>
            )}
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-bold text-white">R$ {finalPrice}</span>
            </div>
            <div className="text-purple-300 text-sm mt-1">
              R$ {config.pricePerUnit.toFixed(3)} por unidade
            </div>
            {discount > 0 && (
              <div className="mt-2 inline-block bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                🎉 Você economiza R$ {(parseFloat(totalPrice) - parseFloat(finalPrice)).toFixed(2)}
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-purple-300">
            <div className={`w-1.5 h-1.5 ${bgColors[product.serviceType || 'seguidores']} rounded-full`}></div>
            <span>Entrega em até 24h</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-purple-300">
            <div className={`w-1.5 h-1.5 ${bgColors[product.serviceType || 'seguidores']} rounded-full`}></div>
            <span>Contas 100% reais</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-purple-300">
            <div className={`w-1.5 h-1.5 ${bgColors[product.serviceType || 'seguidores']} rounded-full`}></div>
            <span>Garantia de reposição</span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`relative w-full bg-linear-to-r ${gradients[product.serviceType || 'seguidores']} text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <ShoppingCart className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Adicionar ao Carrinho</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;