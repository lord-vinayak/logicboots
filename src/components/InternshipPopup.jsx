import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Zap, Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const InternshipPopup = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => setIsOpen(true), 2000); // Delayed entrance for impact
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
    }
  }, [location]);

  // Animation Variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50, rotateX: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: 'spring', damping: 20, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.9, y: 50 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 perspective-1000">
          {/* Dark Blurred Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Main Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#0a0a0f] border border-white/10 shadow-[0_0_50px_-12px_rgba(56,189,248,0.3)]"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-500/20 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]" />

            {/* Content Container */}
            <div className="relative p-6 sm:p-8">
              
              {/* Close Button - Top Left as requested */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 left-4 group flex items-center justify-center rounded-full bg-white/5 p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:border-white/20"
              >
                <X size={18} className="transition-transform group-hover:rotate-90" />
              </button>

              {/* Header Section */}
              <div className="mt-8 mb-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg shadow-primary-500/25"
                >
                  <Cpu className="h-7 w-7 text-white" />
                </motion.div>
                
                <motion.h2 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl"
                >
                  Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Drive '25</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                  className="mt-2 text-sm font-medium text-gray-400"
                >
                  Unlock your potential in <span className="text-primary-300">Robotics & AI</span>
                </motion.p>
              </div>

              {/* Info Grid */}
              <motion.div 
                className="grid gap-3 mb-8"
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
                }}
                initial="hidden"
                animate="visible"
              >
                {/* Feature 1: Tech Stack */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 rounded-lg bg-white/5 p-3 border border-white/5 hover:border-primary-500/30 transition-colors">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Advanced Tech Stack</h4>
                    <p className="text-xs text-gray-400">Robotics, AI/ML, Drones & IoT</p>
                  </div>
                </motion.div>

                {/* Feature 2: Accreditation */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 rounded-lg bg-white/5 p-3 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Top Incubation</h4>
                    <p className="text-xs text-gray-400">IIT Roorkee & IIIT Delhi Backed</p>
                  </div>
                </motion.div>

                {/* Feature 3: Date */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 rounded-lg bg-white/5 p-3 border border-white/5 hover:border-green-500/30 transition-colors">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <Calendar size={20} />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-bold text-white">Dec 23, 2025</h4>
                      <p className="text-xs text-gray-400">09:00 AM - 05:00 PM</p>
                    </div>
                    <div className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-white">
                      LIVE
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="space-y-3"
              >
                <a
                  href="https://forms.gle/Pw8x4qgv8wia1FAx6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 px-6 py-4 font-bold text-white shadow-lg shadow-primary-900/20 transition-all hover:scale-[1.02] hover:shadow-primary-500/40"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Register Now <ArrowRight size={18} />
                  </span>
                  {/* Animated Shine */}
                  <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
                </a>
                
                <p className="text-center text-[10px] uppercase tracking-widest text-gray-500">
                  Powered by Logicboots • Govt. Recognized
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InternshipPopup;