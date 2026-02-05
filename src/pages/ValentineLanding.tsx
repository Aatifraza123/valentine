import { Heart, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PersonalMessage from "@/components/PersonalMessage";

const ValentineLanding = () => {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [hoverMessage, setHoverMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const hoverMessages = [
    "Are you sure? 🥺",
    "Think again... 💕",
    "Really? But why? 😢",
    "Please say yes! 🙏",
    "Don't break my heart! 💔",
    "Just click Yes! ✨",
    "You know you want to say yes! 😊",
    "Come on, say yes! 💖",
  ];

  useEffect(() => {
    // Set page title
    document.title = "💕 Will You Be My Valentine? 💕";
  }, []);

  const moveNoButton = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 150; // Approximate button width
    const buttonHeight = 60; // Approximate button height
    
    // Calculate safe boundaries (keep button within screen)
    const maxX = (container.width / 2) - buttonWidth;
    const maxY = (container.height / 2) - buttonHeight;
    const minX = -(container.width / 2) + buttonWidth;
    const minY = -(container.height / 2) + buttonHeight;
    
    // Generate random position within safe boundaries
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;
    
    setNoButtonPosition({ x: newX, y: newY });
    setNoAttempts(prev => prev + 1);
    
    // Show random hover message (stays until next hover)
    const randomMessage = hoverMessages[Math.floor(Math.random() * hoverMessages.length)];
    setHoverMessage(randomMessage);
  };

  const handleYes = () => {
    navigate("/celebration");
  };

  return (
    <div 
      ref={containerRef}
      className="h-screen w-screen flex flex-col items-center justify-center px-6 bg-gradient-hero relative overflow-hidden"
    >
      {/* Multiple Ambient glows - Reduced */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-warm/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      
      {/* Enhanced Floating hearts background - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-primary/15 fill-primary/15 animate-float-heart"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i % 2) * 40}%`,
              width: 18 + (i % 2) * 8,
              height: 18 + (i % 2) * 8,
              animationDelay: `${i * 0.7}s`,
              animationDuration: '4s',
            }}
          />
        ))}
      </div>
      
      {/* Sparkles - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-gold-warm/25 animate-twinkle"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${25 + (i % 2) * 40}%`,
              width: 14,
              height: 14,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating roses - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={`rose-float-${i}`}
            className="absolute text-xl animate-float-heart"
            style={{
              left: `${25 + (i * 25)}%`,
              top: `${30 + (i % 2) * 35}%`,
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
          { emoji: '💑', left: '10%', top: '15%', delay: '0s', size: 'text-3xl' },
          { emoji: '👫', left: '85%', top: '20%', delay: '1s', size: 'text-2xl' },
          { emoji: '💏', left: '15%', top: '75%', delay: '2s', size: 'text-3xl' },
          { emoji: '🥰', left: '80%', top: '70%', delay: '1.5s', size: 'text-2xl' },
          { emoji: '💞', left: '50%', top: '10%', delay: '0.5s', size: 'text-xl' },
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

      <div className="text-center relative z-10 animate-fade-in-up">
        {/* Decorative hearts with animation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat" style={{ animationDelay: '0s' }} />
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-soft" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Main question with enhanced styling */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-4 animate-fade-in-up">
          Will You Be My
        </h1>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-love italic mb-6 animate-fade-in-up animation-delay-200">
          Valentine?
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up animation-delay-400">
          <Sparkles className="w-5 h-5 text-gold-warm" />
          <p className="font-body text-lg text-muted-foreground max-w-md mx-auto italic">
            I have something special to tell you...
          </p>
          <Sparkles className="w-5 h-5 text-gold-warm" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-600 relative">
          {/* Yes Button - Fixed size */}
          <Button
            size="lg"
            onClick={handleYes}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-xl font-display
                       shadow-romantic hover:shadow-lg transition-all duration-500 rounded-full
                       hover:scale-110 glow-button z-10"
          >
            <Heart className="w-5 h-5 mr-2 group-hover:animate-heartbeat fill-current" />
            Yes! 💕
          </Button>

          {/* No Button - Moves away within screen */}
          <Button
            size="lg"
            variant="outline"
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            onTouchStart={moveNoButton}
            className="px-12 py-7 text-xl font-display rounded-full border-2 border-primary/30 
                       text-foreground/70 hover:text-foreground transition-all duration-300 z-10"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            No 🙈
          </Button>
        </div>
        
        {/* Hover Message - Better positioned */}
        {hoverMessage && (
          <div className="mt-8 animate-fade-in-up">
            <p className="font-display text-2xl text-primary font-bold italic bg-white/95 px-8 py-4 rounded-2xl shadow-romantic border-2 border-primary/20">
              {hoverMessage}
            </p>
          </div>
        )}

        {/* Playful messages after attempts */}
        {noAttempts > 0 && noAttempts <= 2 && (
          <p className="font-body text-sm text-muted-foreground mt-8 animate-fade-in-up italic">
            Are you sure? The Yes button is looking so lonely... 🥺
          </p>
        )}
        {noAttempts > 2 && noAttempts <= 4 && (
          <p className="font-body text-sm text-primary mt-8 animate-fade-in-up italic font-medium">
            I think the universe wants you to say yes... 💕
          </p>
        )}
      </div>      
      <PersonalMessage />
    </div>
  );
};

export default ValentineLanding;
