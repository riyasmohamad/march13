import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const CakeSection = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showWish, setShowWish] = useState(false);

  const handleCakeClick = () => {
    if (candlesLit) {
      setCandlesLit(false);
      setShowWish(true);

      setTimeout(() => {
        setShowWish(false);
      }, 4000);
    } else {
      setCandlesLit(true);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-100 via-white to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cursive text-4xl md:text-5xl text-pink-600 mb-8 animate-fadeIn">
          Make a Wish! 🎂
        </h2>

        <p className="text-gray-600 text-lg mb-12">
          {candlesLit ? 'Tap the cake to blow out the candles!' : 'Tap again to light them back up!'}
        </p>

        <div
          className="relative inline-block cursor-pointer transition-transform hover:scale-105"
          onClick={handleCakeClick}
        >
          <div className="relative">
            <div className="cake-layer w-64 h-20 md:w-80 md:h-24 bg-gradient-to-br from-pink-400 to-pink-300 rounded-t-full mx-auto shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-pink-500"></div>
            </div>

            <div className="cake-layer w-56 h-20 md:w-72 md:h-24 bg-gradient-to-br from-pink-500 to-pink-400 mx-auto shadow-lg relative overflow-hidden -mt-2">
              <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-pink-600"></div>
            </div>

            <div className="cake-layer w-48 h-24 md:w-64 md:h-28 bg-gradient-to-br from-pink-600 to-pink-500 rounded-b-3xl mx-auto shadow-2xl relative overflow-hidden -mt-2">
              <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ animationDelay: '1s' }}></div>
            </div>

            {candlesLit && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="w-2 h-12 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full shadow-md"></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="flame w-4 h-6 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-500 rounded-full animate-flicker"></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-200 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!candlesLit && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Sparkles size={48} className="text-yellow-400 animate-spin-slow" />
              </div>
            )}
          </div>

          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-72 md:w-96 h-8 bg-pink-900/20 rounded-full blur-xl"></div>
        </div>

        {showWish && (
          <div className="mt-12 animate-scaleIn">
            <div className="bg-white rounded-3xl p-8 shadow-2xl inline-block border-4 border-pink-200">
              <Sparkles size={48} className="mx-auto text-pink-500 mb-4 animate-spin-slow" />
              <h3 className="font-cursive text-3xl md:text-4xl text-pink-600 mb-2">
                Make a wish 🌟
              </h3>
              <p className="text-gray-600 text-lg">
                May all your dreams come true, my love!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CakeSection;
