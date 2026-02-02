import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-soft/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-champagne/40 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in-up">
        {/* Small decorative hearts */}
        <div className="flex justify-center gap-3 mb-8">
          <Heart className="w-5 h-5 text-primary fill-primary opacity-60" />
          <Heart className="w-6 h-6 text-primary fill-primary animate-heartbeat" />
          <Heart className="w-5 h-5 text-primary fill-primary opacity-60" />
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground leading-tight mb-6">
          Tere Saath, <br />
          <span className="text-gradient-love italic">Har Lamha Khubsurat Hai</span>
        </h1>

        {/* Emotional subline */}
        <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Jab se tu mili hai, zindagi mein ek alag si roshni aa gayi hai... 
          <br />
          <span className="italic text-primary">Teri muskaan meri duniya hai.</span>
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
