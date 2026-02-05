import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const CelebrationPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [currentCoupleIndex, setCurrentCoupleIndex] = useState(0);

  const coupleEmojis = ['💑', '👩‍❤️‍👨', '💏', '👫', '🥰', '💞', '💝', '💖'];

  useEffect(() => {
    // Update page title
    document.title = "💕 You Said Yes! 💕";
    
    // Play romantic song
    const audio = new Audio("/kaazoom-be-my-valentine-valentinex27s-day-song-male-vocal-461604.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    
    const playAudio = () => {
      audio.play().catch(err => {
        console.log("Audio autoplay prevented. Click anywhere to play music.");
      });
    };
    
    playAudio();
    
    const handleInteraction = () => {
      audio.play();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
    
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    // Hide video after it ends (approximately 10 seconds)
    const videoTimer = setTimeout(() => {
      setShowVideo(false);
      setShowContent(true);
    }, 10000);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      clearTimeout(videoTimer);
    };
  }, []);

  // Carousel auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCoupleIndex((prev) => (prev + 1) % coupleEmojis.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [coupleEmojis.length]);

  return (
    <div 
      className="h-screen w-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-hero relative overflow-hidden"
      onClick={() => {
        if (showVideo) {
          setShowVideo(false);
          setShowContent(true);
        }
      }}
    >
      {/* Roses Shower Effect */}
      {showVideo && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={`rose-shower-${i}`}
              className="absolute animate-fall-rose"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div 
                className="text-2xl sm:text-3xl opacity-80"
                style={{
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                🌹
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video in Center */}
      {showVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/40">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-4">
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-auto rounded-2xl shadow-2xl"
              onEnded={() => {
                setShowVideo(false);
                setShowContent(true);
              }}
              onError={() => {
                console.log("Video failed to load, showing content");
                setShowVideo(false);
                setShowContent(true);
              }}
            >
              <source src="/My%20heart%20feels%20full%20every%20day%20because%20of%20you.%20Happy%20Valentine's%20Day..mp4" type="video/mp4" />
            </video>
            <p className="text-center text-white mt-4 text-sm">Click anywhere to skip</p>
          </div>
        </div>
      )}
      
      {/* Ambient glows - Same as landing */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-warm/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-primary/15 fill-primary/15 animate-float-heart"
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${15 + (i % 2) * 40}%`,
              width: 16 + (i % 3) * 6,
              height: 16 + (i % 3) * 6,
              animationDelay: `${i * 0.6}s`,
              animationDuration: '4s',
            }}
          />
        ))}
      </div>
      
      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-gold-warm/25 animate-twinkle"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i % 2) * 40}%`,
              width: 14,
              height: 14,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating roses */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={`rose-${i}`}
            className="absolute text-xl sm:text-2xl animate-float-heart"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${25 + (i % 2) * 35}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: '6s',
              opacity: 0.2,
            }}
          >
            🌹
          </div>
        ))}
      </div>
      
      {/* Cute Couples - Floating */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { emoji: '💑', left: '8%', top: '12%', delay: '0s', size: 'text-2xl sm:text-3xl' },
          { emoji: '👫', left: '88%', top: '18%', delay: '1s', size: 'text-xl sm:text-2xl' },
          { emoji: '💏', left: '12%', top: '78%', delay: '2s', size: 'text-2xl sm:text-3xl' },
          { emoji: '🥰', left: '85%', top: '72%', delay: '1.5s', size: 'text-xl sm:text-2xl' },
          { emoji: '💞', left: '50%', top: '8%', delay: '0.5s', size: 'text-lg sm:text-xl' },
        ].map((couple, i) => (
          <div
            key={`couple-${i}`}
            className={`absolute ${couple.size} animate-float-heart`}
            style={{
              left: couple.left,
              top: couple.top,
              animationDelay: couple.delay,
              animationDuration: '5s',
              opacity: 0.3,
            }}
          >
            {couple.emoji}
          </div>
        ))}
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="text-center relative z-10 max-w-4xl animate-fade-in-up">
          {/* Decorative hearts */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-primary animate-heartbeat" style={{ animationDelay: '0s' }} />
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-primary fill-primary animate-pulse-soft" />
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-primary animate-heartbeat" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-love mb-4 sm:mb-6 animate-fade-in-up animation-delay-200">
            You Said Yes!
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl mb-6 sm:mb-8 animate-fade-in-up animation-delay-300">
            <span className="animate-bounce-slow">💕</span>
            <span className="animate-bounce-slow" style={{ animationDelay: '0.15s' }}>✨</span>
            <span className="animate-bounce-slow" style={{ animationDelay: '0.3s' }}>💖</span>
          </div>

          {/* Main Message */}
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground/90 leading-relaxed italic mb-6 sm:mb-8 px-4 animate-fade-in-up animation-delay-400">
            You've made me the <span className="text-primary font-bold not-italic text-2xl sm:text-3xl md:text-4xl">happiest person</span> in the world!
          </p>

          {/* Couples Carousel */}
          <div className="text-center py-4 sm:py-6 mb-6 sm:mb-8 animate-fade-in-up animation-delay-600">
            <div className="relative inline-block">
              <div className="text-5xl sm:text-6xl md:text-7xl animate-float-heart filter drop-shadow-2xl">
                {coupleEmojis.map((emoji, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                      index === currentCoupleIndex
                        ? 'opacity-100 scale-100 rotate-0'
                        : 'opacity-0 scale-50 rotate-45'
                    }`}
                  >
                    {emoji}
                  </div>
                ))}
                <div className="opacity-0">{coupleEmojis[0]}</div>
              </div>
              
              {/* Orbiting Hearts */}
              <div className="absolute inset-0 animate-spin-slow">
                {[0, 1, 2, 3].map((i) => {
                  const angle = (i * 90) * (Math.PI / 180);
                  const radius = 50;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <Heart
                      key={i}
                      className="absolute text-primary fill-primary animate-heartbeat"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        width: 16,
                        height: 16,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {coupleEmojis.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentCoupleIndex
                      ? 'w-6 bg-primary'
                      : 'w-1.5 bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Promise */}
          <div className="mb-6 sm:mb-8 px-4 animate-fade-in-up animation-delay-800">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-gold-warm animate-twinkle" />
              <p className="font-display text-xl sm:text-2xl text-primary font-bold">My Promise</p>
              <Sparkles className="w-5 h-5 text-gold-warm animate-twinkle" style={{ animationDelay: '0.3s' }} />
            </div>
            <p className="font-serif text-base sm:text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl mx-auto">
              I promise to love you in the good times and bad, to support your dreams, 
              and to cherish every moment we share together.
            </p>
          </div>

          {/* Forever Yours */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-900">
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary fill-primary animate-heartbeat" />
              <p className="font-display text-3xl sm:text-4xl md:text-5xl text-primary font-bold tracking-wide">
                Forever Yours
              </p>
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary fill-primary animate-heartbeat" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>

          {/* Closing Message */}
          <p className="font-serif text-base sm:text-lg md:text-xl text-muted-foreground font-medium italic animate-fade-in-up animation-delay-1000">
            With all my love, always and forever 💕
          </p>
        </div>
      )}
    </div>
  );
};

export default CelebrationPage;
