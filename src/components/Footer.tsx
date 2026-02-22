import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
const serviceLinks = ['Website Design', 'WordPress', 'eCommerce', 'UI/UX Design', 'SEO'];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="gradient-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Snigdha<span className="text-mauve">.</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
              Creating premium digital experiences with passion and precision. Let's make your vision a reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                    className="font-body text-sm text-primary-foreground/50 hover:text-mauve transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="font-body text-sm text-primary-foreground/50 hover:text-mauve transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-base font-bold text-primary-foreground mb-4">Follow Me</h4>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-foreground/60 hover:gradient-accent hover:text-primary transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Snigdha Tiwari. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-primary shadow-glow z-40 transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
