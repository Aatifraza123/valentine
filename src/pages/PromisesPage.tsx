import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const promises = [
  {
    text: "To stay with you through every high and every low",
    delay: "animation-delay-200",
  },
  {
    text: "To always respect, cherish, and value you",
    delay: "animation-delay-400",
  },
  {
    text: "To be honest, loyal, and supportive — always",
    delay: "animation-delay-600",
  },
  {
    text: "To choose you, every single day, for the rest of my days",
    delay: "animation-delay-800",
  },
];

const PromisesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-hero relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-champagne/30 rounded-full blur-3xl" />

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/15 fill-primary/15 animate-float-heart"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i % 2) * 70}%`,
              width: 12 + (i % 3) * 6,
              height: 12 + (i % 3) * 6,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-gold-warm" />
            <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
              My Promises To You
            </span>
            <Sparkles className="w-5 h-5 text-gold-warm" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-12">
            These Are My <span className="text-gradient-love italic">Forever</span> Promises
          </h1>
        </div>

        {/* Promises list */}
        <div className="space-y-6 mb-12">
          {promises.map((promise, index) => (
            <div
              key={index}
              className={`animate-fade-in-up ${promise.delay}`}
            >
              <div className="flex items-center gap-4 bg-card/60 backdrop-blur-sm rounded-2xl p-5 shadow-soft border border-primary/10">
                <Heart className="w-5 h-5 text-primary fill-primary flex-shrink-0" />
                <p className="font-body text-lg text-foreground/90 text-left">
                  {promise.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up animation-delay-1000">
          <Button
            size="lg"
            onClick={() => navigate("/final")}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-display
                       shadow-romantic hover:shadow-lg transition-all duration-500 rounded-full
                       hover:scale-105 glow-button"
          >
            One Last Thing
            <Heart className="w-5 h-5 ml-2 fill-current group-hover:animate-heartbeat" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromisesPage;
