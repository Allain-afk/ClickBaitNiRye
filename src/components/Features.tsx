import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check, Zap, Heart, Award } from 'lucide-react';

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Zap,
      title: "Simple But Effective",
      description: "No complicated 10-step routines. Just wash, rinse, and glow. It's skincare made easy for your busy student life."
    },
    {
      icon: Award,
      title: "Student-Approved",
      description: "Tested and loved by thousands of students who understand the struggle of looking fresh on a budget."
    },
    {
      icon: Heart,
      title: "A Glow You Can Feel",
      description: "Not just visible results — you'll actually feel the difference. Your skin will thank you with every wash."
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
              Stands Out
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We could throw fancy ingredients at you, but here's what really matters:
            real results that you can see and feel.
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
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1732861612298-969e145fc4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG93aW5nJTIwc2tpbiUyMGNhcmV8ZW58MXx8fHwxNzY1ODk3NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Glowing healthy skin"
              className="w-full h-80 object-cover"
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
