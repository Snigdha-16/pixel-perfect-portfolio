import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden gradient-primary">
      <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-mauve/10 animate-float" />
      <div className="absolute bottom-[10%] right-[8%] w-40 h-40 rounded-full bg-blush/10 animate-float-delayed" />

      <div ref={ref} className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Let's Build Something{' '}
          <span className="text-gradient">Amazing</span> Together
        </h2>
        <p className="font-body text-primary-foreground/60 max-w-xl mx-auto mb-10 text-lg">
          Have a project in mind? Let's collaborate and create something extraordinary that drives results.
        </p>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="ripple rounded-full gradient-accent px-10 py-4 font-body text-lg font-semibold text-primary hover:shadow-glow hover:scale-105 transition-all duration-300"
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
}
