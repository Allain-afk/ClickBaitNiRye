import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full mb-6 animate-pulse"
        >
          <p className="uppercase tracking-wide">🚨 BREAKING: THIS CHANGES EVERYTHING 🚨</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 max-w-3xl mx-auto"
        >
          <span className="block text-red-600 mb-2">DOCTORS HATE This!</span>
          <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            One SIMPLE TRICK for Perfect Skin That Big Beauty Brands Are HIDING!
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-700 mb-4 max-w-xl mx-auto"
        >
          A college student accidentally discovered this secret and now
          EVERYONE is copying her...
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-yellow-100 border-2 border-yellow-400 px-6 py-3 rounded-lg mb-8 inline-block"
        >
          <p className="text-gray-900">
            😱 What happens next will SHOCK you! 😱
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-3 text-pink-600"
        >
          <span>Click NOW before this gets taken down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}