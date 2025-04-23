import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Cpu, Laptop } from 'lucide-react';
import { formatPrice, truncateText } from '../../utils/formatters';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden h-48 sm:h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.featured && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-bold text-white">{product.name}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-400 text-sm">
            <Cpu size={14} className="mr-2 text-primary" />
            <span>{product.specs.cpu}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Laptop size={14} className="mr-2 text-primary" />
            <span>{product.specs.gpu}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <Link 
            to={`/laptops/${product.id}`}
            className="btn-outline flex items-center text-sm py-1.5"
          >
            Details
            <ExternalLink size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;