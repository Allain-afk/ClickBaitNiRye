import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Shield, Truck, Star } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { Button } from './ui/button';

export function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleClaim = () => {
    // Play success sound
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');
    audio.volume = 0.5;
    audio.play().catch(err => console.log('Audio play failed:', err));

    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#ec4899', '#a855f7', '#3b82f6', '#eab308'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Show thank you modal
    setShowThankYou(true);
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white via-pink-50 to-purple-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
          >
            <p className="uppercase tracking-wide">🔥 ONLY 23 LEFT IN STOCK! 🔥</p>
          </motion.div>

          <h2 className="mb-6">
            <span className="block text-red-600">DON'T Miss Out!</span>
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Join THOUSANDS Who Already Have That GLOW! ✨
            </span>
          </h2>

          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            <span className="block mb-2 text-red-600">
              🔥 SELLING OUT FAST! 🔥
            </span>
            Everyone is buying this RIGHT NOW. Your friends probably already have it.
            Don't be the last one! 😱
          </p>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-yellow-100 border-2 border-yellow-400 px-6 py-3 rounded-lg mb-8 inline-block"
          >
            <p className="text-gray-900">
              ⚡ 2,847 people are viewing this RIGHT NOW! ⚡
            </p>
          </motion.div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border-4 border-red-500"
        >
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 text-white text-center relative overflow-hidden">
            <motion.div
              animate={{ x: [-500, 500] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-white opacity-10"
              style={{ transform: 'skewX(-20deg)' }}
            />
            <p className="mb-2 relative z-10">🧼 GraceGlow Soap - VIRAL EDITION 🧼</p>
            <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
              <span className="text-white/70 line-through">₱1,680</span>
              <p className="text-white">₱560</p>
              <span className="bg-red-600 px-3 py-1 rounded-full text-white animate-pulse">
                67% OFF!
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              ))}
              <span className="ml-2">(12,847 VERIFIED reviews)</span>
            </div>
            <p className="mt-3 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full inline-block relative z-10">
              🎁 FREE GIFT WITH PURCHASE TODAY ONLY! 🎁
            </p>
          </div>

          <div className="p-8">
            <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg mb-6 text-center">
              <p className="text-red-700">
                ⚠️ HURRY! Price increases in 15 minutes! ⚠️
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">365-Day MONEY-BACK GUARANTEE (We're THAT confident!)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700">FREE EXPRESS Shipping (Arrives in 2 days!)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-gray-700">EXTRA 15% Student Discount APPLIED!</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ boxShadow: ['0px 0px 0px rgba(236, 72, 153, 0)', '0px 0px 30px rgba(236, 72, 153, 0.5)', '0px 0px 0px rgba(236, 72, 153, 0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={handleClaim}
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-5 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex items-center justify-center gap-2 group"
            >
              <span>🔥 CLAIM YOUR GRACEGLOW NOW! 🔥</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="text-center text-green-600 mt-4">
              ✅ 47,328 students already claimed theirs!
            </p>
          </div>
        </motion.div>

        {/* Final testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {[
            {
              text: "Best purchase I've made this semester. My skin has never looked better!",
              author: "Emily, 21"
            },
            {
              text: "Finally found something that works AND fits my budget. Total game changer.",
              author: "Marcus, 19"
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200"
            >
              <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
              <p className="text-gray-600">— {testimonial.author}</p>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 mb-2">
            GraceGlow • Made for Students, By Students
          </p>
          <p className="text-gray-400">
            © 2025 GraceGlow. This is a school project for educational purposes.
          </p>
        </motion.div>
      </div>
      {/* Thank You Modal */}
      <AlertDialog open={showThankYou} onOpenChange={setShowThankYou}>
        <AlertDialogContent className="bg-white border-4 border-pink-500 max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-3xl text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              🎉 Thank You For Your Purchase! 🎉
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-lg pt-4 space-y-3">
              <p className="text-gray-700">Your GraceGlow Soap is on its way! ✨</p>
              <p className="text-pink-600 font-semibold">You're about to join 47,328+ glowing students! 💖</p>
              <p className="text-sm text-gray-600">Check your email for order confirmation and tracking details.</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <Button
              onClick={() => setShowThankYou(false)}
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-6 text-lg font-bold"
            >
              🧼 Continue Glowing! ✨
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>    </section>
  );
}