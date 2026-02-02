import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ValentineQuestion = () => {
  const [answered, setAnswered] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-romantic relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gold-warm/20 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {!answered ? (
          <div className="animate-fade-in-up">
            {/* Pre-question text */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold-warm" />
              <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                Ek Sawaal Hai...
              </span>
              <Sparkles className="w-4 h-4 text-gold-warm" />
            </div>

            {/* Main question */}
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
              Kya Tum Meri <br />
              <span className="text-gradient-love italic">Valentine</span> Banogi?
            </h2>

            {/* Emotional lines */}
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-4">
              Pata nahi properly bolna aata hai ya nahi... <br />
              Par dil se keh raha hoon — <span className="italic text-primary">please?</span>
            </p>

            <p className="font-body text-muted-foreground mb-10">
              Sirf is Valentine Week ke liye nahi, har din ke liye... <br />
              Tu ho toh sab kuch perfect hai.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={() => setAnswered(true)}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-display
                         shadow-romantic hover:shadow-lg transition-all duration-300 rounded-full
                         animate-pulse-soft hover:animate-none"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:animate-heartbeat fill-current" />
              Haan, Main Tumhari Valentine Hoon
            </Button>

            <p className="font-body text-sm text-muted-foreground mt-6 italic">
              (Dil dhadak raha hai... 💕)
            </p>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            {/* Celebration */}
            <div className="mb-8">
              <Heart className="w-20 h-20 text-primary fill-primary mx-auto animate-heartbeat" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
              Shukriya, Meri Jaan! 💕
            </h2>

            <p className="font-body text-xl text-foreground/90 leading-relaxed mb-4">
              Tum nahi jaanti kitna khush hoon main abhi! <br />
              <span className="italic text-primary">Ye Valentine Week special banaunga, promise!</span>
            </p>

            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 mt-8 shadow-soft border border-primary/10">
              <p className="font-display text-lg text-foreground">
                Ab officially... <span className="text-primary font-semibold">Hum Valentine Hain!</span> 🥰
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-10">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-6 h-6 text-primary fill-primary animate-float-heart"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ValentineQuestion;
