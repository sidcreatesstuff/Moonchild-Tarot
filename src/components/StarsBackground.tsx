import React from 'react';

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-mystic-indigo select-none">
      {/* Deep Background Glows - Hardware Accelerated */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(0,194,255,0.12)_0%,transparent_60%)] will-change-[opacity]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(0,194,255,0.08)_0%,transparent_50%)]" />
      
      {/* Stars Layer 1 - Static */}
      <div className="absolute inset-x-0 inset-y-0 opacity-40" style={{ 
        backgroundImage: `radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 250px 50px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 400px 350px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 500px 100px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 700px 450px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 850px 200px, #fff, rgba(0,0,0,0))`,
        backgroundSize: '400px 400px',
        backgroundRepeat: 'repeat'
      }} />

      {/* Stars Layer 2 - Twinkling (CSS Only for performance) */}
      <div className="absolute inset-x-0 inset-y-0 opacity-60 animate-twinkle-slow" style={{ 
        backgroundImage: `radial-gradient(1.5px 1.5px at 150px 250px, #fff, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 300px 550px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 600px 350px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 800px 750px, #fff, rgba(0,0,0,0))`,
        backgroundSize: '600px 600px',
        backgroundRepeat: 'repeat'
      }} />

      {/* Shiva Glows - Specialized highlights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-mystic-shiva/5 blur-[100px] rounded-full animate-pulse-slow will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-mystic-shiva/5 blur-[120px] rounded-full animate-pulse-slow will-change-transform" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default StarsBackground;

