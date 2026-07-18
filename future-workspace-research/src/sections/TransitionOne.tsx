import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollAnimation';

export default function TransitionOne() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <div ref={ref} className={`container-apple relative z-10 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-apple-section mb-10"
        >
          OUR BELIEF
        </motion.p>

        <div className="space-y-4 md:space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-apple-title text-white"
          >
            We believe
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-apple-title text-white"
          >
            The next generation
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-apple-title text-white"
          >
            of office
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-apple-title text-muted-foreground"
          >
            isn't another AI.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-apple-title text-accent"
          >
            It's Connection.
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
