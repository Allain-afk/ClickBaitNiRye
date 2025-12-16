import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, TrendingUp, Users, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ClickbaitTeaser({ className = "" }: { className?: string }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            return { minutes: 14, seconds: 59 };
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, number: "47,328", label: "Lives Changed" },
    { icon: Star, number: "5.0/5", label: "Perfect Rating" },
    { icon: TrendingUp, number: "2,847%", label: "Growth This Month" },
    { icon: Sparkles, number: "100%", label: "See Results or Refund" },
  ];

  return (
    <section ref={ref} className={`py-20 px-4 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-2xl mb-12 text-center shadow-2xl"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-6 h-6 animate-pulse" />
            <p className="uppercase tracking-wide">⏰ LIMITED TIME OFFER EXPIRES IN ⏰</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white text-red-600 px-6 py-3 rounded-lg">
              <p className="text-red-600">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-gray-600">MIN</p>
            </div>
            <p className="text-white">:</p>
            <div className="bg-white text-red-600 px-6 py-3 rounded-lg">
              <p className="text-red-600">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-gray-600">SEC</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-red-100 border-2 border-red-400 px-4 py-2 rounded-lg mb-6 rotate-1 animate-pulse">
            <p className="text-red-800 uppercase tracking-wide">
              🔥 GOING VIRAL RIGHT NOW 🔥
            </p>
          </div>
          
          <h2 className="mb-6">
            <span className="block text-gray-800">Everyone Is Asking:</span>
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              "What SOAP Are You Using?!" 🧼✨
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            <span className="block mb-4 text-red-600">
              🔥 VIRAL ALERT: This Is TAKING OVER Social Media! 🔥
            </span>
            GraceGlow Soap is the budget-friendly secret students don't want you to know about!
            Simple. Effective. RESULTS you can SEE and FEEL!
          </p>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl mb-8 border-2 border-yellow-300">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <p className="text-gray-800 italic">
                "I tried it as a JOKE and now I can't stop using it! People keep asking me 
                what I'm using. My skin has NEVER felt this good!" 
                <span className="block mt-2 not-italic">- Maria S., verified buyer</span>
              </p>
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8"
          >
            <p className="text-gray-900">
              <span className="block mb-2">💥 BREAKING NEWS 💥</span>
              <span className="block text-red-600">
                Over 1.2 MILLION people tried this last month alone!
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl text-center border-2 border-pink-300 shadow-lg"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-pink-600" />
              <p className="text-gray-900 mb-1">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-600 p-6 rounded-lg">
            <p className="text-gray-800 mb-2">
              <span className="block mb-2">📺 AS SEEN ON:</span>
              TikTok • Instagram • YouTube • Twitter
            </p>
            <p className="text-gray-600 italic">
              "#1 Trending Product - Students Can't Stop Talking About It!"
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
            <p className="text-gray-800">
              <span className="block mb-2">📢 THE SECRET IS REVEALED BELOW...</span>
              <span className="text-red-600">Scroll now before they take this page down!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}