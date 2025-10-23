export interface Product {
  id: number;
  name: string;
  followers: number;
  price: number;
  description: string;
  icon?: string;
}

export interface CartItem extends Product {
  quantity: number;
}