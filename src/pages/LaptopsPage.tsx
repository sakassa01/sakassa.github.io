import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/UI/ProductCard';
import ProductFilters from '../components/UI/ProductFilters';
import { Laptop } from 'lucide-react';

const LaptopsPage: React.FC = () => {
  const [filters, setFilters] = useState({
    ram: null as string | null,
    gpu: null as string | null,
    priceRange: null as { min: number; max: number | null } | null,
  });

  // Extract unique options for filters
  const filterOptions = useMemo(() => {
    const ramOptions = Array.from(new Set(products.map(p => p.specs.ram)));
    const gpuOptions = Array.from(new Set(products.map(p => p.specs.gpu)));
    
    const priceRanges = [
      { min: 10000, max: 15000, label: '10,000 - 15,000 MAD' },
      { min: 15000, max: 18000, label: '15,000 - 18,000 MAD' },
      { min: 18000, max: null, label: '18,000+ MAD' },
    ];
    
    return { ramOptions, gpuOptions, priceRanges };
  }, []);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filter by RAM
      if (filters.ram && product.specs.ram !== filters.ram) {
        return false;
      }
      
      // Filter by GPU
      if (filters.gpu && product.specs.gpu !== filters.gpu) {
        return false;
      }
      
      // Filter by price range
      if (filters.priceRange) {
        const { min, max } = filters.priceRange;
        if (max !== null) {
          if (product.price < min || product.price > max) {
            return false;
          }
        } else {
          if (product.price < min) {
            return false;
          }
        }
      }
      
      return true;
    });
  }, [filters]);

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex items-center mb-8">
          <Laptop size={28} className="mr-3 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Gaming Laptops</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters - Left Sidebar */}
          <div className="md:col-span-1">
            <ProductFilters 
              filters={filters}
              filterOptions={filterOptions}
              onFilterChange={setFilters}
            />
          </div>
          
          {/* Products Grid */}
          <div className="md:col-span-3">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-gray-400 mb-6">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-dark-900 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">No matching products</h3>
                <p className="text-gray-400 mb-4">
                  No products match your current filter selection.
                </p>
                <button 
                  onClick={() => setFilters({ ram: null, gpu: null, priceRange: null })}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopsPage;