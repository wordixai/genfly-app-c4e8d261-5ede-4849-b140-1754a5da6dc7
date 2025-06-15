import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Heart, User, Search } from "lucide-react";
import PopButton from "./PopButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Shop", "Collections", "About", "Contact"
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b-4 border-black sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full border-4 border-black flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-2xl">🎨</span>
            </motion.div>
            <div>
              <h1 className="font-spooky text-3xl text-black">POP!</h1>
              <p className="font-handwritten text-sm text-gray-600 -mt-1">Art & Style</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-handwritten text-lg font-bold text-gray-700 hover:text-pink-600 relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search awesome stuff..."
                className="w-64 px-4 py-2 pl-10 border-3 border-black rounded-xl font-handwritten focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-3">
              {[
                { icon: Heart, badge: "2" },
                { icon: ShoppingCart, badge: "3" },
                { icon: User, badge: null }
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className="relative p-2 bg-white border-3 border-black rounded-xl hover:bg-gray-50 transition-colors shadow-[2px_2px_0px_0px_#000]"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-6 h-6" />
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-black">
                      {item.badge}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 border-3 border-black rounded-xl bg-white shadow-[2px_2px_0px_0px_#000]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t-3 border-black polka-dots bg-gradient-to-r from-orange-100 to-pink-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 font-handwritten text-lg font-bold text-gray-700 hover:text-pink-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="flex justify-center space-x-4 pt-4">
                <PopButton variant="primary" size="sm">
                  🛒 Cart (3)
                </PopButton>
                <PopButton variant="secondary" size="sm">
                  ❤️ Wishlist (2)
                </PopButton>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;