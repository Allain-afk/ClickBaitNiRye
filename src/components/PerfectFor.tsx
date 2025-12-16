import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Sun, Book, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PerfectFor({ className = "" }: { className?: string }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const perfectFor = [
    {
      icon: Sun,
      title: "Daily Skincare Routine",
      description: "Made for everyday use! Whether you shower in the morning or at night, GraceGlow fits perfectly into your routine.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Book,
      title: "Busy Students",
      description: "No time for complicated routines? This is SIMPLE but EFFECTIVE. Clean, glowing skin without the hassle!",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: Sparkles,
      title: "Anyone Who Wants Clean, Glowing Skin",
      description: "Seriously, ANYONE! Budget-friendly, gentle on skin, and a fresh, clean feeling you can actually FEEL.",
      color: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <section ref={ref} className={`py-20 px-4 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full mb-6">
            <p className="text-purple-600 uppercase tracking-wide">Who Is This For?</p>
          </div>
          
          <h2 className="mb-6">
            <span className="block text-gray-800">Who Is This For?</span>
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Everyone! (But Especially...)
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're rushing to morning lectures or getting ready for a night out,
            GraceGlow has your back.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8 mb-16">
          {perfectFor.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-lg flex-shrink-0`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761673271363-6efe71f08d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGZyZXNoJTIwYmF0aHJvb218ZW58MXx8fHwxNzY1ODk3NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Clean and fresh bathroom"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-purple-600/80 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center text-white px-4"
            >
              <h3 className="mb-4">
                Your Glow-Up Starts Here
              </h3>
              <p className="max-w-xl mx-auto">
                Join thousands of students who've discovered the secret to effortless, 
                radiant skin. Are you ready to glow?
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
