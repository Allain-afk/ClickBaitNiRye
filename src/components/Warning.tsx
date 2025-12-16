import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { AlertTriangle, MessageCircle, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Warning() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-blue-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Warning Box */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-1 rounded-2xl mb-12 shadow-xl animate-pulse">
            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0 animate-bounce">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-gray-900 mb-4">
                    🚨 URGENT WARNING 🚨
                  </h2>
                  <p className="text-red-700 mb-4">
                    ATTENTION: These "side effects" are NOT what you think...
                  </p>
                  <p className="text-gray-700 mb-4">
                    Users report UNCONTROLLABLE effects including:
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl border-2 border-red-300 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-6 h-6 text-red-600" />
                    <p className="text-red-900">CONSTANT Compliments</p>
                  </div>
                  <p className="text-gray-700">
                    "What are you using?!" "You're GLOWING!" "Tell me your secret!" 
                    — Prepare for DAILY questions 😱
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-purple-300 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    <p className="text-purple-900">EXTREME Confidence</p>
                  </div>
                  <p className="text-gray-700">
                    Walking into class feeling like THAT person? 
                    It's not a choice, it's AUTOMATIC! 💯
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg text-center border-2 border-orange-300"
              >
                <p className="text-gray-900 mb-3">
                  💬 REAL USER CONFESSION:
                </p>
                <p className="text-gray-800 italic">
                  "My roommate BEGGED me to share. I had to buy a second one just so she'd stop asking. 
                  Now we're BOTH getting compliments non-stop! This is actually INSANE!" 
                  <span className="block mt-2 not-italic text-red-600">- Alex, 20 (Verified Purchase)</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 p-4 bg-red-100 rounded-lg text-center border-2 border-red-400"
              >
                <p className="text-red-900">
                  ⚠️ WARNING: May cause jealousy from friends ⚠️
                </p>
              </motion.div>
            </div>
          </div>

          {/* Image with overlay text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1721441933143-643398bed6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBjb25maWRlbmNlfGVufDF8fHx8MTc2NTg5NzYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Confident student"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center px-4"
              >
                <p className="text-white mb-2">
                  This could be you 👆
                </p>
                <p className="text-pink-200">
                  Living your best life with GraceGlow
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}