import { Shield, Heart, Sun, Infinity } from "lucide-react";

interface Promise {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const promises: Promise[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Har Mushkil Mein Saath",
    description: "Chahe zindagi kitni bhi mushkil ho, tera haath kabhi nahi chhoddunga. Har storm mein, teri protection meri zimmedari.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Izzat Aur Pyaar",
    description: "Tujhe wo pyaar aur respect dunga jo tu deserve karti hai. Teri feelings, teri dreams, sab important hain mere liye.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Teri Khushi, Meri Priority",
    description: "Teri smile ke liye kuch bhi karunga. Teri khushi mein meri khushi hai, ye kabhi nahi bhoolaunga.",
  },
  {
    icon: <Infinity className="w-6 h-6" />,
    title: "Effort Kabhi Kam Nahi Hogi",
    description: "Chahe saal guzar jaayein, teri care karna, tujhe special feel karana — ye kabhi nahi rukne dunga.",
  },
];

const PromiseSection = () => {
  return (
    <section className="py-24 px-6 bg-cream/50 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-soft/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Meri Waadein Tere Naam
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Ye sirf words nahi, dil se kiye gaye promises hain... jo main zindagi bhar nibhaunga.
          </p>
        </div>

        {/* Promises grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-primary/10 
                         hover:shadow-romantic hover:border-primary/20 transition-all duration-300
                         animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary 
                              group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {promise.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {promise.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
