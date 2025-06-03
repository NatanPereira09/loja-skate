export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  featured: boolean;
  new: boolean;
  specs?: {
    [key: string]: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}