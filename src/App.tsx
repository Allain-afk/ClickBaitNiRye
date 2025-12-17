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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onReveal={nextStep} />
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
            <ClickbaitTeaser onNext={nextStep} />
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
            <Warning onNext={nextStep} />
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
            <PerfectFor onNext={nextStep} />
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
    </div>
  );
}
