/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Moon, Star, Sun, Sparkles, CreditCard, 
  ShieldCheck, Mail, Instagram, ChevronRight,
  MessageSquare, Quote, Heart, CheckCircle2,
  BookOpen, RefreshCcw, Send, UserCheck, MessageCircle,
  ArrowUp, Flower2
} from 'lucide-react';
import { 
  SERVICES_CATEGORIES, 
  TAROT_CARDS, 
  POLICIES, 
  HOW_IT_WORKS, 
  TESTIMONIALS,
  SOCIALS 
} from './constants';

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
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/5">
      <div className="flex items-center gap-3">
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-mystic-indigo/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-12 p-12"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-4 text-mystic-lavender"
            >
              <RefreshCcw className="rotate-45 w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8 text-xl uppercase tracking-[0.3em] font-display text-white">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-mystic-gold transition-colors">Services</a>
              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="hover:text-mystic-gold transition-colors">Process</a>
              <a href="#daily-card" onClick={() => setIsMenuOpen(false)} className="hover:text-mystic-gold transition-colors">Daily Card</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-mystic-gold transition-colors">Contact</a>
            </div>
            <button className="mt-8 px-10 py-4 bg-mystic-gold text-mystic-indigo rounded-full text-xs font-display uppercase tracking-[0.2em] font-bold">
              Book Reading
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 md:pt-24 px-6 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-mystic-pink/5 blur-[100px] md:blur-[130px] -z-10 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-mystic-blue/5 blur-[100px] md:blur-[130px] -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] h-[150%] md:h-[120%] bg-mystic-lavender/5 blur-[120px] md:blur-[160px] -z-20" />
    
    {/* Floating Lotus elements */}
    <motion.div 
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[20%] left-[10%] opacity-10 pointer-events-none hidden lg:block"
    >
      <Flower2 size={40} className="text-mystic-gold" />
    </motion.div>
    <motion.div 
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[20%] right-[10%] opacity-10 pointer-events-none hidden lg:block"
    >
      <Flower2 size={60} className="text-mystic-gold" />
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative z-10 text-center w-full"
    >
      <div className="inline-flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
        <div className="h-[1px] w-8 md:w-12 bg-mystic-gold/40" />
        <span className="text-mystic-lavender tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] font-display">Wisdom from the universe</span>
        <div className="h-[1px] w-8 md:w-12 bg-mystic-gold/40" />
      </div>
      
      <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6 md:mb-8 font-display leading-[1.15] md:leading-[1.1] text-white">
        Embrace Your <br />
        <span className="text-mystic-gold font-serif italic lowercase block sm:inline mt-2 sm:mt-0">inner light</span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-mystic-lavender mb-10 md:mb-12 text-base md:text-xl font-serif italic leading-relaxed opacity-80 px-4">
        "The stars only illuminate the path you have already begun to walk."
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-6">
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-mystic-gold text-mystic-indigo rounded-full font-display uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-semibold hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
        >
          Begin A Reading
        </button>
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 glass rounded-full font-display uppercase tracking-[0.2em] text-[10px] md:text-[11px] hover:bg-white/10 transition-colors border-white/5"
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
    <div className="absolute top-0 right-0 w-64 h-64 bg-mystic-lavender/5 blur-[100px] -z-10" />
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="relative group max-w-md mx-auto md:max-w-none">
        {/* Mystical Aura Glow */}
        <div className="absolute -inset-8 bg-mystic-lavender/20 rounded-[3.5rem] md:rounded-[4.5rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
        <div className="absolute inset-0 bg-mystic-gold/10 rounded-[3rem] md:rounded-[4rem] group-hover:rotate-3 transition-transform duration-700" />
        
        <div className="relative aspect-[4/5] bg-mystic-indigo/20 rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 group shadow-2xl shadow-black/80">
           <img 
            src="https://i.pinimg.com/736x/40/87/ed/4087edecaa664ba872d1c5238ef5a660.jpg" 
            alt="Lord Shiva (Mahadev) Illustration" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 glow-lavender"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-mystic-indigo/95 via-mystic-indigo/20 to-transparent pointer-events-none" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,169,201,0.1)_0%,transparent_70%)] pointer-events-none group-hover:opacity-150 transition-opacity duration-1000" />
        </div>
        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-40 md:h-40 glass shadow-2xl rounded-full flex items-center justify-center p-4 md:p-6 text-center animate-bounce duration-[3s] border-white/10 z-20">
          <span className="font-serif italic text-[11px] md:text-sm text-mystic-gold leading-tight">No Sugar <br /> Coating.</span>
        </div>
      </div>
      
      <div className="space-y-6 md:space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-mystic-lavender/10 text-mystic-lavender text-[9px] md:text-[10px] uppercase tracking-widest font-display font-bold border border-mystic-lavender/20">
          <Flower2 size={12} className="text-mystic-gold" />
          The Reader
        </div>
        <h2 className="text-4xl md:text-6xl text-white">I am Mannat.</h2>
        <p className="text-lg md:text-xl text-mystic-lavender font-serif leading-relaxed italic opacity-90">
          "I believe in the power of truth over comfort. My readings are guided by the infinite stillness of Mahadev."
        </p>
        <div className="space-y-4 text-mystic-lavender/70 font-serif text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          <p>
            Guided by the primordial energy of <span className="text-mystic-gold">Lord Shivji</span> and years of aligning with celestial forces, I bring a unique blend of 
            <span className="text-mystic-gold"> honest insight</span> and 
            <span className="text-blue-300 italic"> intuitive clarity</span> to your life. 
            There is no fluff—only the messages intended for your soul's evolution.
          </p>
          <p>
            Whether it's love, career, or a total life reset, I stay grounded in current 
            energies to show you the doors currently open for you.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 pt-4 md:pt-6">
          <a href={SOCIALS.instagram} target="_blank" className="flex items-center gap-2 text-[10px] font-display uppercase tracking-widest text-mystic-lavender hover:text-mystic-gold transition-colors">
            <Instagram size={14} /> Instagram 
          </a>
          <a href={SOCIALS.reddit} target="_blank" className="flex items-center gap-2 text-[10px] font-display uppercase tracking-widest text-mystic-lavender hover:text-mystic-gold transition-colors">
             <MessageSquare size={14} /> Reddit
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 md:py-32 px-6 bg-black/20">
    <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
      <div className="text-center space-y-4 relative">
        <Flower2 size={40} className="mx-auto text-mystic-gold/20 mb-6 animate-pulse" />
        <h2 className="text-4xl md:text-6xl text-white">Celestial Offerings</h2>
        <p className="text-mystic-lavender tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] font-display">Select your spiritual path</p>
      </div>

      <div className="space-y-16 md:space-y-24">
        {SERVICES_CATEGORIES.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-4 md:gap-6">
               <h3 className="text-2xl md:text-3xl font-serif italic text-mystic-gold whitespace-nowrap">{cat.title}</h3>
               <div className="w-full h-[1px] bg-white/5" />
            </div>
            {cat.description && (
              <p className="max-w-2xl text-mystic-lavender/60 font-serif italic text-sm md:text-base">{cat.description}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cat.items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="glass p-6 md:p-8 rounded-[2rem] flex flex-col justify-between hover:bg-white/[0.08] transition-all border-white/10 shimmer relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg md:text-xl font-display font-medium text-white">{item.name}</h4>
                      <Heart size={16} className="text-mystic-pink opacity-40" />
                    </div>
                    {'cards' in item && <span className="inline-block text-[9px] uppercase tracking-widest bg-mystic-lavender/10 px-2 py-0.5 rounded text-mystic-lavender/60">{item.cards}</span>}
                    {'details' in item && <p className="text-sm text-mystic-lavender/50 font-serif italic leading-snug">{item.details}</p>}
                  </div>
                  <div className="mt-6 md:mt-8 flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="text-lg font-display text-mystic-gold font-bold">{item.p_inr}</div>
                      <div className="text-[10px] text-mystic-lavender/40 uppercase tracking-widest">or {item.p_usd}</div>
                    </div>
                    <button 
                      onClick={() => window.open(SOCIALS.instagram, '_blank')}
                      className="p-3 rounded-full glass hover:bg-mystic-gold hover:text-mystic-indigo transition-all"
                    >
                      <ChevronRight size={16} />
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
    <div className="max-w-6xl mx-auto glass rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 relative overflow-hidden border-white/5">
      <div className="absolute top-0 right-0 w-64 h-64 bg-mystic-blue/5 blur-[100px]" />
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-4xl md:text-6xl mb-4 md:mb-6 text-white">The Journey</h2>
        <p className="text-mystic-lavender tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] font-display">How we align energies</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
        {HOW_IT_WORKS.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-mystic-gold shadow-[0_0_15px_rgba(212,175,55,0.25)] border-mystic-gold/20">
              {step.icon}
            </div>
            <p className="text-xs md:text-sm text-mystic-lavender/60 font-serif italic leading-relaxed">
              {step.text}
            </p>
            {idx < 4 && <div className="hidden md:block w-px h-12 bg-white/5 mt-4" />}
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] relative flex flex-col justify-between hover:bg-white/[0.06] transition-all border-white/5"
          >
            <Quote size={32} className="absolute top-4 right-6 text-mystic-pink/10" />
            <p className="text-base md:text-lg text-mystic-lavender/80 font-serif italic mb-8 md:mb-10 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-mystic-gold/10 flex items-center justify-center text-mystic-gold text-[10px] md:text-xs font-bold uppercase border border-white/5">
                {t.name.split(' ')[0][0]}
              </div>
              <span className="font-display text-[10px] md:text-[11px] uppercase tracking-widest text-mystic-lavender/60">{t.name}</span>
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
    }, 1200);
  };

  return (
    <section id="daily-card" className="py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12">
        <div>
           <h2 className="text-3xl md:text-4xl mb-4 md:mb-6 text-white font-display">Daily Intuition</h2>
           <p className="text-mystic-lavender/50 font-serif italic px-4">Draw a card for your personal daily energy.</p>
        </div>

        <div className="relative h-[440px] md:h-[480px] flex items-center justify-center overflow-visible">
          <AnimatePresence mode="wait">
            {!drawnCard ? (
              <motion.div 
                key="back"
                exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
                className="w-64 md:w-72 h-[380px] md:h-[420px] glass-heavy rounded-[2.5rem] md:rounded-[3rem] border-2 border-white/10 relative flex flex-col items-center justify-center group cursor-pointer shadow-2xl"
                onClick={drawCard}
              >
                <div className="absolute inset-6 md:inset-8 border border-mystic-gold/10 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center">
                   <Sparkles className={`w-10 h-10 md:w-12 md:h-12 text-mystic-gold/40 ${isDrawing ? 'animate-spin' : 'group-hover:scale-125'} transition-all`} />
                </div>
                <span className="relative z-10 text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase text-mystic-gold/40 font-display mt-32 md:mt-40">Reveal Moment</span>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-20 md:mb-32">
        <div className="col-span-1 sm:col-span-2 space-y-8 md:space-y-12">
          <div className="flex items-center gap-3">
             <Moon className="w-8 h-8 text-mystic-gold glow-gold" />
             <span className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight font-semibold">Moonchild Tarot 111</span>
          </div>
          <p className="text-mystic-lavender/60 max-w-sm font-serif italic text-base md:text-lg leading-relaxed">
            Direct truth for souls seeking direction. Delivering readings with integrity and honor within 24 hours.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href={SOCIALS.instagram} target="_blank" className="p-3 md:p-4 glass rounded-full hover:bg-mystic-gold hover:text-mystic-indigo transition-all"><Instagram size={18} /></a>
            <a href={SOCIALS.reddit} target="_blank" className="p-3 md:p-4 glass rounded-full hover:bg-mystic-gold hover:text-mystic-indigo transition-all"><MessageSquare size={18} /></a>
            <a href={SOCIALS.whatsapp} target="_blank" className="p-3 md:p-4 glass rounded-full hover:bg-mystic-gold hover:text-mystic-indigo transition-all"><Sun size={18} /></a>
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
           <Flower2 size={10} className="text-mystic-gold" />
           <span>Truth</span>
           <Flower2 size={10} className="text-mystic-gold" />
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
    <main className="bg-mystic-indigo min-h-screen text-mystic-lavender font-sans overflow-x-hidden">
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
