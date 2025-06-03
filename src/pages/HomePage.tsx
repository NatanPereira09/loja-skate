import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <NewArrivals />
      <Newsletter />
    </main>
  );
};

export default HomePage;