import { Heart, Sparkles } from 'lucide-react';

const MessageSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-pink-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Heart size={200} className="text-pink-300" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="text-pink-500 mr-2" size={32} />
              <h2 className="font-cursive text-4xl md:text-5xl text-center text-pink-600">
                A Letter From My Heart
              </h2>
              <Sparkles className="text-pink-500 ml-2" size={32} />
            </div>

            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p className="animate-fadeIn">
                <strong className="text-pink-600 font-cursive text-2xl">My Dearest Love,</strong>
              </p>

              <p className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Many, many happy returns of the day, Febi. You truly make my world brighter in ways I can't fully explain. From the moment you came into my life, everything felt different. You brought color to my dull days, warmth to my quiet moments, and a happiness I didn't even know I was missing.
              </p>

              <p className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Your laugh is honestly my favorite sound in the world, and seeing you happy means everything to me. Being with you makes even the simplest moments feel special. Sometimes I catch myself thinking how lucky I am to have someone like you in my life.
              </p>

              <p className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                I know you are struggling a lot, and I truly admire your strength. May Allah reward you for everything you have gone through so far. May this year bring you peace, happiness, and success. May you achieve your dreams, become financially secure, and live happily without depending on anyone. I will always be with you through your ups and downs. All your problems will be solved, In sha Allah. Eat well, do things that make you productive, and try not to stress yourself over unnecessary things. Don't worry about people who annoy you—think about the people who love you and be happy.
              </p>

              <p className="animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                I can't fully describe how beautiful you are in my eyes. Sometimes I melt just by looking at you—your crooked nose, your plump lips, and your rosy cheeks. This page is not enough for me to explain how special you are; it would probably take a lifetime.
              </p>

              <p className="animate-fadeIn" style={{ animationDelay: '1.0s' }}>
                Thank you for choosing me and letting me be part of your life. You inspire me more than you probably realize, and your love has changed me in the best possible ways. On your birthday, I just want you to remember how special you truly are. You deserve happiness, love, and all the beautiful things life can give. I feel incredibly lucky to call you mine.
              </p>

              <p className="animate-fadeIn" style={{ animationDelay: '1.2s' }}>
                And one small request from my side… try to make <strong>that</strong> thing quick.
              </p>

              <p className="text-center font-cursive text-2xl text-pink-600 mt-8 animate-fadeIn" style={{ animationDelay: '1.4s' }}>
                Happy Birthday, my beautiful princess. Here's to many more years of love, laughter, and unforgettable memories together. 💖
              </p>

              <p className="text-right font-cursive text-xl text-pink-500 mt-6 animate-fadeIn" style={{ animationDelay: '1.6s' }}>
                Forever yours,<br />
                Your Love 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
