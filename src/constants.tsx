import { 
  Sparkles, MessageSquare, Heart, Briefcase, IndianRupee, Globe, 
  RefreshCcw, BookOpen, UserCheck, Shield, Send, CreditCard 
} from 'lucide-react';

export const SOCIALS = {
  instagram: 'https://www.instagram.com/_moonchildtarot111',
  reddit: 'https://reddit.com/user/moonchildtarot111',
  whatsapp: 'https://wa.me/yournumber', // Placeholder
};

export const SERVICES_CATEGORIES = [
  {
    title: 'Detailed Questions',
    items: [
      { id: 'q1', name: '1 Question', p_inr: '₹111', p_usd: '$4.44' },
      { id: 'q2', name: '2 Questions', p_inr: '₹222', p_usd: '$6.66' },
      { id: 'q3', name: '3 Questions', p_inr: '₹333', p_usd: '$8.88' },
      { id: 'q4', name: '4 Questions', p_inr: '₹444', p_usd: '$11.11' },
      { id: 'q5', name: '5 Questions', p_inr: '₹555', p_usd: '$13.33' },
    ]
  },
  {
    title: 'Life Areas',
    description: 'Love, career, health, academics, family, personal growth, finances. Includes current/future energies, obstacles, guidance + 2 personal questions.',
    items: [
      { id: 'a1', name: '1 Area', p_inr: '₹222', p_usd: '$5.55' },
      { id: 'a2', name: '2 Areas', p_inr: '₹555', p_usd: '$11.11' },
      { id: 'a3', name: '3 Areas', p_inr: '₹777', p_usd: '$17.77' },
    ]
  },
  {
    title: 'Specialized Spreads',
    items: [
      { 
        id: 'love-full', 
        name: 'Full Clarity Love Spread', 
        p_inr: '₹555', p_usd: '$8.88', 
        cards: '25-30 cards',
        details: 'Feelings, hidden factors, future of connection, timing, 1 personal question.' 
      },
      { 
        id: 'focused-clarity', 
        name: 'Focused Clarity Spread', 
        p_inr: '₹333', p_usd: '$10', 
        cards: '10-15 cards', 
        details: 'Mindset, shifting energies, love, career, what to release, short term future.' 
      },
      { 
        id: 'life-reset', 
        name: 'Full Life Reset Spread', 
        p_inr: '₹777', p_usd: '$15', 
        cards: '25-30 cards', 
        details: 'Core blocks, past influences, subconscious fears, advice & final outcome.' 
      },
    ]
  },
  {
    title: 'Specific Focused Readings',
    items: [
      { id: 'career', name: 'Career Guidance', p_inr: '₹333', p_usd: '$9', details: 'Energy, opportunities, obstacles, growth.' },
      { id: 'finance', name: 'Finance Reading', p_inr: '₹333', p_usd: '$9', details: 'Situation, blocks, opportunities, stability.' },
      { id: 'no-contact', name: 'Situationship / No Contact', p_inr: '₹444', p_usd: '$11', details: 'Thoughts, feelings, future actions, outcome.' },
      { id: 'education', name: 'Education / Studies', p_inr: '₹333', p_usd: '$9', details: 'Focus, challenges, results, improvement.' },
    ]
  }
];

export const TESTIMONIALS = [
  { name: 'Riya K.', text: 'Mannat is so intuitive. Her reading was spot on and literally no sugar coating which I really needed.', rating: 5 },
  { name: 'Alex M.', text: 'The Full Life Reset spread helped me identify blocks I didn’t even realize were there. Highly recommend.', rating: 5 },
  { name: 'Sanya P.', text: 'Quick delivery and very detailed answers. She feels like a friend who gives honest advice.', rating: 5 },
  { name: 'Deepak T.', text: 'The career reading was a game changer. I finally feel confident about my next steps.', rating: 5 },
];

export const HOW_IT_WORKS = [
  { icon: <BookOpen className="w-5 h-5" />, text: 'Choose your desired reading and category.' },
  { icon: <CreditCard className="w-5 h-5" />, text: 'Make payment via UPI, Razorpay, or PayPal.' },
  { icon: <UserCheck className="w-5 h-5" />, text: 'Share your details (Initials & DOB) and your question.' },
  { icon: <RefreshCcw className="w-5 h-5" />, text: 'Wait as I align with the cosmic energies.' },
  { icon: <Send className="w-5 h-5" />, text: 'Receive your reading within 12 - 24 hours.' },
];

export const POLICIES = [
  { title: 'Refund Policy', content: 'No refunds after the reading has been delivered.' },
  { title: 'Nature of Reading', content: 'Readings are based on current energies and are not fixed outcomes.' },
  { title: 'Variation', content: 'Results may vary; take what resonates and leave the rest.' },
];

export const TAROT_CARDS = [
  { name: 'The Star', keyword: 'Hope', meaning: 'Renewed faith and spiritual guidance.' },
  { name: 'The Moon', keyword: 'Intuition', meaning: 'Trusting your gut feelings over appearances.' },
  { name: 'Mahadev', keyword: 'Transcendence', meaning: 'Infinite stillness and the power of transformation within.' },
  { name: 'Strength', keyword: 'Fortitude', meaning: 'Inner power and compassionate control.' },
];
