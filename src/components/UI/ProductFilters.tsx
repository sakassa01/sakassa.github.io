import React, { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

interface FilterOptions {
  ramOptions: string[];
  gpuOptions: string[];
  priceRanges: { min: number; max: number | null; label: string }[];
}

interface ProductFiltersProps {
  filters: {
    ram: string | null;
    gpu: string | null;
    priceRange: { min: number; max: number | null } | null;
  };
  filterOptions: FilterOptions;
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, filterOptions, onFilterChange }) => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleRamChange = (ram: string | null) => {
    onFilterChange({ ...filters, ram });
  };

  const handleGpuChange = (gpu: string | null) => {
    onFilterChange({ ...filters, gpu });
  };

  const handlePriceRangeChange = (priceRange: { min: number; max: number | null } | null) => {
    onFilterChange({ ...filters, priceRange });
  };

  const resetFilters = () => {
    onFilterChange({ ram: null, gpu: null, priceRange: null });
  };

  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <button 
          onClick={toggleFilters}
          className="md:hidden btn-outline text-sm py-1.5 px-3"
        >
          <SlidersHorizontal size={16} className="mr-1 inline-block" />
          {isFiltersVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className={`${isFiltersVisible ? 'block' : 'hidden'} md:block space-y-6 bg-dark-900 p-4 rounded-lg border border-dark-800`}>
        {/* Active Filters */}
        {(filters.ram || filters.gpu || filters.priceRange) && (
          <div className="pb-4 border-b border-dark-800">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-300">Active Filters:</h3>
              <button 
                onClick={resetFilters}
                className="text-xs text-primary hover:text-primary-400 transition-colors"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.ram && (
                <div className="bg-dark-800 px-2 py-1 rounded-full text-xs flex items-center">
                  RAM: {filters.ram}
                  <button 
                    onClick={() => handleRamChange(null)}
                    className="ml-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
              {filters.gpu && (
                <div className="bg-dark-800 px-2 py-1 rounded-full text-xs flex items-center">
                  GPU: {filters.gpu}
                  <button 
                    onClick={() => handleGpuChange(null)}
                    className="ml-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
              {filters.priceRange && (
                <div className="bg-dark-800 px-2 py-1 rounded-full text-xs flex items-center">
                  Price: {filters.priceRange.min.toLocaleString()} - 
                  {filters.priceRange.max ? filters.priceRange.max.toLocaleString() : '+'}
                  <button 
                    onClick={() => handlePriceRangeChange(null)}
                    className="ml-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* RAM Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-300 mb-2">RAM</h3>
          <div className="space-y-1">
            {filterOptions.ramOptions.map(ram => (
              <button
                key={ram}
                className={`block w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                  filters.ram === ram 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-800'
                }`}
                onClick={() => handleRamChange(filters.ram === ram ? null : ram)}
              >
                {ram}
              </button>
            ))}
          </div>
        </div>

        {/* GPU Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-300 mb-2">Graphics Card</h3>
          <div className="space-y-1">
            {filterOptions.gpuOptions.map(gpu => (
              <button
                key={gpu}
                className={`block w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                  filters.gpu === gpu 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-800'
                }`}
                onClick={() => handleGpuChange(filters.gpu === gpu ? null : gpu)}
              >
                {gpu}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-300 mb-2">Price Range</h3>
          <div className="space-y-1">
            {filterOptions.priceRanges.map((range, index) => (
              <button
                key={index}
                className={`block w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                  filters.priceRange?.min === range.min && filters.priceRange?.max === range.max
                    ? 'bg-primary/20 text-primary' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-800'
                }`}
                onClick={() => handlePriceRangeChange(
                  filters.priceRange?.min === range.min && filters.priceRange?.max === range.max 
                    ? null 
                    : { min: range.min, max: range.max }
                )}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;