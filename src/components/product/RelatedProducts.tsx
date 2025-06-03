import React from 'react';
import { Product } from '../../types';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId, category }) => {
  // Filter products in the same category, excluding the current product
  const relatedProducts = products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 3); // Limit to 3 products
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <section className="py-12 border-t border-zinc-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;