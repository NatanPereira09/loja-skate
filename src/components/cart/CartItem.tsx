import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';
import QuantitySelector from '../ui/QuantitySelector';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrease = () => {
    updateQuantity(product.id, quantity - 1);
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  const itemTotal = product.price * quantity;
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-zinc-200">
      {/* Product Image */}
      <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0 mr-4">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex-1 mt-4 sm:mt-0">
        <h3 className="font-medium text-lg text-zinc-900">{product.name}</h3>
        <p className="text-zinc-500 text-sm mb-2">{product.category}</p>
        <p className="font-medium">${product.price.toFixed(2)}</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="mt-4 sm:mt-0 flex sm:flex-col items-center sm:items-end sm:ml-4">
        <QuantitySelector 
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
        
        <div className="font-semibold ml-6 sm:ml-0 sm:mt-4 sm:text-right">
          ${itemTotal.toFixed(2)}
        </div>
      </div>
      
      {/* Remove Button */}
      <button 
        onClick={handleRemove}
        className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors ml-auto sm:ml-4"
        aria-label="Remove item"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default CartItem;