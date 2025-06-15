import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";
import PopButton from "./PopButton";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      className="pop-frame bg-white p-4 relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10">
        {product.isNew && (
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-handwritten font-bold border-2 border-black">
            NEW!
          </span>
        )}
        {product.isSale && (
          <span className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-handwritten font-bold border-2 border-black ml-2">
            SALE!
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-fun text-lg font-bold text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-sm text-gray-600 font-handwritten">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-fun font-bold text-pink-600">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through font-handwritten">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <PopButton 
            variant="primary" 
            size="sm" 
            className="flex-1 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </PopButton>
          
          <motion.button
            className="p-2 border-4 border-black rounded-lg bg-white hover:bg-red-50 transition-colors shadow-[2px_2px_0px_0px_#000]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-5 h-5 text-red-500" />
          </motion.button>
        </div>
      </div>

      {/* Comic dots decoration */}
      <div className="absolute -top-2 -right-2 w-8 h-8">
        <div className="w-full h-full polka-dots-dark rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default ProductCard;