import { Heart } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValentineLanding = () => {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = Math.min(150, container.width / 4);
    const maxY = Math.min(100, container.height / 4);
    
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    
    setNoButtonPosition({ x: newX, y: newY });
    setNoAttempts(prev => prev + 1);
  };

  const handleYes = () => {
    navigate("/feelings");
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-hero relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 fill-primary/20 animate-float-heart"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 16 + (i % 3) * 8,
              height: 16 + (i % 3) * 8,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 animate-fade-in-up">
        {/* Decorative heart */}
        <Heart className="w-12 h-12 text-primary fill-primary mx-auto mb-8 animate-pulse-soft" />
        
        {/* Main question */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-4">
          Will You Be My
        </h1>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-love italic mb-6">
          Valentine?
        </h1>
        
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-md mx-auto">
          I have something special to tell you...
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Yes Button */}
          <Button
            size="lg"
            onClick={handleYes}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-xl font-display
                       shadow-romantic hover:shadow-lg transition-all duration-500 rounded-full
                       hover:scale-105 glow-button"
          >
            <Heart className="w-5 h-5 mr-2 group-hover:animate-heartbeat fill-current" />
            Yes
          </Button>

          {/* No Button - Moves away */}
          <Button
            size="lg"
            variant="outline"
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="px-12 py-7 text-xl font-display rounded-full border-2 border-primary/30 
                       text-foreground/70 hover:text-foreground transition-all duration-300"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            No 🙈
          </Button>
        </div>

        {/* Playful message after attempts */}
        {noAttempts > 2 && (
          <p className="font-body text-sm text-muted-foreground mt-8 animate-fade-in-up italic">
            I think the universe wants you to say yes... 💕
          </p>
        )}
      </div>
    </div>
  );
};

export default ValentineLanding;
