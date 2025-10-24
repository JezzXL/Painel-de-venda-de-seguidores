import React, { useState } from 'react';
import { Users, Heart, Eye, TrendingUp, Instagram } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import type { Product } from '../types';

type Platform = 'instagram' | 'tiktok';
type ServiceType = 'seguidores' | 'curtidas' | 'visualizacoes';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const servicesData = {
  seguidores: [
    { id: 1, name: 'Seguidores', amount: 100, price: 5, description: 'Seguidores reais e engajados', icon: 'users' },
  ],
  curtidas: [
    { id: 2, name: 'Curtidas', amount: 100, price: 3, description: 'Curtidas reais para seus posts', icon: 'heart' },
  ],
  visualizacoes: [
    { id: 3, name: 'Visualizações', amount: 1000, price: 2, description: 'Visualizações para seus vídeos', icon: 'eye' },
  ],
};

const Dashboard: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('instagram');
  const [selectedService, setSelectedService] = useState<ServiceType>('seguidores');

  const serviceLabel = {
    seguidores: 'seguidores',
    curtidas: 'curtidas',
    visualizacoes: 'visualizações'
  };

  const products: Product[] = servicesData[selectedService].map(service => ({
    ...service,
    followers: service.amount,
    platform: selectedPlatform,
    serviceType: selectedService
  }));

  return (
    <div className="flex min-h-screen bg-linear-to-br from-black via-purple-950 to-black">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-purple-400" />
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Serviços Premium para Redes Sociais
            </h1>
          </div>
          <p className="text-purple-200 text-lg">
            Escolha sua plataforma e o serviço ideal para turbinar seu perfil 🚀
          </p>
        </div>

        {/* Seleção de Plataforma */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-purple-400">▼</span> Escolha sua Plataforma
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <button
              onClick={() => setSelectedPlatform('instagram')}
              className={`flex items-center justify-center gap-3 p-6 rounded-xl transition-all duration-300 ${
                selectedPlatform === 'instagram'
                  ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-purple-900/30 text-purple-300 hover:bg-purple-900/50 border border-purple-500/30'
              }`}
            >
              <Instagram className="w-8 h-8" />
              <span className="text-xl font-bold">Instagram</span>
              {selectedPlatform === 'instagram' && (
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">✓</span>
              )}
            </button>

            <button
              onClick={() => setSelectedPlatform('tiktok')}
              className={`flex items-center justify-center gap-3 p-6 rounded-xl transition-all duration-300 ${
                selectedPlatform === 'tiktok'
                  ? 'bg-linear-to-r from-cyan-600 to-pink-600 text-white shadow-lg shadow-cyan-500/50 scale-105'
                  : 'bg-purple-900/30 text-purple-300 hover:bg-purple-900/50 border border-purple-500/30'
              }`}
            >
              <TikTokIcon />
              <span className="text-xl font-bold">TikTok</span>
              {selectedPlatform === 'tiktok' && (
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">✓</span>
              )}
            </button>
          </div>
        </div>

        {/* Seleção de Serviço */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-pink-400">🚀</span> Serviços Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Seguidores */}
            <button
              onClick={() => setSelectedService('seguidores')}
              className={`group relative p-6 rounded-2xl transition-all duration-300 text-left ${
                selectedService === 'seguidores'
                  ? 'bg-linear-to-br from-blue-600 to-blue-700 shadow-2xl shadow-blue-500/50 scale-105'
                  : 'bg-linear-to-br from-purple-900/40 to-black/60 hover:scale-105 border border-purple-500/30'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-3 rounded-lg ${
                  selectedService === 'seguidores' ? 'bg-white/20' : 'bg-blue-500/20'
                }`}>
                  <Users className={`w-6 h-6 ${
                    selectedService === 'seguidores' ? 'text-white' : 'text-blue-400'
                  }`} />
                </div>
                {selectedService === 'seguidores' && (
                  <span className="bg-white/30 px-2 py-1 rounded-full text-xs font-bold text-white">SELECIONADO</span>
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                selectedService === 'seguidores' ? 'text-white' : 'text-white'
              }`}>
                Seguidores
              </h3>
              <p className={`text-sm ${
                selectedService === 'seguidores' ? 'text-blue-100' : 'text-purple-300'
              }`}>
                Aumente seu número de seguidores com contas reais e ativas
              </p>
            </button>

            {/* Curtidas */}
            <button
              onClick={() => setSelectedService('curtidas')}
              className={`group relative p-6 rounded-2xl transition-all duration-300 text-left ${
                selectedService === 'curtidas'
                  ? 'bg-linear-to-br from-pink-600 to-pink-700 shadow-2xl shadow-pink-500/50 scale-105'
                  : 'bg-linear-to-br from-purple-900/40 to-black/60 hover:scale-105 border border-purple-500/30'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-3 rounded-lg ${
                  selectedService === 'curtidas' ? 'bg-white/20' : 'bg-pink-500/20'
                }`}>
                  <Heart className={`w-6 h-6 ${
                    selectedService === 'curtidas' ? 'text-white' : 'text-pink-400'
                  }`} />
                </div>
                {selectedService === 'curtidas' && (
                  <span className="bg-white/30 px-2 py-1 rounded-full text-xs font-bold text-white">SELECIONADO</span>
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                selectedService === 'curtidas' ? 'text-white' : 'text-white'
              }`}>
                Curtidas
              </h3>
              <p className={`text-sm ${
                selectedService === 'curtidas' ? 'text-pink-100' : 'text-purple-300'
              }`}>
                Impulsione seus posts com curtidas de qualidade
              </p>
            </button>

            {/* Visualizações */}
            <button
              onClick={() => setSelectedService('visualizacoes')}
              className={`group relative p-6 rounded-2xl transition-all duration-300 text-left ${
                selectedService === 'visualizacoes'
                  ? 'bg-linear-to-br from-purple-600 to-purple-700 shadow-2xl shadow-purple-500/50 scale-105'
                  : 'bg-linear-to-br from-purple-900/40 to-black/60 hover:scale-105 border border-purple-500/30'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-3 rounded-lg ${
                  selectedService === 'visualizacoes' ? 'bg-white/20' : 'bg-purple-500/20'
                }`}>
                  <Eye className={`w-6 h-6 ${
                    selectedService === 'visualizacoes' ? 'text-white' : 'text-purple-400'
                  }`} />
                </div>
                {selectedService === 'visualizacoes' && (
                  <span className="bg-white/30 px-2 py-1 rounded-full text-xs font-bold text-white">SELECIONADO</span>
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                selectedService === 'visualizacoes' ? 'text-white' : 'text-white'
              }`}>
                Visualizações
              </h3>
              <p className={`text-sm ${
                selectedService === 'visualizacoes' ? 'text-purple-100' : 'text-purple-300'
              }`}>
                Aumente o alcance dos seus vídeos e stories
              </p>
            </button>
          </div>
        </div>

        {/* Pacotes */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Pacotes de {serviceLabel[selectedService].charAt(0).toUpperCase() + serviceLabel[selectedService].slice(1)} para{' '}
            <span className={selectedPlatform === 'instagram' ? 'text-pink-400' : 'text-cyan-400'}>
              {selectedPlatform === 'instagram' ? 'Instagram' : 'TikTok'}
            </span>
          </h2>
          <p className="text-purple-300 mb-6">Escolha o pacote ideal para suas necessidades</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;