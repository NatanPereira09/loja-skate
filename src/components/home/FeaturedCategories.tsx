import React from 'react';
import { categories } from '../../data/products';
import CategoryCard from '../ui/CategoryCard';

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compre por Categoria</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Explore nossa ampla seleção de equipamentos de skate de alta qualidade, de shapes a acessórios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;