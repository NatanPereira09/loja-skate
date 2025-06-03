import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {product.new && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold py-1 px-2 rounded">
            NEW
          </div>
        )}
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg text-zinc-900 group-hover:text-black transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-1 font-medium text-zinc-800">
          ${product.price.toFixed(2)}
        </div>
        
        <div className="mt-3 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
      </div>
    </Link>
  );
};

export default ProductCard;