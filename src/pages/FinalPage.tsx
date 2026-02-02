import { Heart, Sparkles } from "lucide-react";

const FinalPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-foreground relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gold-warm/15 rounded-full blur-3xl" />

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/30 fill-primary/30 animate-float-heart"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${10 + (i % 4) * 22}%`,
              width: 12 + (i % 4) * 5,
              height: 12 + (i % 4) * 5,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-gold-warm" />
            <Heart className="w-14 h-14 text-primary fill-primary animate-heartbeat" />
            <Sparkles className="w-6 h-6 text-gold-warm" />
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-300">
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-foreground leading-relaxed italic mb-8">
            "In a world full of people,
            <br />
            <span className="text-primary">my heart chose only you.</span>
            <br />
            And it would choose you,
            <br />
            in a hundred lifetimes, always."
          </blockquote>
        </div>

        <div className="animate-fade-in-up animation-delay-600">
          <div className="bg-primary/10 backdrop-blur-sm rounded-3xl p-8 shadow-romantic border border-primary/20 glow-card">
            <p className="font-display text-3xl sm:text-4xl text-primary-foreground mb-4">
              Happy Valentine's Day,
            </p>
            <p className="font-display text-4xl sm:text-5xl text-primary font-semibold">
              My Love ❤️
            </p>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-900">
          <p className="font-body text-primary-foreground/70 text-lg mt-10 italic">
            Forever and always yours...
          </p>

          {/* Celebration hearts */}
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-primary fill-primary animate-float-heart"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
