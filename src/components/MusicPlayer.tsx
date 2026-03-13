import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      document.head.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'ybmhq0Ttims', // Urukumen azhalinu thanalu
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: 'ybmhq0Ttims',
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            event.target.setVolume(50);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
            }
          }
        },
      });
    };

  }, []);

  const togglePlay = () => {
    if (playerRef.current && isReady) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-pink-200 transition-all hover:scale-110 border-2 border-pink-200"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {!isPlaying ? (
          <VolumeX size={24} className="text-pink-600" />
        ) : (
          <Volume2 size={24} className="text-pink-600 animate-pulse" />
        )}
      </button>

      {/* Hidden container for youtube iframe */}
      <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden">
        <div id="youtube-player"></div>
      </div>
    </div>
  );
};

export default MusicPlayer;
