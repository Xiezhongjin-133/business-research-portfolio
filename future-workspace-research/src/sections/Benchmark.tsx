import { motion } from 'framer-motion';
import { benchmarkData } from '../data/research';
import { Apple, Monitor, MessageSquare, Globe } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Apple, Windows: Monitor, MessageSquare, Chrome: Globe,
};

export default function Benchmark() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="container-apple">
        <div className="fade-in-section">
          <p className="text-apple-section mb-6">PART 04</p>
          <h2 className="text-apple-title text-white mb-8">Benchmark</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-20 max-w-3xl">
            谁在定义未来办公？
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benchmarkData.map((item, i) => {
            const Icon = iconMap[item.icon] || Monitor;
            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                    <p className="text-xs text-accent/70 tracking-wider uppercase">
                      {item.strength}
                    </p>
                  </div>
                </div>

                {/* Insight */}
                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                  {item.insight}
                </p>

                {/* Lesson */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-xs text-accent/60 uppercase tracking-wider mb-1">
                    Key Lesson
                  </p>
                  <p className="text-sm text-white/50 italic">{item.lesson}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Synthesis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block">
            <p className="text-xs text-accent/70 tracking-[0.2em] uppercase mb-6">
              THE COMMON THREAD
            </p>
            <p className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Flow
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
              每个领先者都在各自的围墙内创造了Flow。真正的突破在于跨围墙的Flow。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
