import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Produtos em Destaque</h2>
            <p className="text-zinc-600">Nossos equipamentos mais populares, selecionados para você.</p>
          </div>
          
          <Link to="/products" className="mt-4 md:mt-0">
            <Button variant="outline">
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;