import { useState } from 'react';
import { Hero } from './components/Hero';
import { ClickbaitTeaser } from './components/ClickbaitTeaser';
import { ProductReveal } from './components/ProductReveal';
import { Features } from './components/Features';
import { Warning } from './components/Warning';
import { PerfectFor } from './components/PerfectFor';
import { CTA } from './components/CTA';
import { Button } from './components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from './components/ui/dialog';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle, AlertTriangle, Eye } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [funnelStep, setFunnelStep] = useState(0);
  const [showProduct, setShowProduct] = useState(false);

  const startFunnel = () => {
    setFunnelStep(0);
    setIsModalOpen(true);
  };

  const nextFunnelStep = () => {
    if (funnelStep < 2) {
      setFunnelStep(prev => prev + 1);
    } else {
      setIsModalOpen(false);
      setShowProduct(true);
      // Small delay to allow modal to close before scrolling
      setTimeout(() => {
        const productSection = document.getElementById('product-reveal');
        productSection?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50 overflow-x-hidden">
      <Hero />
      
      {!showProduct && (
        <div className="fixed bottom-10 left-0 w-full flex justify-center z-40 px-4">
          <Button 
            size="lg" 
            className="w-full max-w-md bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-8 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] border-4 border-white animate-pulse"
            onClick={startFunnel}
          >
            REVEAL THE SECRET <Eye className="ml-2 w-6 h-6" />
          </Button>
        </div>
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          <AnimatePresence mode="wait">
            {funnelStep === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ClickbaitTeaser className="py-8" />
                <div className="sticky bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm p-4 border-t flex justify-center">
                  <Button 
                    size="lg" 
                    className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-6 rounded-full shadow-lg"
                    onClick={nextFunnelStep}
                  >
                    SHOW ME THE PROOF <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </motion.div>
            )}

            {funnelStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Warning className="py-8" />
                <div className="sticky bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm p-4 border-t flex justify-center">
                  <Button 
                    size="lg" 
                    className="w-full max-w-md bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold py-6 rounded-full shadow-lg"
                    onClick={nextFunnelStep}
                  >
                    I ACCEPT THE RISK <AlertTriangle className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </motion.div>
            )}

            {funnelStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PerfectFor className="py-8" />
                <div className="sticky bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm p-4 border-t flex justify-center">
                  <Button 
                    size="lg" 
                    className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-6 rounded-full shadow-lg"
                    onClick={nextFunnelStep}
                  >
                    AM I ELIGIBLE? <CheckCircle className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      {showProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          id="product-reveal"
        >
          <ProductReveal />
          <Features />
          <CTA />
        </motion.div>
      )}
    </div>
  );
}
