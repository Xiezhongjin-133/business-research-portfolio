import { motion } from 'framer-motion';
import { ourViewContent } from '../data/research';
import { Cpu, Network, Link2 } from 'lucide-react';

const conceptIcons = [Cpu, Network, Link2];

export default function OurView() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[120px]" />

      <div className="container-apple relative z-10">
        <div className="fade-in-section">
          <p className="text-apple-section mb-6">PART 08</p>
          <h2 className="text-apple-title text-white mb-6">Our View</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-20 max-w-3xl">
            {ourViewContent.subtitle}
          </p>
        </div>

        {/* Core Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl border border-accent/20 bg-accent/[0.03]">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
              "{ourViewContent.thesis}"
            </p>
          </div>
        </motion.div>

        {/* Core Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {ourViewContent.coreConcepts.map((concept, i) => {
            const Icon = conceptIcons[i];
            return (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{concept.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{concept.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture diagram placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <p className="text-xs text-accent/60 tracking-[0.2em] uppercase mb-8">
            WORKSPACE OS ARCHITECTURE
          </p>

          {/* Simplified visual architecture */}
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <div className="w-full p-6 rounded-xl border border-accent/30 bg-accent/[0.05]">
              <p className="text-sm font-semibold text-accent">Workspace OS</p>
              <p className="text-xs text-white/40 mt-1">The Connection Layer</p>
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-white/10" />

            <div className="w-full p-4 rounded-xl border border-white/10 bg-white/[0.03]">
              <p className="text-xs text-white/60">Workspace Protocol</p>
              <p className="text-[10px] text-white/30 mt-1">Open Standard for Tool Interoperability</p>
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-white/10 to-white/5" />

            <div className="grid grid-cols-3 gap-3 w-full">
              {['AI Agents', 'SaaS Tools', 'Data Sources'].map((node) => (
                <div
                  key={node}
                  className="p-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
                >
                  <p className="text-[11px] text-white/50">{node}</p>
                </div>
              ))}
            </div>

            <div className="w-px h-6 bg-white/5" />

            <p className="text-xs text-white/30 italic">Flow Nodes — Connected via Protocol</p>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            This is not a product pitch.
            <br />
            <span className="text-accent font-medium">
              This is a research thesis.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
