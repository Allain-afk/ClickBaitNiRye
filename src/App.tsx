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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50 overflow-x-hidden pb-32">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <ClickbaitTeaser />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <Warning />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <PerfectFor />
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProductReveal />
            <Features />
            <CTA />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Button */}
      {step < 4 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-red-600 shadow-2xl p-4 z-[9999]">
          <div className="max-w-md mx-auto">
            {step === 0 && (
              <Button 
                size="lg" 
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-8 rounded-full shadow-lg border-4 border-white animate-pulse"
                onClick={nextStep}
              >
                REVEAL THE SECRET <Eye className="ml-2 w-6 h-6" />
              </Button>
            )}
            {step === 1 && (
              <Button 
                size="lg" 
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-8 rounded-full shadow-lg border-4 border-white"
                onClick={nextStep}
              >
                SHOW ME THE PROOF <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            )}
            {step === 2 && (
              <Button 
                size="lg" 
                type="button"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold py-8 rounded-full shadow-lg border-4 border-black"
                onClick={nextStep}
              >
                I ACCEPT THE RISK <AlertTriangle className="ml-2 w-6 h-6" />
              </Button>
            )}
            {step === 3 && (
              <Button 
                size="lg" 
                type="button"
                className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-8 rounded-full shadow-lg border-4 border-white"
                onClick={nextStep}
              >
                AM I ELIGIBLE? <CheckCircle className="ml-2 w-6 h-6" />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
