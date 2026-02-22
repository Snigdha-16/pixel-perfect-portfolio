import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounter } from '@/hooks/useCounter';
import { Briefcase, Users, Clock, Globe } from 'lucide-react';

const counters = [
  { icon: Briefcase, value: 150, label: 'Projects' },
  { icon: Users, value: 120, label: 'Clients' },
  { icon: Clock, value: 2, label: 'Years' },
  { icon: Globe, value: 20, label: 'Countries' },
];

function Counter({ icon: Icon, value, label, isVisible, delay }: { icon: any; value: number; label: string; isVisible: boolean; delay: number }) {
  const count = useCounter(value, isVisible);
  return (
    <div
      className="text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{count}+</p>
      <p className="font-body text-sm text-primary-foreground/60 mt-2">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mauve/5 animate-float -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blush/5 animate-float-delayed translate-y-1/2 -translate-x-1/2" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {counters.map((c, i) => (
            <Counter key={c.label} {...c} isVisible={isVisible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
