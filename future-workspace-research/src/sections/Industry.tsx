import { motion } from 'framer-motion';
import { timelineData } from '../data/research';
import { GitBranch, Globe, Sparkles, Bot, Network, Building2, Cpu, Zap } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Building2, Globe, Sparkles, Bot, Network, GitBranch, Cpu, Zap,
};

export default function Industry() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="container-apple">
        <div className="fade-in-section">
          <p className="text-apple-section mb-6">PART 02</p>
          <h2 className="text-apple-title text-white mb-8">Industry</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-20 max-w-3xl">
            未来办公趋势：从Remote Work到Workspace OS
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 md:-translate-x-px" />

          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, i) => {
              const IconComponent = iconMap[item.icon] || Zap;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent ring-4 ring-black z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className={`inline-flex items-center gap-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <IconComponent className="w-5 h-5 text-accent" />
                      <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mt-3 mb-2">
                      {item.event}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Source citations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-12 border-t border-white/[0.06]"
        >
          <p className="text-xs text-muted-foreground tracking-wider mb-4">SOURCES</p>
          <div className="flex flex-wrap gap-4">
            {['Microsoft', 'Gartner', 'IDC', 'McKinsey', 'BCG', 'Deloitte'].map(
              (source) => (
                <span
                  key={source}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs text-white/50 bg-white/[0.02]"
                >
                  {source}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
