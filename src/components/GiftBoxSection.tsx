import { useState } from 'react';
import { Heart } from 'lucide-react';
import GiftBox3D from './GiftBox3D';

const GiftBoxSection = () => {
  const [openedBox, setOpenedBox] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Images for the 3 boxes
  const boxImages = [
    "/vid/a.JPG",
    "/vid/b.jpg",
    "/vid/c.jpg"
  ];

  const handleBoxClick = (boxIndex: number) => {
    setOpenedBox(boxIndex);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="py-8 px-6 bg-gradient-to-br from-white via-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cursive text-4xl md:text-5xl text-center text-pink-600 mb-8 animate-fadeIn">
          Choose Your Gift 🎁
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[0, 1, 2].map((box) => (
            <div
              key={box}
              className="flex flex-col items-center perspective"
            >
              <GiftBox3D
                isOpened={openedBox === box}
                onClick={() => handleBoxClick(box)}
                imageSrc={boxImages[box]}
              />

              {openedBox === box && (
                <div className="flex flex-col items-center animate-fadeIn relative z-[60]">
                  <p className="mt-4 text-pink-600 font-medium text-xl bg-white/80 px-4 py-1 rounded-full shadow-sm mb-4">
                    It's me! 😊
                  </p>

                  {showPopup && (
                    <div className="bg-white rounded-3xl p-6 shadow-xl max-w-[280px] text-center animate-scaleIn border border-pink-100">
                      <Heart size={40} className="mx-auto text-pink-500 mb-3 animate-heartBeat" />
                      <h3 className="font-cursive text-2xl text-pink-600 mb-2">
                        You unlocked my heart 💕
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Just like this gift, my love for you is always here waiting for you
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftBoxSection;
