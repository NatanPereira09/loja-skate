import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99
}) => {
  return (
    <div className="flex items-center border border-zinc-300 rounded-md overflow-hidden h-10">
      <button 
        className="w-10 h-10 flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 transition-colors"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={16} className={quantity <= min ? 'text-zinc-400' : 'text-zinc-800'} />
      </button>
      
      <div className="w-12 h-10 flex items-center justify-center text-zinc-800 font-medium">
        {quantity}
      </div>
      
      <button 
        className="w-10 h-10 flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 transition-colors"
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus size={16} className={quantity >= max ? 'text-zinc-400' : 'text-zinc-800'} />
      </button>
    </div>
  );
};

export default QuantitySelector;