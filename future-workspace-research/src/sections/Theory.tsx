import { motion } from 'framer-motion';
import { theoryFramework } from '../data/research';
import { Layers, Network, Waves, Monitor, Globe, Link } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Platform: Layers,
  'Network Effect': Network,
  Flow: Waves,
  'Workspace OS': Monitor,
  'Open Ecosystem': Globe,
  'Connection Economy': Link,
};

export default function Theory() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="container-apple">
        <div className="fade-in-section">
          <p className="text-apple-section mb-6">PART 05</p>
          <h2 className="text-apple-title text-white mb-8">Theory</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-20 max-w-3xl">
            构建我们自己的理论框架
          </p>
        </div>

        {/* Layer stack */}
        <div className="space-y-1">
          {theoryFramework.map((layer, i) => {
            const Icon = iconMap[layer.layer] || Layers;
            return (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start gap-6 md:gap-10 p-6 md:p-8 rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-transparent hover:bg-white/[0.02] transition-all duration-500">
                  {/* Layer number */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs text-accent/50 font-mono">
                        LAYER {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {layer.layer}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed mb-4 max-w-2xl">
                      {layer.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {layer.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="px-3 py-1 rounded-full border border-white/10 text-[11px] text-white/40 bg-white/[0.02]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {i < theoryFramework.length - 1 && (
                    <div className="absolute left-[2.9rem] md:left-[3.5rem] bottom-0 translate-y-full w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
