import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { name: 'Rahul Sharma', role: 'CEO, TechStart', text: 'Snigdha delivered an exceptional website that exceeded our expectations. Her attention to detail and design sensibility is remarkable.', rating: 5 },
  { name: 'Priya Gupta', role: 'Marketing Director', text: 'Working with Snigdha was a pleasure. She understood our brand vision and translated it into a stunning, functional website.', rating: 5 },
  { name: 'Ankit Verma', role: 'Founder, HomeDecor', text: 'Our e-commerce platform looks amazing and performs flawlessly. Snigdha\'s WordPress expertise really shines through.', rating: 5 },
  { name: 'Meera Patel', role: 'Product Manager', text: 'The landing page Snigdha designed increased our conversion rate by 40%. Highly recommend her services!', rating: 5 },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-32 gradient-dark">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-body text-mauve text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-mauve text-mauve" />
              ))}
            </div>

            <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 italic">
              "{t.text}"
            </p>

            <div className="w-16 h-16 rounded-full gradient-accent mx-auto mb-3 flex items-center justify-center">
              <span className="font-display text-xl font-bold text-primary">
                {t.name.charAt(0)}
              </span>
            </div>
            <h4 className="font-display text-lg font-bold text-primary-foreground">{t.name}</h4>
            <p className="font-body text-sm text-mauve">{t.role}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-foreground hover:bg-mauve/20 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-mauve w-8' : 'bg-primary-foreground/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-foreground hover:bg-mauve/20 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
