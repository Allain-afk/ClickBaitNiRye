import { useState } from 'react';
import { Hero } from './components/Hero';
import { ClickbaitTeaser } from './components/ClickbaitTeaser';
import { ProductReveal } from './components/ProductReveal';
import { Features } from './components/Features';
import { Warning } from './components/Warning';
import { PerfectFor } from './components/PerfectFor';
import { CTA } from './components/CTA';
import { Button } from './components/ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle, AlertTriangle, Eye } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen flex flex-col pb-32"
          >
            <Hero />
            <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 px-4 pb-8 pt-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none">
              <Button 
                size="lg" 
                className="pointer-events-auto w-full max-w-md bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-8 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] border-4 border-white animate-pulse cursor-pointer"
                onClick={nextStep}
              >
                REVEAL THE SECRET <Eye className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen flex flex-col items-center justify-center pb-32 pt-20"
          >
            <ClickbaitTeaser />
            <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 px-4 pb-8 pt-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none">
              <Button 
                size="lg" 
                className="pointer-events-auto w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-8 rounded-full shadow-xl border-4 border-white cursor-pointer"
                onClick={nextStep}
              >
                SHOW ME THE PROOF <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen flex flex-col items-center justify-center pb-32 pt-20"
          >
            <Warning />
            <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 px-4 pb-8 pt-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none">
              <Button 
                size="lg" 
                className="pointer-events-auto w-full max-w-md bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold py-8 rounded-full shadow-xl border-4 border-black cursor-pointer"
                onClick={nextStep}
              >
                I ACCEPT THE RISK <AlertTriangle className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen flex flex-col items-center justify-center pb-32 pt-20"
          >
            <PerfectFor />
            <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 px-4 pb-8 pt-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none">
              <Button 
                size="lg" 
                className="pointer-events-auto w-full max-w-md bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-8 rounded-full shadow-xl border-4 border-white cursor-pointer"
                onClick={nextStep}
              >
                AM I ELIGIBLE? <CheckCircle className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <ProductReveal />
            <Features />
            <CTA />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
