import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';

const categories = ['All', 'WordPress', 'Business', 'eCommerce', 'Landing Pages', 'UI/UX'];

const projects = [
  { title: 'Techgropse Landing Page', category: 'Landing Pages', image: portfolio3, desc: 'Responsive landing page with HTML, CSS & JS' },
  { title: 'Techgropse Dubai', category: 'Business', image: portfolio1, desc: 'Custom responsive business website' },
  { title: 'Home Decor Interiors', category: 'WordPress', image: portfolio4, desc: 'Elegant online presence with WordPress Elementor' },
  { title: 'Mahousing Platform', category: 'WordPress', image: portfolio1, desc: 'Dynamic website with WordPress Elementor' },
  { title: 'eCommerce Store', category: 'eCommerce', image: portfolio2, desc: 'Full-featured online shopping platform' },
  { title: 'Dashboard App', category: 'UI/UX', image: portfolio5, desc: 'Mobile-first analytics dashboard design' },
  { title: 'Agency Portfolio', category: 'Landing Pages', image: portfolio3, desc: 'Creative agency portfolio with animations' },
  { title: 'Real Estate Platform', category: 'Business', image: portfolio1, desc: 'Property listing website with search' },
  { title: 'Fashion Store', category: 'eCommerce', image: portfolio2, desc: 'Elegant fashion eCommerce experience' },
  { title: 'SaaS Dashboard', category: 'UI/UX', image: portfolio5, desc: 'Modern SaaS application interface' },
  { title: 'Blog Theme', category: 'WordPress', image: portfolio4, desc: 'Custom WordPress blog theme' },
  { title: 'Startup Landing', category: 'Landing Pages', image: portfolio3, desc: 'High-converting startup landing page' },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [modal, setModal] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-body text-mauve text-sm tracking-[0.3em] uppercase mb-3">My Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Recent <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-body text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeFilter === cat
                  ? 'gradient-primary text-primary-foreground shadow-glow'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title + i}
              className="group relative rounded-xl overflow-hidden shadow-card hover-lift cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transition: `all 0.5s ease ${i * 60}ms`,
              }}
              onClick={() => setModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h4 className="font-display text-lg font-bold text-primary-foreground mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h4>
                <p className="font-body text-xs text-mauve mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </p>
                <button className="font-body text-xs rounded-full gradient-accent px-4 py-2 text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative bg-background rounded-2xl shadow-card-hover max-w-2xl w-full overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground"
            >
              <X size={16} />
            </button>
            <img src={modal.image} alt={modal.title} className="w-full aspect-video object-cover" />
            <div className="p-6">
              <span className="font-body text-xs text-mauve uppercase tracking-wider">{modal.category}</span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-2">{modal.title}</h3>
              <p className="font-body text-muted-foreground">{modal.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
