import { useTypingEffect } from '@/hooks/useTypingEffect';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const roles = ['Web Designer', 'Frontend Developer', 'WordPress Expert', 'UI/UX Specialist'];

export default function HeroSection() {
  const typedText = useTypingEffect(roles, 80, 1800);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-90" />

      {/* Floating shapes */}
      <div className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full bg-mauve/10 animate-float" />
      <div className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full bg-blush/10 animate-float-delayed" />
      <div className="absolute top-[60%] left-[70%] w-16 h-16 rounded-full bg-mauve/5 animate-float" />
      <div className="absolute top-[30%] right-[25%] w-24 h-24 border border-mauve/20 rounded-full animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-mauve text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 max-w-4xl mx-auto"
        >
          I Design & Develop{' '}
          <span className="text-gradient">High-Performance</span> Digital
          Experiences
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-body text-xl md:text-2xl text-blush mb-4 h-10"
        >
          {typedText}
          <span className="typing-cursor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-body text-primary-foreground/60 max-w-xl mx-auto mb-10 text-sm md:text-base"
        >
          Detail-oriented Web Designer & Developer with 2+ years of experience creating
          responsive, user-friendly websites and landing pages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('#portfolio')}
            className="ripple rounded-full gradient-accent px-8 py-4 font-body font-semibold text-primary hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            View Portfolio
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="ripple rounded-full border-2 border-mauve/50 px-8 py-4 font-body font-semibold text-primary-foreground hover:bg-mauve/10 hover:border-mauve transition-all duration-300"
          >
            Hire Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-mauve/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-mauve"
          />
        </div>
      </motion.div>
    </section>
  );
}
