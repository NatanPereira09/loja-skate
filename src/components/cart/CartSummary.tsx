import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const CartSummary: React.FC = () => {
  const { subtotal, itemCount } = useCart();
  
  // Shipping calculation logic could be more complex in a real app
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;
  
  return (
    <div className="bg-zinc-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-zinc-600">Subtotal ({itemCount} items)</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-zinc-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        {subtotal > 0 && subtotal < 100 && (
          <div className="text-sm text-zinc-500 mt-2">
            Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping
          </div>
        )}
        
        <div className="border-t border-zinc-200 pt-3 mt-3"></div>
        
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button variant="secondary" fullWidth size="lg">
        Checkout
      </Button>
      
      <p className="text-center text-sm text-zinc-500 mt-4">
        Secure checkout powered by Stripe
      </p>
    </div>
  );
};

export default CartSummary;