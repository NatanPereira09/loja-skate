import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Get filter parameters
  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'featured';
  const filterParam = searchParams.get('filter');
  
  // Sort options
  const sortOptions = [
    { value: 'featured', label: 'Promoções' },
    { value: 'price-low-high', label: 'Preço: Menor para Maior' },
    { value: 'price-high-low', label: 'Preço: Maior para Menor' },
    { value: 'newest', label: 'Novidades' },
  ];
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (categoryParam) {
      result = result.filter(product => product.category === categoryParam);
    }
    
    // Filter by new
    if (filterParam === 'new') {
      result = result.filter(product => product.new);
    }
    
    // Sort products
    switch (sortParam) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result = result.filter(product => product.new).concat(
          result.filter(product => !product.new)
        );
        break;
      default:
        // featured is default
        result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    }
    
    setFilteredProducts(result);
  }, [categoryParam, sortParam, filterParam]);
  
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };
  
  // Get the active category name for display
  const activeCategoryName = categoryParam 
    ? categories.find(c => c.id === categoryParam)?.name || 'Products' 
    : 'Todos os Produtos';
  
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{activeCategoryName}</h1>
          <p className="text-zinc-600 mt-2">
            {filteredProducts.length} products
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24 bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="font-semibold text-xl mb-4">Filtros</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categorias</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <a 
                      href="/products" 
                      className={`block py-1 ${!categoryParam ? 'font-medium text-orange-500' : 'text-zinc-800 hover:text-orange-500'}`}
                    >
                      Todos os Produtos
                    </a>
                  </div>
                  
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <a 
                        href={`/products?category=${category.id}`} 
                        className={`block py-1 ${categoryParam === category.id ? 'font-medium text-orange-500' : 'text-zinc-800 hover:text-orange-500'}`}
                      >
                        {category.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Preço</h3>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    className="w-full"
                    value="200"
                    onChange={() => {}}
                  />
                  <div className="flex justify-between text-sm text-zinc-500 mt-2">
                    <span>$0</span>
                    <span>$200+</span>
                  </div>
                </div>
              </div>
              
              {/* New Arrivals */}
              <div>
                <h3 className="font-medium mb-3">Outros Filtros</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <a 
                      href="/products?filter=new" 
                      className={`block py-1 ${filterParam === 'new' ? 'font-medium text-orange-500' : 'text-zinc-800 hover:text-orange-500'}`}
                    >
                      Novidades
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a 
                      href="/products?sort=featured&filter=featured" 
                      className={`block py-1 ${filterParam === 'featured' ? 'font-medium text-orange-500' : 'text-zinc-800 hover:text-orange-500'}`}
                    >
                      Promoções
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <button 
              className="flex items-center bg-zinc-100 hover:bg-zinc-200 px-4 py-2 rounded-md transition-colors"
              onClick={toggleMobileFilter}
            >
              <Filter size={18} className="mr-2" />
              Filters
            </button>
            
            <div className="relative inline-block">
              <select 
                className="appearance-none bg-zinc-100 px-4 py-2 pr-8 rounded-md focus:outline-none"
                value={sortParam}
                onChange={() => {}}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <SlidersHorizontal size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          {/* Mobile Filters Panel */}
          <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 lg:hidden ${
            isMobileFilterOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-4 border-b border-zinc-200 flex justify-between items-center">
              <h2 className="font-semibold text-xl">Filters</h2>
              <button 
                onClick={toggleMobileFilter}
                className="p-2 rounded-full hover:bg-zinc-100"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-auto h-full pb-32">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <a 
                      href="/products" 
                      className={`block py-4 ${!categoryParam ? 'font-medium text-orange-500' : 'text-zinc-800'}`}
                      onClick={toggleMobileFilter}
                    >
                      Todos os produtos
                    </a>
                  </div>
                  
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <a 
                        href={`/products?category=${category.id}`} 
                        className={`block py-1 ${categoryParam === category.id ? 'font-medium text-orange-500' : 'text-zinc-800'}`}
                        onClick={toggleMobileFilter}
                      >
                        {category.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    className="w-full"
                    value="200"
                    onChange={() => {}}
                  />
                  <div className="flex justify-between text-sm text-zinc-500 mt-2">
                    <span>$0</span>
                    <span>$200+</span>
                  </div>
                </div>
              </div>
              
              {/* New Arrivals */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">Other Filters</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <a 
                      href="/products?filter=new" 
                      className={`block py-1 ${filterParam === 'new' ? 'font-medium text-orange-500' : 'text-zinc-800'}`}
                      onClick={toggleMobileFilter}
                    >
                      New Arrivals
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a 
                      href="/products?sort=featured&filter=featured" 
                      className={`block py-1 ${filterParam === 'featured' ? 'font-medium text-orange-500' : 'text-zinc-800'}`}
                      onClick={toggleMobileFilter}
                    >
                      Featured
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Sort Options */}
              <div className="border-t border-zinc-200 pt-6">
                <h3 className="font-medium mb-3">Sort By</h3>
                <div className="space-y-3">
                  {sortOptions.map(option => (
                    <div key={option.value} className="flex items-center">
                      <a 
                        href={`/products?sort=${option.value}${categoryParam ? `&category=${categoryParam}` : ''}${filterParam ? `&filter=${filterParam}` : ''}`}
                        className={`block py-1 ${sortParam === option.value ? 'font-medium text-orange-500' : 'text-zinc-800'}`}
                        onClick={toggleMobileFilter}
                      >
                        {option.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort - Desktop */}
            <div className="hidden lg:flex justify-end mb-6">
              <div className="relative inline-block">
                <select 
                  className="appearance-none bg-zinc-100 px-4 py-2 pr-8 rounded-md focus:outline-none"
                  value={sortParam}
                  onChange={() => {}}
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <SlidersHorizontal size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-xl text-zinc-500">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;