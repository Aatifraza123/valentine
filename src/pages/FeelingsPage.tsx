import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeelingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-romantic relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gold-warm/15 rounded-full blur-3xl" />
      
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/15 fill-primary/15 animate-float-heart"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${15 + (i % 2) * 60}%`,
              width: 14 + (i % 3) * 6,
              height: 14 + (i % 3) * 6,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl text-center relative z-10">
        {/* Animated content */}
        <div className="animate-fade-in-up">
          <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-8 animate-pulse-soft" />
          
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-8">
            You Changed <span className="text-gradient-love italic">Everything</span>
          </h1>
        </div>

        <div className="animate-fade-in-up animation-delay-200">
          <p className="font-body text-lg sm:text-xl text-foreground/85 leading-relaxed mb-6">
            Before you, my days were ordinary. But the moment you walked into my life, 
            everything became beautiful. Every smile of yours brings me peace, 
            every word fills my heart with warmth.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <p className="font-body text-lg sm:text-xl text-foreground/85 leading-relaxed mb-6">
            You give me strength when I'm weak, hope when I'm lost, 
            and joy in the simplest moments. I never knew love could feel this safe, 
            this real, this beautiful.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-600">
          <p className="font-body text-xl text-primary font-medium italic mb-12">
            Thank you for choosing me. Thank you for being you.
          </p>

          <Button
            size="lg"
            onClick={() => navigate("/promises")}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-display
                       shadow-romantic hover:shadow-lg transition-all duration-500 rounded-full
                       hover:scale-105 glow-button"
          >
            Next
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeelingsPage;
