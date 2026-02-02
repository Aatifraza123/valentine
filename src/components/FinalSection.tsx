import { Heart } from "lucide-react";

const FinalSection = () => {
  return (
    <section className="py-20 px-6 bg-foreground relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10 animate-fade-in-up">
        <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-8 animate-pulse-soft" />

        {/* Final unforgettable line */}
        <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-foreground leading-relaxed italic">
          "Duniya mein bohot log milte hain... <br />
          <span className="text-primary">Par tu wo hai jisko dhundhne ki zaroorat nahi thi,</span> <br />
          tu toh dil ne khud chun liya."
        </blockquote>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-primary-foreground/70 text-sm uppercase tracking-widest mb-2">
            With All My Love
          </p>
          <p className="font-display text-xl text-primary-foreground">
            — Tumhara Hamesha ❤️
          </p>
        </div>

        {/* Footer hearts */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className="w-4 h-4 text-primary/60 fill-primary/60"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
