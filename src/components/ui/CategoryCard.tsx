import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image, description }) => {
  return (
    <Link 
      to={`/products?category=${id}`}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{name}</h3>
          <p className="text-zinc-200 text-sm md:text-base max-w-xs opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
          
          <div className="mt-4 inline-flex items-center text-white font-medium text-sm">
            <span>Shop Now</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;