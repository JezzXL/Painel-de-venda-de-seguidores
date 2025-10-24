export interface Product {
  id: number;
  name: string;
  followers: number;
  price: number;
  description: string;
  icon?: string;
  platform?: 'instagram' | 'tiktok';
  serviceType?: 'seguidores' | 'curtidas' | 'visualizacoes';
}

export interface CartItem extends Product {
  quantity: number;
}