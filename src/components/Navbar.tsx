import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'gradient-primary shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <button
          onClick={() => handleClick('#home')}
          className="font-display text-2xl font-bold text-primary-foreground tracking-wider"
        >
          Snigdha<span className="text-mauve">.</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="font-body text-sm font-medium text-primary-foreground/80 hover:text-mauve transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-mauve after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleClick('#contact')}
              className="ripple rounded-full gradient-accent px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden gradient-primary overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[500px] py-6' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="font-body text-base text-primary-foreground/90 hover:text-mauve transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleClick('#contact')}
              className="ripple rounded-full gradient-accent px-8 py-3 text-sm font-semibold text-primary"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
