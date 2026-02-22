import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounter } from '@/hooks/useCounter';
import profilePhoto from '@/assets/profile-photo.jpg';

const stats = [
  { label: 'Years Experience', value: 2 },
  { label: 'Projects Completed', value: 150 },
  { label: 'Happy Clients', value: 120 },
  { label: 'Countries Served', value: 20 },
];

const skills = [
  { name: 'HTML', percent: 95 },
  { name: 'CSS', percent: 95 },
  { name: 'JavaScript', percent: 90 },
  { name: 'WordPress', percent: 95 },
  { name: 'UI/UX', percent: 85 },
  { name: 'React', percent: 80 },
];

function StatItem({ label, value, isVisible }: { label: string; value: number; isVisible: boolean }) {
  const count = useCounter(value, isVisible);
  return (
    <div className="text-center">
      <p className="font-display text-3xl md:text-4xl font-bold text-primary">
        {count}+
      </p>
      <p className="font-body text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: skillRef, isVisible: skillsVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-body text-mauve text-sm tracking-[0.3em] uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Know Me <span className="text-gradient">Better</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="relative group max-w-md mx-auto">
              <div className="absolute -inset-4 gradient-accent rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl" />
              <img
                src={profilePhoto}
                alt="Snigdha Tiwari - Web Designer & Developer"
                className="relative rounded-2xl shadow-card w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Info */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Snigdha Tiwari
            </h3>
            <p className="font-body text-mauve font-medium mb-6">
              Web Designer & Developer
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Detail-oriented Web Designer & Developer with over 2 years of experience in creating responsive,
              user-friendly websites and landing pages. Proficient in HTML, CSS, JavaScript, WordPress, and
              modern design tools like Figma and Photoshop. Adept at ensuring cross-browser compatibility
              and performance optimization.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 p-6 glass rounded-xl">
              {stats.map((s) => (
                <StatItem key={s.label} {...s} isVisible={isVisible} />
              ))}
            </div>

            <a
              href="/resume_snigdha.pdf"
              download
              className="ripple inline-flex rounded-full gradient-primary px-8 py-3.5 font-body font-semibold text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Skills */}
        <div ref={skillRef} className="mt-20">
          <h3 className={`font-display text-2xl font-bold text-foreground text-center mb-10 transition-all duration-700 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
            My <span className="text-gradient">Skills</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <div key={skill.name} className={`transition-all duration-700`} style={{ transitionDelay: `${i * 100}ms`, opacity: skillsVisible ? 1 : 0, transform: skillsVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                <div className="flex justify-between mb-2">
                  <span className="font-body font-medium text-foreground">{skill.name}</span>
                  <span className="font-body text-mauve font-semibold">{skill.percent}%</span>
                </div>
                <div className="h-3 rounded-full bg-card overflow-hidden">
                  <div
                    className="progress-fill h-full rounded-full gradient-accent"
                    style={{ width: skillsVisible ? `${skill.percent}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
