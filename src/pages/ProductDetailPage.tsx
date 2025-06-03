import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import RelatedProducts from '../components/product/RelatedProducts';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find(p => p.id === id);
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // Product not found
        navigate('/products');
      }
    }, 500);
  }, [id, navigate]);
  
  if (loading) {
    return (
      <div className="py-16 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-zinc-600">Loading product...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="py-16 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-zinc-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-zinc-800 transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm text-zinc-500">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-black transition-colors">Products</a>
          <span className="mx-2">/</span>
          <a href={`/products?category=${product.category}`} className="hover:text-black transition-colors capitalize">
            {product.category}
          </a>
          <span className="mx-2">/</span>
          <span className="text-zinc-800">{product.name}</span>
        </div>
        
        {/* Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>
        
        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
    </main>
  );
};

export default ProductDetailPage;