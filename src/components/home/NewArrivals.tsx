import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const NewArrivals: React.FC = () => {
  const newProducts = products.filter(product => product.new);
  
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Novidades</h2>
            <p className="text-zinc-400">Equipamentos novos, recém-chegados.</p>
          </div>
          
          <Link to="/products?filter=new" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Ver Todas as Novidades
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map(product => (
            <div key={product.id} className="bg-zinc-900 rounded-lg overflow-hidden">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;