import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

const PersonalMessage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show message after 1 second
    setTimeout(() => setVisible(true), 1000);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-romantic border-2 border-primary/30 max-w-md mx-4">
        <div className="flex items-center gap-3">
          <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat flex-shrink-0" />
          <p className="font-body text-sm sm:text-base text-foreground/90 italic">
            Made with love, just for you... 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalMessage;
