import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [typedName, setTypedName] = useState('');
  const fullName = 'Febi';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-white opacity-70"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/images/first.jpg"
          alt="Romantic background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 text-center px-6 py-12 animate-fadeIn">
        <h1 className="font-cursive text-5xl md:text-7xl text-pink-600 mb-6 animate-float">
          Happy Birthday, {typedName}<span className="animate-pulse">💖</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed animate-slideUp">
          On this special day, I want you to know that you are the most precious gift life has ever given me.
          Your smile lights up my darkest days, and your love makes every moment magical.
          Happy birthday to the one who holds my heart forever.
        </p>

        <div className="space-y-4 mb-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <blockquote className="italic text-pink-700 text-base md:text-lg">
            "You complete me."
          </blockquote>
          <blockquote className="italic text-pink-700 text-base md:text-lg">
            "Loving you feels like finding the piece of myself I didn’t know I was missing."
          </blockquote>
        </div>

        <div className="animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <img
            src="/images/she.JPG"
            alt="Romantic moment"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto shadow-2xl border-8 border-white/50 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-pink-600 cursor-pointer z-20"
        aria-label="Scroll down"
      >
        <ChevronDown size={48} />
      </button>
    </section>
  );
};

export default HeroSection;
