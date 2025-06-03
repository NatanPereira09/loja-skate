import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Thumbnails */}
      <div className="col-span-2 flex flex-col space-y-3">
        {images.map((image, index) => (
          <button
            key={index}
            className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
              activeIndex === index ? 'border-orange-500' : 'border-transparent'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1} of ${name}`}
          >
            <img 
              src={image} 
              alt={`${name} thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Main Image */}
      <div className="col-span-10 aspect-square rounded-lg overflow-hidden bg-zinc-100">
        <img 
          src={images[activeIndex]} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;