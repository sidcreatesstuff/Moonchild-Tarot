/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Moon, Star, Sparkles, CreditCard, 
  ShieldCheck, Mail, Instagram, ChevronRight,
  MessageSquare, Quote, Heart, CheckCircle2,
  BookOpen, RefreshCcw, Send, UserCheck, MessageCircle,
  ArrowUp
} from 'lucide-react';
import { 
  SERVICES_CATEGORIES, 
  TAROT_CARDS, 
  POLICIES, 
  HOW_IT_WORKS, 
  TESTIMONIALS,
  SOCIALS 
} from './constants';
import StarsBackground from './components/StarsBackground';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-4 glass rounded-full text-mystic-gold border-mystic-gold/20 hover:border-mystic-gold shadow-2xl transition-all group scale-90 md:scale-100"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-mystic-shiva/5 via-transparent to-mystic-shiva/5 pointer-events-none" />
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-full bg-mystic-gold/10 flex items-center justify-center border border-mystic-gold/30">
          <Moon className="w-5 h-5 text-mystic-gold glow-gold" />
        </div>
        <span className="font-display text-lg tracking-tight text-white font-semibold uppercase">Moonchild Tarot 111</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-display text-mystic-lavender">
        <a href="#services" className="hover:text-mystic-gold transition-colors cursor-pointer">Services</a>
        <a href="#how-it-works" className="hover:text-mystic-gold transition-colors cursor-pointer">Process</a>
        <a href="#daily-card" className="hover:text-mystic-gold transition-colors cursor-pointer">Daily Card</a>
        <a href="#contact" className="hover:text-mystic-gold transition-colors cursor-pointer">Contact</a>
      </div>

      <div className="flex gap-4 items-center">
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden sm:block px-6 py-2 glass rounded-full text-[10px] font-display uppercase tracking-[0.2em] border-mystic-gold/20 hover:border-mystic-gold/60 transition-all text-mystic-gold"
        >
          Book Reading
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-mystic-lavender"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-mystic-indigo/98 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center p-8 overflow-y-auto"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-4 text-mystic-shiva hover:text-white transition-colors"
            >
              <RefreshCcw className="rotate-45 w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-6 sm:gap-8 text-xl sm:text-2xl uppercase tracking-[0.3em] font-display text-white mb-10">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-mystic-shiva transition-colors py-2">Services</a>
              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="hover:text-mystic-shiva transition-colors py-2">Process</a>
              <a href="#daily-card" onClick={() => setIsMenuOpen(false)} className="hover:text-mystic-shiva transition-colors py-2">Daily Card</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-mystic-shiva transition-colors py-2">Contact</a>
            </div>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-5 bg-mystic-shiva text-mystic-indigo rounded-full text-xs font-display uppercase tracking-[0.2em] font-bold shadow-2xl shadow-mystic-shiva/20 active:scale-95 transition-transform"
            >
              Book Reading
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Lotus = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M50 95C50 95 40 75 40 50C40 25 50 5 50 5C50 5 60 25 60 50C60 75 50 95 50 95Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M50 95C50 95 80 85 90 60C100 35 85 15 85 15C85 15 65 20 50 50" />
    <path d="M50 95C50 95 20 85 10 60C0 35 15 15 15 15C15 15 35 20 50 50" />
    <path d="M50 95C50 95 95 90 95 70C95 50 75 35 75 35C75 35 60 40 50 65" />
    <path d="M50 95C50 95 5 90 5 70C5 50 25 35 25 35C25 35 40 40 50 65" />
    <circle cx="50" cy="45" r="5" fill="currentColor" fillOpacity="0.2" stroke="none" />
  </svg>
);

const Hero = () => (
  <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 md:pt-24 px-6 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-mystic-pink/5 blur-[100px] md:blur-[130px] -z-10 animate-pulse will-change-[opacity]" />
    <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-mystic-shiva/10 blur-[100px] md:blur-[130px] -z-10 animate-pulse will-change-[opacity]" style={{ animationDuration: '8s' }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] h-[150%] md:h-[120%] bg-mystic-shiva/5 blur-[120px] md:blur-[160px] -z-20 will-change-[opacity]" />
    
    {/* Floating Lotus elements - Scaled for mobile */}
    <motion.div 
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[12%] left-[5%] md:top-[20%] md:left-[10%] opacity-10 pointer-events-none"
    >
      <Lotus size={28} className="md:size-10 text-mystic-shiva glow-shiva" />
    </motion.div>
    <motion.div 
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[15%] right-[5%] md:bottom-[20%] md:right-[10%] opacity-10 pointer-events-none"
    >
      <Lotus size={40} className="md:size-14 text-mystic-shiva/40 glow-shiva" />
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative z-10 text-center w-full px-4"
    >
      <div className="inline-flex items-center gap-3 md:gap-6 mb-10 md:mb-12">
        <div className="h-[1px] w-6 md:w-12 bg-mystic-gold/40" />
        <span className="text-mystic-lavender tracking-[0.4em] md:tracking-[0.5em] uppercase text-[8px] md:text-[10px] font-display font-medium">Wisdom from the universe</span>
        <div className="h-[1px] w-6 md:w-12 bg-mystic-gold/40" />
      </div>
      
      <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-8 md:mb-10 font-display leading-[1.1] md:leading-[1.1] text-white tracking-tight">
        Embrace Your <br />
        <span className="text-mystic-shiva glow-shiva font-serif italic lowercase block sm:inline mt-4 sm:mt-0">inner light</span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-mystic-lavender mb-12 md:mb-14 text-base md:text-xl font-serif italic leading-relaxed opacity-80 px-2 line-clamp-3 md:line-clamp-none">
        "The stars only illuminate the path you have already begun to walk."
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
        <button 
          onClick={() => document.getElementById('daily-card')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto px-10 md:px-12 py-5 bg-mystic-gold text-mystic-indigo rounded-full font-display uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-bold hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-mystic-gold/20"
        >
          Begin A Reading
        </button>
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto px-10 md:px-12 py-5 glass rounded-full font-display uppercase tracking-[0.2em] text-[10px] md:text-[11px] hover:bg-white/10 transition-colors border-white/5"
        >
          Our Services
        </button>
      </div>
    </motion.div>

    {/* Sacred Geometry Decorative Element */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none"
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" fill="none" />
        <path d="M100 10 L100 190 M10 100 L190 100" stroke="white" strokeWidth="0.5" />
        <rect x="50" y="50" width="100" height="100" stroke="white" strokeWidth="0.5" fill="none" transform="rotate(45 100 100)" />
        <rect x="50" y="50" width="100" height="100" stroke="white" strokeWidth="0.5" fill="none" />
      </svg>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 md:py-32 px-6 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-mystic-shiva/5 blur-[100px] -z-10 will-change-[opacity]" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-mystic-shiva/5 blur-[120px] -z-10 animate-pulse will-change-[opacity]" />
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="relative group max-w-md mx-auto md:max-w-none">
        {/* Mystical Aura Glow */}
        <div className="absolute -inset-8 bg-mystic-shiva/20 rounded-[3.5rem] md:rounded-[4.5rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse will-change-[opacity]" />
        <div className="absolute inset-0 bg-mystic-gold/10 rounded-[3rem] md:rounded-[4rem] group-hover:rotate-3 transition-transform duration-700" />
        
        <div className="relative aspect-[4/5] bg-mystic-indigo/20 rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 group shadow-2xl shadow-black/80">
           <img 
            src="https://i.pinimg.com/736x/40/87/ed/4087edecaa664ba872d1c5238ef5a660.jpg" 
            alt="Lord Shiva (Mahadev) Illustration" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 glow-shiva"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-mystic-indigo/95 via-mystic-indigo/20 to-transparent pointer-events-none" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.15)_0%,transparent_70%)] pointer-events-none group-hover:opacity-150 transition-opacity duration-1000" />
        </div>
        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-40 md:h-40 glass shadow-2xl shadow-mystic-shiva/20 rounded-full flex items-center justify-center p-4 md:p-6 text-center animate-bounce duration-[3s] border-white/10 z-20">
          <span className="font-serif italic text-[11px] md:text-sm text-mystic-gold leading-tight">No Sugar <br /> Coating.</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-mystic-shiva/10 text-mystic-shiva text-[10px] md:text-[11px] uppercase tracking-widest font-display font-bold border border-mystic-shiva/20 glow-shiva">
            <Lotus size={14} />
            The Reader
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl text-white font-display leading-[0.9]">I am Mannat.</h2>
            <p className="text-xl md:text-2xl text-mystic-gold font-serif italic tracking-wide">
              An Oracle of Hidden Truths.
            </p>
          </div>
          <div className="space-y-6 text-mystic-lavender/80 font-serif text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            <p>
              Guided by the primordial energy of <span className="text-mystic-shiva glow-shiva font-semibold">Lord Shivji</span> and years of aligning with celestial forces, I bring a unique blend of 
              <span className="text-mystic-gold font-medium"> honest insight</span> and 
              <span className="text-mystic-shiva/80 italic"> intuitive clarity</span> to your life. 
            </p>
            <p>
              My approach is simple: <span className="text-white italic">no fluff, only truth.</span> I stay grounded in current energies to show you the doors currently open for your soul's evolution.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-4">
            <a href={SOCIALS.instagram} target="_blank" className="flex items-center gap-3 text-xs font-display uppercase tracking-[0.3em] text-mystic-lavender/60 hover:text-mystic-shiva transition-colors">
              <Instagram size={18} /> Instagram 
            </a>
            <a href={SOCIALS.reddit} target="_blank" className="flex items-center gap-3 text-xs font-display uppercase tracking-[0.3em] text-mystic-lavender/60 hover:text-mystic-shiva transition-colors">
               <MessageSquare size={18} /> Reddit
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 md:py-32 px-6 bg-black/20 overflow-hidden">
    <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
      <div className="text-center space-y-4 relative">
        <Lotus size={40} className="mx-auto text-mystic-shiva/30 mb-6 md:mb-8 animate-pulse glow-shiva" />
        <h2 className="text-4xl md:text-7xl text-white font-display">Celestial Offerings</h2>
        <p className="text-mystic-lavender tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[11px] font-display opacity-80">Select your spiritual path</p>
      </div>

      <div className="space-y-20 md:space-y-32">
        {SERVICES_CATEGORIES.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-10 md:space-y-16">
            <div className="flex items-center gap-4 md:gap-8">
               <h3 className="text-3xl md:text-4xl font-serif italic text-mystic-gold whitespace-nowrap">{cat.title}</h3>
               <div className="flex-grow h-[1px] bg-gradient-to-r from-mystic-gold/20 to-transparent" />
            </div>
            {cat.description && (
              <p className="max-w-2xl text-mystic-lavender/60 font-serif italic text-base md:text-lg leading-relaxed">{cat.description}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {cat.items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -8 }}
                  className="glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between hover:bg-white/[0.08] transition-all border-white/5 shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-mystic-shiva/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl md:text-2xl font-display font-medium text-white">{item.name}</h4>
                      <Heart size={18} className="text-mystic-pink/20 md:opacity-40" />
                    </div>
                    {'cards' in item && <span className="inline-block text-[10px] md:text-xs tracking-widest bg-mystic-shiva/10 px-3 py-1 rounded-full text-mystic-shiva border border-mystic-shiva/20 font-bold uppercase">{item.cards}</span>}
                    {'details' in item && <p className="text-sm md:text-base text-mystic-lavender/60 font-serif italic leading-relaxed">{item.details}</p>}
                  </div>
                  <div className="mt-10 md:mt-12 flex justify-between items-end relative z-10">
                    <div className="space-y-1">
                      <div className="text-2xl md:text-3xl font-display text-mystic-gold font-bold">{item.p_inr}</div>
                      <div className="text-[10px] md:text-xs text-mystic-lavender/40 uppercase tracking-widest">or {item.p_usd}</div>
                    </div>
                    <button 
                      onClick={() => window.open(SOCIALS.instagram, '_blank')}
                      className="p-4 rounded-full glass hover:bg-mystic-gold hover:text-mystic-indigo transition-all transform group-hover:scale-110"
                      aria-label="Book reading"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 md:py-32 px-6">
    <div className="max-w-6xl mx-auto glass rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 relative overflow-hidden border-white/5 shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-mystic-shiva/5 blur-[100px] -z-10" />
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-5xl md:text-7xl mb-4 md:mb-8 text-white font-display">The Journey</h2>
        <p className="text-mystic-lavender tracking-[0.3em] uppercase text-[10px] md:text-xs font-display opacity-60">Process of Alignment</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 relative z-10">
        {HOW_IT_WORKS.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
            <div className="w-16 h-16 md:w-20 md:h-20 glass rounded-2xl flex items-center justify-center text-mystic-shiva shadow-lg shadow-mystic-shiva/10 border-white/10 group-hover:scale-110 group-hover:border-mystic-gold/40 transition-all duration-500">
              {step.icon}
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs md:text-sm font-display uppercase tracking-widest font-bold opacity-80">{step.title}</h4>
              <p className="text-sm md:text-base text-mystic-lavender/60 font-serif italic leading-relaxed px-4 md:px-0">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="reviews" className="py-20 md:py-32 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-6xl text-white">Kind Words</h2>
        <p className="text-mystic-lavender tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] font-display">Voices from the collective</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-10 md:p-12 rounded-[3rem] relative flex flex-col justify-between hover:bg-white/[0.06] transition-all border-white/5 group"
          >
            <Quote size={40} className="absolute top-6 right-8 text-mystic-shiva opacity-5 group-hover:opacity-10 transition-opacity" />
            <p className="text-lg md:text-xl text-mystic-lavender/80 font-serif italic mb-12 md:mb-14 leading-relaxed relative z-10">"{t.text}"</p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-mystic-shiva/10 flex items-center justify-center text-mystic-shiva text-sm md:text-base font-bold uppercase border border-mystic-shiva/20 shadow-lg">
                {t.name.split(' ')[0][0]}
              </div>
              <div>
                <span className="block font-display text-[11px] md:text-xs uppercase tracking-[0.2em] text-white font-bold">{t.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-mystic-lavender/40">Blessed Soul</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DailyCardInteraction = () => {
  const [drawnCard, setDrawnCard] = useState<null | typeof TAROT_CARDS[0]>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawCard = () => {
    setIsDrawing(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
      setDrawnCard(TAROT_CARDS[randomIndex]);
      setIsDrawing(false);
    }, 2000);
  };

  return (
    <section id="daily-card" className="py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12">
        <div>
           <h2 className="text-3xl md:text-4xl mb-4 md:mb-6 text-white font-display">Daily Intuition</h2>
           <p className="text-mystic-lavender/50 font-serif italic px-4">Draw a card for your personal daily energy.</p>
        </div>

          <div className="flex flex-col items-center gap-12 sm:gap-16">
          <AnimatePresence mode="wait">
            {!drawnCard ? (
              <motion.div 
                key="back"
                exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
                className="w-64 md:w-72 h-[380px] md:h-[420px] glass-heavy rounded-[2.5rem] md:rounded-[3rem] border-2 border-white/10 relative flex flex-col items-center justify-center group cursor-pointer shadow-2xl overflow-hidden touch-manipulation"
                onClick={!isDrawing ? drawCard : undefined}
              >
                <div className="absolute inset-6 md:inset-8 border border-mystic-gold/10 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center overflow-hidden">
                   {isDrawing && (
                     <>
                        <motion.div 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: [0.2, 0.5, 0.2] }}
                           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute inset-0 bg-mystic-gold/30 blur-3xl"
                        />
                        {/* Star Particles */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0], 
                              scale: [0, 1, 0],
                              x: (Math.random() - 0.5) * 100,
                              y: (Math.random() - 0.5) * 100
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: i * 0.2,
                              ease: "easeOut"
                            }}
                            className="absolute w-1 h-1 bg-mystic-gold rounded-full"
                          />
                        ))}
                     </>
                   )}
                   
                   <div className="relative">
                      {isDrawing && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-8 border-2 border-dashed border-mystic-gold/20 rounded-full"
                        />
                      )}
                      <motion.div
                        animate={isDrawing ? { 
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 1, 0.4] 
                        } : {}}
                        transition={isDrawing ? { 
                          duration: 1, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        } : {}}
                      >
                       <Sparkles className={`w-10 h-10 md:w-12 md:h-12 text-mystic-gold/40 ${!isDrawing ? 'group-hover:scale-125' : ''} transition-all`} />
                      </motion.div>
                   </div>
                </div>
                
                <div className="mt-32 md:mt-40 text-center space-y-3 relative z-10">
                   <span className="text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.6em] uppercase text-mystic-gold font-display font-medium">
                     {isDrawing ? 'Aligning Energies...' : 'Reveal Moment'}
                   </span>
                   <div className="h-[1px] w-12 bg-mystic-gold/20 mx-auto relative overflow-hidden">
                      {isDrawing && (
                        <motion.div 
                          initial={{ left: "-100%" }}
                          animate={{ left: "100%" }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-mystic-gold w-1/2"
                        />
                      )}
                   </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="front"
                initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                className="w-64 md:w-72 h-[380px] md:h-[420px] glass-heavy rounded-[2.5rem] md:rounded-[3rem] border-2 border-mystic-gold/30 p-8 md:p-12 flex flex-col items-center justify-between shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl text-white font-serif italic">{drawnCard.name}</h3>
                  <div className="h-[1px] w-8 md:w-12 bg-mystic-gold/30 mx-auto" />
                  <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-mystic-gold font-display">{drawnCard.keyword}</span>
                </div>
                <p className="text-sm md:text-base font-serif italic text-mystic-lavender/60 leading-relaxed">{drawnCard.meaning}</p>
                <button onClick={() => setDrawnCard(null)} className="text-[9px] md:text-[10px] uppercase tracking-widest text-mystic-lavender/30 hover:text-mystic-gold transition-colors">Reset</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<{ title: string; content: string } | null>(null);

  return (
    <footer id="contact" className="pt-20 md:pt-40 pb-12 md:pb-16 px-6 bg-mystic-indigo relative border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 mb-24 md:mb-32">
        <div className="col-span-1 sm:col-span-2 space-y-10 md:space-y-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
             <Moon className="w-10 h-10 text-mystic-shiva glow-shiva" />
             <span className="font-display text-3xl md:text-4xl text-white uppercase tracking-tighter font-black">Moonchild Tarot 111</span>
          </div>
          <p className="text-mystic-lavender/60 max-w-sm mx-auto md:mx-0 font-serif italic text-lg md:text-xl leading-relaxed">
            Direct truth for souls seeking direction. Delivering readings with integrity and honor within 24 hours.
          </p>
          <div className="flex justify-center md:justify-start gap-6 md:gap-8">
            <a href={SOCIALS.instagram} target="_blank" className="p-4 md:p-5 glass rounded-full hover:bg-mystic-shiva/20 hover:text-mystic-shiva transition-all shadow-xl group">
               <Instagram size={22} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={SOCIALS.reddit} target="_blank" className="p-4 md:p-5 glass rounded-full hover:bg-mystic-shiva/20 hover:text-mystic-shiva transition-all shadow-xl group">
               <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="space-y-6 md:space-y-10">
          <h4 className="text-mystic-gold uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-display font-bold opacity-80">Payments</h4>
          <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-mystic-lavender/60 font-serif">
             <div className="flex items-center gap-2 font-display uppercase tracking-widest text-[9px] md:text-[10px] opacity-40"><CheckCircle2 size={12} /> Razorpay</div>
             <div className="flex items-center gap-2 font-display uppercase tracking-widest text-[9px] md:text-[10px] opacity-40"><CheckCircle2 size={12} /> UPI Direct</div>
             <div className="flex items-center gap-2 font-display uppercase tracking-widest text-[9px] md:text-[10px] opacity-40"><CheckCircle2 size={12} /> PayPal</div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-10">
          <h4 className="text-mystic-gold uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-display font-bold opacity-80">Sacred Policies</h4>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-serif text-mystic-lavender/60">
            {POLICIES.map((p, i) => (
              <li 
                key={i} 
                onClick={() => setSelectedPolicy(p)}
                className="hover:text-mystic-gold cursor-pointer transition-colors italic"
              >
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-display text-mystic-lavender opacity-30 text-center md:text-left">
        <p>© 2024 Moonchild Tarot 111 • Mannat • Guided by Infinite Stillness</p>
        <div className="flex gap-8 md:gap-12 font-bold justify-center items-center">
           <span>Clarity</span>
           <Lotus size={10} className="text-mystic-shiva glow-shiva" />
           <span>Truth</span>
           <Lotus size={10} className="text-mystic-shiva glow-shiva" />
           <span>Honor</span>
        </div>
      </div>
    </div>

      {/* Policy Modal */}
      <AnimatePresence>
        {selectedPolicy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center px-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPolicy(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass p-8 md:p-12 rounded-[2rem] max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPolicy(null)}
                className="absolute top-6 right-6 p-2 text-mystic-lavender/40 hover:text-mystic-gold transition-colors"
                aria-label="Close"
              >
                <RefreshCcw className="w-5 h-5 rotate-45" />
              </button>
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-mystic-gold/10 text-mystic-gold text-[9px] md:text-[10px] uppercase tracking-widest font-display font-bold border border-mystic-gold/20">
                  Policy
                </div>
                <h3 className="text-3xl md:text-4xl text-white font-display uppercase tracking-tight">{selectedPolicy.title}</h3>
                <p className="text-lg md:text-xl text-mystic-lavender/80 font-serif italic leading-relaxed">
                  "{selectedPolicy.content}"
                </p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-mystic-lavender/40 font-display">
                    Thank you for trusting the celestial guidance.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default function App() {
  return (
    <main className="min-h-screen text-mystic-lavender font-sans overflow-x-hidden relative">
      <StarsBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorksSection />
      <Testimonials />
      <DailyCardInteraction />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
