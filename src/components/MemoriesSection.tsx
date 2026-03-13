import { useState } from 'react';
import { X } from 'lucide-react';

const MemoriesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const memories = [
    {
      url: '/images/IMG_1871.JPG',
      caption: 'Beautiful You'
    },
    {
      url: '/images/IMG_20230531_201631_883.jpg',
      caption: 'Our Happy Moments'
    },
    {
      url: '/images/x.JPG',
      caption: 'Together Forever'
    },
    {
      url: '/images/i.jpg',
      caption: 'Your Smile'
    },
    {
      url: '/images/IMG_2861.JPG',
      caption: 'Us'
    },
    {
      url: '/images/j.jpg',
      caption: 'Forever Yours'
    },
    {
      url: '/images/k.webp',
      caption: 'Sweet Memories'
    },
    {
      url: '/images/l.jpg',
      caption: 'My Love'
    },
    {
      url: '/images/m.webp',
      caption: 'Always You'
    },
    {
      url: '/images/n.jpg',
      caption: 'You & Me'
    },
    {
      url: '/images/o.jpg',
      caption: 'Endless Love'
    },
    {
      url: '/images/p.jpg',
      caption: 'Perfect Together'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cursive text-4xl md:text-5xl text-center text-pink-600 mb-4 animate-fadeIn">
          Our Precious Memories 💕
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Every moment with you is a treasure I hold close to my heart
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(memory.url)}
            >
              <img
                src={memory.url}
                alt={memory.caption}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close full screen"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Selected memory"
            className="max-w-[95%] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scaleIn relative z-[105]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default MemoriesSection;
