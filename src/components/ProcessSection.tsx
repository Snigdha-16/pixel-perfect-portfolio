import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Search, Lightbulb, PenTool, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Research', desc: 'Understanding your goals, audience, and competition.' },
  { icon: Lightbulb, title: 'Strategy', desc: 'Planning the architecture, user flow, and technology stack.' },
  { icon: PenTool, title: 'Wireframing', desc: 'Creating blueprints for layout and user interaction.' },
  { icon: Palette, title: 'Design', desc: 'Crafting pixel-perfect, brand-aligned visual designs.' },
  { icon: Code, title: 'Development', desc: 'Building responsive, performant, and clean code.' },
  { icon: Rocket, title: 'Testing & Launch', desc: 'QA testing, optimization, and successful deployment.' },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-body text-mauve text-sm tracking-[0.3em] uppercase mb-3">How I Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Development <span className="text-gradient">Process</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.title}
                className={`relative flex items-start mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 150}ms`,
                }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-accent shadow-glow z-10 mt-5" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass rounded-xl p-5 hover-lift">
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-body text-xs text-mauve">Step {i + 1}</span>
                        <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
