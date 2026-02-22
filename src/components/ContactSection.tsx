import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email format';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-body text-mauve text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Contact <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Let's talk about your project
            </h3>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and creative ideas.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: Mail, label: 'snigdhatiwari004@gmail.com' },
                { icon: Phone, label: '+91 8858925929' },
                { icon: MapPin, label: 'Noida, India' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-body text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-foreground hover:gradient-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {submitted && (
              <div className="mb-6 p-4 rounded-xl gradient-accent text-primary font-body font-medium text-center animate-scale-in">
                ✨ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: 'name', label: 'Your Name', type: 'text' },
                { key: 'email', label: 'Your Email', type: 'email' },
                { key: 'phone', label: 'Phone Number', type: 'tel' },
              ].map(({ key, label, type }) => (
                <div key={key}>
                  <input
                    type={type}
                    placeholder={label}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className={`w-full px-5 py-4 rounded-xl bg-card border font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all ${
                      errors[key] ? 'border-destructive' : 'border-border'
                    }`}
                  />
                  {errors[key] && (
                    <p className="font-body text-xs text-destructive mt-1">{errors[key]}</p>
                  )}
                </div>
              ))}

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-5 py-4 rounded-xl bg-card border font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-mauve/50 transition-all resize-none ${
                    errors.message ? 'border-destructive' : 'border-border'
                  }`}
                />
                {errors.message && (
                  <p className="font-body text-xs text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="ripple w-full rounded-xl gradient-primary px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-glow hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
