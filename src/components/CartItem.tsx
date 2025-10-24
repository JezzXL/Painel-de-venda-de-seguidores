import React from 'react';
import { Trash2, Users, Heart, Eye, Instagram } from 'lucide-react';
import type { CartItem as CartItemType } from '../types';
import { useCartStore } from '../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const serviceIcons = {
  seguidores: Users,
  curtidas: Heart,
  visualizacoes: Eye,
};

const serviceLabels = {
  seguidores: 'Seguidores',
  curtidas: 'Curtidas',
  visualizacoes: 'Visualizações',
};

const serviceGradients = {
  seguidores: 'from-blue-500 to-blue-600',
  curtidas: 'from-pink-500 to-pink-600',
  visualizacoes: 'from-purple-500 to-purple-600',
};

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const removeItem = useCartStore((state) => state.removeItem);
  const ServiceIcon = serviceIcons[item.serviceType || 'seguidores'];

  return (
    <div className="group bg-linear-to-br from-purple-900/40 to-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
      <div className="flex items-start gap-4">
        {/* Ícone do Serviço */}
        <div className={`shrink-0 bg-linear-to-br ${serviceGradients[item.serviceType || 'seguidores']} p-4 rounded-xl shadow-lg`}>
          <ServiceIcon className="w-8 h-8 text-white" />
        </div>

        {/* Informações */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {serviceLabels[item.serviceType || 'seguidores']}
              </h3>
              <div className="flex items-center gap-2">
                {item.platform === 'instagram' ? (
                  <Instagram className="w-4 h-4 text-pink-400" />
                ) : (
                  <div className="text-cyan-400">
                    <TikTokIcon />
                  </div>
                )}
                <span className="text-sm text-purple-300">
                  {item.platform === 'instagram' ? 'Instagram' : 'TikTok'}
                </span>
              </div>
            </div>

            {/* Preço */}
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                R$ {(item.price * item.quantity).toFixed(2)}
              </div>
              <div className="text-sm text-purple-400">
                R$ {item.price.toFixed(2)} cada
              </div>
            </div>
          </div>

          {/* Quantidade */}
          <div className="bg-black/30 rounded-lg p-3 mb-3 border border-purple-500/20">
            <div className="flex items-center justify-between">
              <span className="text-purple-300 text-sm">Quantidade</span>
              <div className="flex items-center gap-2">
                <ServiceIcon className="w-4 h-4 text-purple-400" />
                <span className="text-white font-bold text-lg">
                  {item.followers?.toLocaleString()}
                </span>
                <span className="text-purple-300 text-sm">unidades</span>
              </div>
            </div>
          </div>

          {/* Link/Username */}
          {item.linkOrUsername && (
            <div className="bg-black/30 rounded-lg p-3 mb-3 border border-purple-500/20">
              <div className="flex items-start justify-between gap-2">
                <span className="text-purple-300 text-sm">
                  {item.serviceType === 'seguidores' ? 'Usuário:' : 'Link:'}
                </span>
                <span className="text-white text-sm break-all text-right">
                  {item.linkOrUsername}
                </span>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
              ✓ Entrega 24h
            </span>
            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full border border-purple-500/30">
              ✓ Contas reais
            </span>
            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30">
              ✓ Garantia
            </span>
          </div>

          {/* Botão Remover */}
          <button
            onClick={() => removeItem(item.id)}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-200 text-sm font-semibold group/btn"
          >
            <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            Remover do carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;