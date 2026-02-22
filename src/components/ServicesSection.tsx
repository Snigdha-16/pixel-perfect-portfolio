import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Palette, Code, Globe, ShoppingCart,
  Layout, Smartphone, PenTool, Search
} from 'lucide-react';

const services = [
  { icon: Palette, title: 'Website Design', desc: 'Crafting visually stunning, user-centric designs that elevate your brand identity and captivate audiences.' },
  { icon: Code, title: 'Website Development', desc: 'Building fast, scalable, and responsive websites with clean code and modern best practices.' },
  { icon: Globe, title: 'WordPress Development', desc: 'Custom WordPress solutions from themes to plugins, tailored to your exact business needs.' },
  { icon: ShoppingCart, title: 'eCommerce Development', desc: 'Full-featured online stores with secure payments, inventory management, and seamless checkout.' },
  { icon: Layout, title: 'Landing Page Design', desc: 'High-converting landing pages designed to maximize engagement and drive results.' },
  { icon: Smartphone, title: 'Custom Web Applications', desc: 'Bespoke web applications with intuitive interfaces and robust functionality.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Research-driven interface design that ensures delightful and intuitive user experiences.' },
  { icon: Search, title: 'SEO Optimization', desc: 'Data-driven SEO strategies to boost visibility, organic traffic, and search rankings.' },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-32 gradient-dark">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-body text-mauve text-sm tracking-[0.3em] uppercase mb-3">What I Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            My <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass rounded-xl p-6 hover-lift border-glow group cursor-pointer"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 80}ms`,
                }}
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/60 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <button className="font-body text-sm text-mauve font-medium hover:text-blush transition-colors group-hover:translate-x-1 transition-transform duration-300">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
