import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  
  const isEmpty = cartItems.length === 0;
  
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {isEmpty ? (
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="mb-6">
              <ShoppingBag size={64} className="mx-auto text-zinc-400" />
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-zinc-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            
            <Link to="/products">
              <Button variant="primary" size="lg">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">
                    Cart Items ({cartItems.length})
                  </h2>
                  
                  <button 
                    onClick={clearCart}
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
                
                <div className="divide-y divide-zinc-200">
                  {cartItems.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-8 flex items-center">
                  <Link to="/products" className="flex items-center text-zinc-600 hover:text-black transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;