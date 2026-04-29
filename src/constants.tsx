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
      { id: 'q1', name: '1 Question', p_inr: '₹111', p_usd: '$4.44', cards: '5-6 cards' },
      { id: 'q2', name: '2 Questions', p_inr: '₹222', p_usd: '$6.66', cards: '10-12 cards' },
      { id: 'q3', name: '3 Questions', p_inr: '₹333', p_usd: '$8.88', cards: '15-16 cards' },
      { id: 'q4', name: '4 Questions', p_inr: '₹444', p_usd: '$11.11', cards: '20-22 cards' },
      { id: 'q5', name: '5 Questions', p_inr: '₹555', p_usd: '$13.33', cards: '29-30 cards' },
    ]
  },
  {
    title: 'Life Areas',
    description: 'Each life area reading includes: current and future energies, obstacles, guidance for you, plus 2 personal questions (Love, Career, Health, Academics, Family, Personal Growth, Finances).',
    items: [
      { id: 'a1', name: '1 Area', p_inr: '₹222', p_usd: '$5.55', cards: '12-15 cards' },
      { id: 'a2', name: '2 Areas', p_inr: '₹555', p_usd: '$11.11', cards: '22-25 cards' },
      { id: 'a3', name: '3 Areas', p_inr: '₹777', p_usd: '$17.77', cards: '32-35 cards' },
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
        details: 'Covering current energy, feelings, hidden factors, future connection, timing, guidance + 1 personal question.' 
      },
      { 
        id: 'focused-clarity', 
        name: 'Focused Clarity Spread', 
        p_inr: '₹333', p_usd: '$10', 
        cards: '10-15 cards', 
        details: 'Shifts in life, love energy, emotional patterns, career/studies outlook, release, short term future.' 
      },
      { 
        id: 'life-reset', 
        name: 'Full Life Reset Spread', 
        p_inr: '₹777', p_usd: '$15', 
        cards: '25-30 cards', 
        details: 'Core blocks, past release, love & relationships in depth, career direction, patterns & outcome.' 
      },
    ]
  },
  {
    title: 'Professional Focused Guidance',
    items: [
      { id: 'career', name: 'Career Guidance', p_inr: '₹333', p_usd: '$9', cards: '15-20 cards', details: 'Reading covering career energy, opportunities, obstacles, growth path, focus skills, and guidance.' },
      { id: 'finance', name: 'Finance Reading', p_inr: '₹333', p_usd: '$9', cards: '15-20 cards', details: 'Financial situation, blocks, opportunities, advice for stability, and skills to focus on.' },
      { id: 'no-contact', name: 'No Contact / Situationship', p_inr: '₹444', p_usd: '$11', cards: '20-25 cards', details: 'Their thoughts, feelings, reason for no contact, future actions, outcome, and spiritual guidance.' },
      { id: 'education', name: 'Education / Studies', p_inr: '₹333', p_usd: '$9', cards: '15-20 cards', details: 'Reading covering focus, challenges, results, improvement areas, and academic guidance.' },
    ]
  }
];

export const TESTIMONIALS = [
  { 
    name: "Richie", 
    text: "My reading was a true blessing that deeply resonated with me.. It was a beautifully detailed reading. so uplifting and filled with honesty and compassion from the reader." 
  },
  { 
    name: "John", 
    text: "Good reader with insightful reading and great interpretation At first i didn’t believe the answers. And then I saw results within hours. Wow \ud83e\udd29" 
  },
  { 
    name: "Dayaliz", 
    text: "Just had a reading done. She was SO accurate. She pointed out the exact dynamic of my relationship at the moment and was honest about it. She also provided guidance, which is something I truly appreciate and it's something I've known about myself. It was a great confirmation and I feel so much more clear headed now. There's clarity as to what I should do as well. Truly an amazing tarot read and I will definitely be coming back again. \ud83d\udc96" 
  },
  { 
    name: "Samantha", 
    text: "I had a very pleasant reading. The reader was very kind as well as very empathetic and intuitive. They didn\u2019t try to sugar coat things but also got straight to the point. I really enjoyed reading and it was very accurate to my situation. Overall, I had a really good experience and I often find myself coming back and getting clarity here and there from then!" 
  },
  { 
    name: "Ananya", 
    text: "Such a kind and caring reader, and with reasonable prices too. I received such a lengthy and in-depth reading and I can definitely tell this reader does NOT use AI. It felt like speaking with a friend and the reader also gave me solid advice. The reading definitely made sense given my situation and I only provided minimal details. Thank you so much!" 
  },
];

export const HOW_IT_WORKS = [
  { icon: <BookOpen className="w-5 h-5" />, title: 'Selection', text: 'Choose your desired reading and category.' },
  { icon: <CreditCard className="w-5 h-5" />, title: 'Payment', text: 'Make payment via UPI, Razorpay, or PayPal.' },
  { icon: <UserCheck className="w-5 h-5" />, title: 'Details', text: 'Share your details (Initials & DOB) and your question.' },
  { icon: <RefreshCcw className="w-5 h-5" />, title: 'Alignment', text: 'Wait as I align with the cosmic energies.' },
  { icon: <Send className="w-5 h-5" />, title: 'Deliverance', text: 'Receive your reading within 12 - 24 hours.' },
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
