import { Github, ArrowUpRight, BookOpen, Database, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black py-24 border-t border-white/[0.05]">
      <div className="container-apple">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              The Future of Workspace
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              A strategic research portal exploring the next decade of intelligent office.
              Built as an open-source knowledge hub for competition, research, and decision-making.
            </p>
          </div>

          {/* Right - Quick links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-accent/70 tracking-wider uppercase mb-4">Sections</p>
              <div className="space-y-2">
                {[
                  'The Problem',
                  'Industry Trends',
                  'Deli Ecosystem',
                  'Benchmark',
                  'Theory',
                  'Research Library',
                  'Data Center',
                  'Our View',
                ].map((item) => (
                  <p key={item} className="text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-accent/70 tracking-wider uppercase mb-4">Resources</p>
              <div className="space-y-2">
                {[
                  { label: 'GitHub Repository', icon: Github },
                  { label: 'Research Papers', icon: FileText },
                  { label: 'Data Sources', icon: Database },
                  { label: 'Reading List', icon: BookOpen },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer group"
                  >
                    <item.icon className="w-3 h-3" />
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 The Future of Workspace Research Project. Open source under MIT License.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-xs text-muted-foreground">
              Built with evidence from 18+ authoritative sources
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
