import { Heart, Sparkles, Sun } from "lucide-react";

const LoveSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-romantic relative">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up">
          <div className="h-px w-16 bg-primary/30" />
          <Sparkles className="w-5 h-5 text-gold-warm" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Tu Meri Zindagi Mein
          </h2>
          <Sparkles className="w-5 h-5 text-gold-warm" />
          <div className="h-px w-16 bg-primary/30" />
        </div>

        {/* Main love paragraph */}
        <div className="space-y-8 animate-fade-in-up animate-delay-200">
          <p className="font-body text-lg sm:text-xl text-foreground/90 leading-relaxed">
            Pata hai, tu milne se pehle bhi zindagi thi... par wo sirf <span className="italic text-primary font-medium">guzar</span> rahi thi. 
            Tu aayi, aur sab kuch badal gaya. Ab har subah teri yaad ke saath shuru hoti hai, 
            aur har raat teri baatein yaad karke hi neend aati hai.
          </p>

          <p className="font-body text-lg sm:text-xl text-foreground/90 leading-relaxed">
            Teri hansi mein wo sukoon hai jo kahin nahi milta. Teri awaaz mein wo garmaahat hai 
            jo dil tak pahunchti hai. Tu meri <span className="font-medium text-primary">taakat</span> hai, 
            meri <span className="font-medium text-primary">khushi</span> hai, 
            meri <span className="font-medium text-primary">dua</span> hai.
          </p>

          {/* Gratitude */}
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 mt-12 shadow-soft border border-primary/10">
            <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4 animate-pulse-soft" />
            <p className="font-display text-xl sm:text-2xl text-foreground italic">
              "Shukriya, mujhe chunne ke liye... <br />
              Mujh par bharosa karne ke liye."
            </p>
            <p className="font-body text-muted-foreground mt-4">
              Tu deserve karti hai duniya ki saari khushiyan, aur main koshish karunga tujhe wo sab dene ki.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveSection;
