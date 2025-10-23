import React from 'react';
import { Users, Zap, Crown, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import type { Product } from '../types';

const products: Product[] = [
  { 
    id: 1, 
    name: 'Pacote Básico', 
    followers: 100, 
    price: 5, 
    description: 'Seguidores reais para Instagram.',
    icon: 'users'
  },
  { 
    id: 2, 
    name: 'Pacote Premium', 
    followers: 500, 
    price: 20, 
    description: 'Seguidores de alta qualidade.',
    icon: 'zap'
  },
  { 
    id: 3, 
    name: 'Pacote VIP', 
    followers: 1000, 
    price: 35, 
    description: 'Seguidores engajados.',
    icon: 'crown'
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-linear-to-br from-black via-purple-950 to-black">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-purple-400" />
            <h1 className="text-4xl font-bold bg-linear-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Painel de Venda de Seguidores
            </h1>
          </div>
          <p className="text-purple-200 text-lg">
            Escolha o melhor pacote para impulsionar seu Instagram 🚀
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-br from-purple-900/50 to-black/50 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm font-medium">Total de Pacotes</p>
                <p className="text-3xl font-bold text-white mt-1">3</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-purple-900/50 to-black/50 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm font-medium">Seguidores Disponíveis</p>
                <p className="text-3xl font-bold text-white mt-1">1,600+</p>
              </div>
              <div className="bg-pink-500/20 p-3 rounded-lg border border-pink-500/30">
                <TrendingUp className="w-6 h-6 text-pink-400" />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-purple-900/50 to-black/50 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm font-medium">A partir de</p>
                <p className="text-3xl font-bold text-white mt-1">$5</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Por que escolher nossos pacotes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Entrega Rápida</h3>
                <p className="text-sm text-purple-100">Seguidores entregues em até 24h</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Seguidores Reais</h3>
                <p className="text-sm text-purple-100">100% contas autênticas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Suporte Premium</h3>
                <p className="text-sm text-purple-100">Atendimento 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;