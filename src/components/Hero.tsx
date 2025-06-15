import { motion } from "framer-motion";
import { Star, Zap, Heart } from "lucide-react";
import PopButton from "./PopButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-retro-gradient polka-dots overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-6xl"
          animate={{ rotate: [0, 360], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-4xl"
          animate={{ rotate: [0, -360], y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          💫
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-5xl"
          animate={{ rotate: [360, 0], y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          🎨
        </motion.div>
        <motion.div
          className="absolute top-60 right-40 text-3xl"
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          💖
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <div className="space-y-4">
              <motion.div
                className="inline-block"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <h1 className="font-spooky text-7xl lg:text-8xl text-white drop-shadow-[4px_4px_0px_#000] leading-none">
                  POP!
                </h1>
              </motion.div>
              <h2 className="font-fun text-4xl lg:text-5xl text-black drop-shadow-[2px_2px_0px_#fff]">
                Art & Style
              </h2>
              <div className="comic-border bg-white p-4 inline-block">
                <p className="font-handwritten text-xl text-black font-bold">
                  Where Retro Meets Rock & Roll! 🎸
                </p>
              </div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg font-handwritten text-white bg-black/20 backdrop-blur-sm p-6 rounded-2xl border-4 border-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover amazing pop art fashion and accessories that scream personality! 
              From vibrant tees to funky accessories - we've got your style covered! ✨
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <PopButton variant="primary" size="lg">
                🛍️ Shop Now!
              </PopButton>
              <PopButton variant="secondary" size="lg">
                🎨 View Collections
              </PopButton>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: Star, text: "Premium Quality", color: "text-yellow-400" },
                { icon: Zap, text: "Fast Shipping", color: "text-blue-400" },
                { icon: Heart, text: "100% Love", color: "text-red-400" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/90 backdrop-blur-sm p-4 rounded-xl border-3 border-black"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className={`w-8 h-8 mx-auto mb-2 ${feature.color}`} />
                  <p className="font-handwritten font-bold text-black text-sm">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main hero image with comic frame */}
              <motion.div
                className="pop-frame bg-white p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop" 
                  alt="Pop Art Fashion"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-fun font-bold border-4 border-black shadow-lg"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                NEW DROP! 🔥
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-400 to-red-500 text-white px-6 py-2 rounded-full font-fun font-bold border-4 border-black shadow-lg"
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                50% OFF! 💸
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;