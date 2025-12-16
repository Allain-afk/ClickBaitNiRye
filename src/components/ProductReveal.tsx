import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Sparkles } from 'lucide-react';
import productImage from 'figma:asset/9ca4832224c4b23f126575820577c1e45b00d6b0.png';

export function ProductReveal() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
              <p className="uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={20} />
                <span>The Secret Revealed</span>
                <Sparkles size={20} />
              </p>
            </div>
          </motion.div>

          <h2 className="mb-6">
            <span className="block text-gray-800">Introducing:</span>
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              GraceGlow Soap 🧼✨
            </span>
          </h2>

          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            The soap everyone is OBSESSED with! Simple. Effective. STUDENT-APPROVED.
            A glow you can actually FEEL! 💯
          </p>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-20 transform scale-95"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#f5eee8]">
            <img
              src={productImage}
              alt="GraceGlow Soap - Natural Pink Soap Bars"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {[
            { title: "Gentle on Skin", desc: "No harsh chemicals! Made to be gentle so you can use it every single day." },
            { title: "Fresh & Clean Feeling", desc: "That CLEAN feeling that lasts ALL DAY. You'll know the difference immediately!" },
            { title: "Budget-Friendly", desc: "Only ₱560! High-quality skincare that doesn't break the bank. Finally!" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-pink-100"
            >
              <p className="text-pink-600 mb-2">{item.title}</p>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}