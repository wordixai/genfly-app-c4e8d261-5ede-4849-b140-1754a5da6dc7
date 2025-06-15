import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import PopButton from "../components/PopButton";

const Index = () => {
  // Mock product data
  const featuredProducts = [
    {
      id: 1,
      name: "Retro Pop Graphic Tee",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 5,
      isNew: true,
      isSale: true
    },
    {
      id: 2, 
      name: "Comic Style Hoodie",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      rating: 4,
      isNew: true
    },
    {
      id: 3,
      name: "Pop Art Canvas Bag",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 5,
      isSale: true
    },
    {
      id: 4,
      name: "Vintage Band Poster",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      rating: 4
    }
  ];

  const collections = [
    { name: "Retro Tees", emoji: "👕", count: "25+ Items" },
    { name: "Pop Art Prints", emoji: "🎨", count: "40+ Items" },
    { name: "Funky Accessories", emoji: "🕶️", count: "15+ Items" },
    { name: "Vintage Hoodies", emoji: "🧥", count: "20+ Items" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Featured Collections */}
      <section className="py-20 bg-comic-gradient polka-dots">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-spooky text-6xl text-white drop-shadow-[4px_4px_0px_#000] mb-4">
              Collections!
            </h2>
            <div className="comic-border bg-white p-4 inline-block">
              <p className="font-handwritten text-xl text-black font-bold">
                Curated with Love & Pop Culture! 💖
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                className="comic-border-pink bg-white p-6 text-center hover:scale-105 transition-transform cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ rotate: 2 }}
              >
                <div className="text-6xl mb-4">{collection.emoji}</div>
                <h3 className="font-fun text-2xl text-gray-800 mb-2">{collection.name}</h3>
                <p className="font-handwritten text-gray-600">{collection.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-spooky text-6xl text-black drop-shadow-[2px_2px_0px_#ff69b4] mb-4">
              Hot Stuff!
            </h2>
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4 inline-block border-4 border-black rounded-2xl">
              <p className="font-handwritten text-xl font-bold">
                Fresh Drops That'll Blow Your Mind! 🤯
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <PopButton variant="primary" size="lg">
              🛍️ View All Products
            </PopButton>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-pop-gradient polka-dots">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-spooky text-5xl text-white drop-shadow-[4px_4px_0px_#000] mb-6">
              Join the Pop Family!
            </h2>
            <div className="comic-border bg-white p-8">
              <p className="font-handwritten text-xl text-black font-bold mb-6">
                Get exclusive deals, new drops, and pop culture goodness! 📧✨
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 border-3 border-black rounded-xl font-handwritten text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <PopButton variant="primary" size="md">
                  Subscribe! 🚀
                </PopButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 polka-dots-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="font-spooky text-3xl">POP!</h3>
                  <p className="font-handwritten text-gray-300">Art & Style</p>
                </div>
              </div>
              <p className="font-handwritten text-gray-300 text-lg">
                Where creativity meets street style! Bringing you the funkiest, 
                most vibrant designs that make you stand out from the crowd! 🌟
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-fun text-xl mb-4 text-pink-400">Quick Links</h4>
              <ul className="space-y-2 font-handwritten">
                {["About Us", "Shop", "Collections", "Contact", "FAQ"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-fun text-xl mb-4 text-orange-400">Get in Touch</h4>
              <div className="space-y-2 font-handwritten text-gray-300">
                <p>📧 hello@popartstyle.com</p>
                <p>📱 +1 (555) POP-STYLE</p>
                <p>📍 123 Creative Street, Art District</p>
                <div className="flex space-x-3 mt-4">
                  {["🎭", "📸", "🐦", "📘"].map((emoji, index) => (
                    <motion.button
                      key={index}
                      className="text-2xl hover:scale-125 transition-transform"
                      whileHover={{ rotate: 15 }}
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-700 mt-12 pt-8 text-center">
            <p className="font-handwritten text-gray-400">
              © 2024 Pop Art & Style. Made with 💖 and lots of creativity!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;