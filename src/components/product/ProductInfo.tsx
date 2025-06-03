import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import Button from '../ui/Button';
import QuantitySelector from '../ui/QuantitySelector';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrease = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="space-y-6">
      {/* Category & Name */}
      <div>
        <div className="text-orange-500 font-medium uppercase text-sm mb-2">
          {product.category}
        </div>
        <h1 className="text-3xl font-bold text-zinc-900">{product.name}</h1>
      </div>
      
      {/* Price */}
      <div className="text-2xl font-semibold">${product.price.toFixed(2)}</div>
      
      {/* Description */}
      <p className="text-zinc-600">
        {product.description}
      </p>
      
      {/* Quantity & Add to Cart */}
      <div className="pt-4">
        <div className="mb-2 font-medium">Quantity</div>
        <div className="flex flex-col sm:flex-row gap-4">
          <QuantitySelector
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          
          <div className="flex-1 flex gap-2">
            <Button 
              variant="primary" 
              fullWidth 
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </Button>
            
            <Button variant="outline" className="!px-4">
              <Heart size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Specs */}
      {product.specs && (
        <div className="border-t border-zinc-200 pt-6 mt-6">
          <h3 className="font-semibold text-lg mb-4">Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex">
                <span className="text-zinc-500 min-w-24">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Features */}
      <div className="border-t border-zinc-200 pt-6">
        <h3 className="font-semibold text-lg mb-4">Features</h3>
        <ul className="list-disc list-inside space-y-2 text-zinc-600">
          <li>High-quality construction</li>
          <li>Durable materials built to last</li>
          <li>Premium design</li>
          <li>Backed by our satisfaction guarantee</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;