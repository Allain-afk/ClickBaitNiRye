import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check, Zap, Heart, Award } from 'lucide-react';
import productImage from '../assets/9ca4832224c4b23f126575820577c1e45b00d6b0.png';

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Zap,
      title: "Simple But Effective",
      description: "No complicated routines. No expensive products. Just one soap that WORKS. Simple = BETTER!"
    },
    {
      icon: Award,
      title: "Student-Approved",
      description: "Students are going CRAZY for this! Check TikTok, Instagram, anywhere - everyone is talking about it!"
    },
    {
      icon: Heart,
      title: "A Glow You Can Feel",
      description: "You'll FEEL the difference from day one. Clean skin. Fresh feeling. That GLOW everyone's asking about!"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-6">
            <p className="text-blue-600 uppercase tracking-wide">Why It Works</p>
          </div>
          
          <h2 className="mb-6">
            Why GraceGlow Soap
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stands Out! 🌟
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            It's not complicated. It just WORKS. Here's why everyone is switching:
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-pink-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 items-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-100 to-purple-100 p-8">
            <img
              src={productImage}
              alt="GraceGlow Soap - Natural Pink Soap Bars"
              className="w-full h-auto object-contain max-h-80"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-gray-900">
              Made for Everyday Use
            </h3>
            
            <div className="space-y-4">
              {[
                "Perfect for morning routines before class",
                "Gentle enough for sensitive skin",
                "Leaves skin feeling fresh all day",
                "No sticky or greasy residue",
                "Works with all skin types"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
