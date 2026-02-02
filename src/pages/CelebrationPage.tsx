import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const CelebrationPage = () => {
  const [showCard, setShowCard] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showOpening, setShowOpening] = useState(false);
  const [showMainQuote, setShowMainQuote] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showPromise, setShowPromise] = useState(false);
  const [showForever, setShowForever] = useState(false);
  const [showClosing, setShowClosing] = useState(false);
  const [currentCoupleIndex, setCurrentCoupleIndex] = useState(0);

  const coupleEmojis = ['💑', '👩‍❤️‍👨', '💏', '👫', '🥰', '💞', '💝', '💖'];

  useEffect(() => {
    // Update page title
    document.title = "💕 You Said Yes! 💕";
    
    // Play romantic song
    const audio = new Audio("https://assets.mixkit.co/music/preview/mixkit-romantic-love-song-2053.mp3");
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

    // Show card after 1 second
    setTimeout(() => setShowCard(true), 1000);
    
    // Auto-open card after 2 seconds
    setTimeout(() => setIsCardOpen(true), 2000);
    
    // Staggered content reveal with typewriter effect
    setTimeout(() => setShowOpening(true), 3000);
    setTimeout(() => setShowMainQuote(true), 5000);
    setTimeout(() => setShowCarousel(true), 7000);
    setTimeout(() => setShowPromise(true), 10000);
    setTimeout(() => setShowForever(true), 13000);
    setTimeout(() => setShowClosing(true), 15000);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  // Carousel auto-rotate
  useEffect(() => {
    if (showCarousel) {
      const interval = setInterval(() => {
        setCurrentCoupleIndex((prev) => (prev + 1) % coupleEmojis.length);
      }, 3000); // Changed from 2000 to 3000ms for smoother transitions
      return () => clearInterval(interval);
    }
  }, [showCarousel, coupleEmojis.length]);

  return (
    <div className="h-screen w-screen relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
      {/* Background Couple Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1920&q=80)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/65"></div>
        {/* Romantic color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/25 via-pink-500/20 to-red-500/25"></div>
      </div>
      
      {/* Subtle ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gold-warm/10 rounded-full blur-3xl animate-pulse-soft z-10" style={{ animationDelay: '1s' }} />
      
      {/* Reduced Falling Roses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={`rose-${i}`}
            className="absolute animate-fall-rose"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <div 
              className="text-base sm:text-lg md:text-xl opacity-30"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {i % 2 === 0 ? '🌹' : '🌸'}
            </div>
          </div>
        ))}
      </div>

      {/* Reduced Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-primary/25 fill-primary/25 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 12 + Math.random() * 10,
              height: 12 + Math.random() * 10,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Reduced Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-gold-warm/30 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 8 + Math.random() * 8,
              height: 8 + Math.random() * 8,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Cute Couples - Floating Around */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { emoji: '💑', left: '5%', top: '10%', delay: '0s', size: 'text-2xl sm:text-3xl md:text-4xl', duration: '6s' },
          { emoji: '👩‍❤️‍👨', left: '90%', top: '12%', delay: '1.5s', size: 'text-xl sm:text-2xl md:text-3xl', duration: '7s' },
          { emoji: '💏', left: '8%', top: '80%', delay: '2s', size: 'text-2xl sm:text-3xl md:text-4xl', duration: '6.5s' },
          { emoji: '👫', left: '88%', top: '78%', delay: '1s', size: 'text-xl sm:text-2xl md:text-3xl', duration: '7s' },
          { emoji: '🥰', left: '50%', top: '5%', delay: '0.5s', size: 'text-lg sm:text-xl md:text-2xl', duration: '5s' },
          { emoji: '💞', left: '20%', top: '50%', delay: '2.5s', size: 'text-lg sm:text-xl md:text-2xl', duration: '6s' },
          { emoji: '💝', left: '78%', top: '45%', delay: '1.8s', size: 'text-lg sm:text-xl md:text-2xl', duration: '6.5s' },
        ].map((couple, i) => (
          <div
            key={`couple-${i}`}
            className={`absolute ${couple.size} animate-float-heart`}
            style={{
              left: couple.left,
              top: couple.top,
              animationDelay: couple.delay,
              animationDuration: couple.duration,
              opacity: 0.25,
              filter: 'drop-shadow(0 2px 4px rgba(255, 105, 180, 0.2))',
            }}
          >
            {couple.emoji}
          </div>
        ))}
      </div>

      {/* Greeting Card Section */}
      {showCard && (
        <div className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-full flex items-center justify-center animate-fade-in-up">
          <div className="flex flex-col items-center justify-center w-full">
            {/* Opened Card - Directly shown */}
            {isCardOpen && (
              <div className="w-full animate-card-open">
                {/* Surprise burst effect - Reduced */}
                <div className="absolute inset-0 pointer-events-none z-50">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2;
                    const distance = 100 + Math.random() * 60;
                    const x = Math.cos(angle) * distance;
                    const y = Math.sin(angle) * distance;
                    
                    return (
                      <div
                        key={`burst-${i}`}
                        className="absolute animate-burst"
                        style={{
                          left: '50%',
                          top: '50%',
                          animationDelay: `${i * 0.05}s`,
                          '--burst-x': `${x}px`,
                          '--burst-y': `${y}px`,
                        } as React.CSSProperties}
                      >
                        <div className="text-base sm:text-lg md:text-xl">
                          {['💖', '✨', '💕'][i % 3]}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Horizontal Content Layout - No Box */}
                <div className="w-full px-4 sm:px-6 md:px-8">
                  {/* Main Content - Horizontal Flow */}
                  <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 md:space-y-6">
                    {/* Header */}
                    {showOpening && (
                      <div className="text-center animate-slide-in-down">
                        <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                          <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary fill-primary animate-heartbeat drop-shadow-lg" />
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-2xl typewriter-slow px-2">
                          You Said Yes!
                        </h1>
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xl sm:text-2xl">
                          <span className="animate-bounce-slow">💕</span>
                          <span className="animate-bounce-slow" style={{ animationDelay: '0.15s' }}>✨</span>
                          <span className="animate-bounce-slow" style={{ animationDelay: '0.3s' }}>💖</span>
                        </div>
                      </div>
                    )}

                    {/* Main Message */}
                    {showMainQuote && (
                      <div className="text-center animate-slide-in-up px-2">
                        <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed italic typewriter drop-shadow-lg">
                          You've made me the <span className="text-rose-400 font-bold not-italic text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-pulse-soft">happiest person</span> in the world!
                        </p>
                      </div>
                    )}

                    {/* Couples Carousel */}
                    {showCarousel && (
                      <div className="text-center py-2 sm:py-3 animate-fade-in-scale">
                        <div className="relative inline-block">
                          {/* Carousel Container */}
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
                            {/* Placeholder for layout */}
                            <div className="opacity-0">{coupleEmojis[0]}</div>
                          </div>
                          
                          {/* Orbiting Hearts */}
                          <div className="absolute inset-0 animate-spin-slow">
                            {[0, 1, 2, 3].map((i) => {
                              const angle = (i * 90) * (Math.PI / 180);
                              const radius = window.innerWidth < 640 ? 40 : window.innerWidth < 768 ? 50 : 60;
                              const x = Math.cos(angle) * radius;
                              const y = Math.sin(angle) * radius;
                              return (
                                <Heart
                                  key={i}
                                  className="absolute text-primary fill-primary animate-heartbeat"
                                  style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    width: window.innerWidth < 640 ? 14 : window.innerWidth < 768 ? 16 : 18,
                                    height: window.innerWidth < 640 ? 14 : window.innerWidth < 768 ? 16 : 18,
                                    animationDelay: `${i * 0.2}s`,
                                  }}
                                />
                              );
                            })}
                          </div>
                        </div>
                        
                        {/* Carousel Indicators */}
                        <div className="flex items-center justify-center gap-1 sm:gap-1.5 mt-3 sm:mt-4">
                          {coupleEmojis.map((_, index) => (
                            <div
                              key={index}
                              className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                                index === currentCoupleIndex
                                  ? 'w-4 sm:w-6 bg-primary'
                                  : 'w-1 sm:w-1.5 bg-primary/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Promise */}
                    {showPromise && (
                      <div className="text-center space-y-2 sm:space-y-3 animate-slide-in-left px-2">
                        <p className="font-display text-xl sm:text-2xl text-rose-400 font-bold drop-shadow-lg typewriter-fast">My Promise</p>
                        <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed typewriter-slow drop-shadow-lg">
                          I promise to love you in the good times and bad, to support your dreams, 
                          and to cherish every moment we share together.
                        </p>
                      </div>
                    )}

                    {/* Forever Yours */}
                    {showForever && (
                      <div className="text-center pt-1 sm:pt-2 animate-slide-in-right">
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-rose-400 fill-rose-400 animate-heartbeat" />
                          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-400 font-bold tracking-wide drop-shadow-2xl typewriter">
                            Forever Yours
                          </p>
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-rose-400 fill-rose-400 animate-heartbeat" style={{ animationDelay: '0.3s' }} />
                        </div>
                      </div>
                    )}

                    {/* Closing Message */}
                    {showClosing && (
                      <div className="text-center animate-bounce-in px-2">
                        <p className="font-serif text-base sm:text-lg md:text-xl text-white font-medium italic typewriter-fast drop-shadow-lg">
                          With all my love, always and forever 💕
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CelebrationPage;
