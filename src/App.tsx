import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import VideoCollage from './components/VideoCollage';
import GiftBoxSection from './components/GiftBoxSection';
import MemoriesSection from './components/MemoriesSection';
import MessageSection from './components/MessageSection';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
    document.title = "Happy Birthday, My Love 💖";
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <FloatingHearts />
      <MusicPlayer />

      <HeroSection />
      <VideoCollage />
      <GiftBoxSection />
      <MemoriesSection />
      <MessageSection />

      <footer className="py-8 text-center bg-gradient-to-r from-pink-100 to-pink-50">
        <p className="text-pink-600 font-cursive text-xl md:text-2xl px-4">
          I'm so lucky to have you in my life. Happy Birthday, Princess 💕
        </p>
      </footer>
    </div>
  );
}

export default App;
