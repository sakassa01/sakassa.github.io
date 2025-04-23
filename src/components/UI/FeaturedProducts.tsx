import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  
  return (
    <section className="py-16 bg-dark-950">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Gaming Laptops</h2>
            <p className="text-gray-400">Discover our premium selection of high-performance gaming machines</p>
          </div>
          <Link to="/laptops" className="btn-outline mt-4 md:mt-0 group">
            View All Laptops
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;