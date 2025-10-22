import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import cakeImage from "@/assets/birthday-cake.jpg";

interface CandleBlowProps {
  onBlowComplete: () => void;
}

const CandleBlow = ({ onBlowComplete }: CandleBlowProps) => {
  const [isBlowing, setIsBlowing] = useState(false);
  const [candlesOut, setCandlesOut] = useState(0);

  const handleBlow = () => {
    setIsBlowing(true);
    
    // Animate candles going out one by one
    const intervals = [0, 200, 400, 600];
    intervals.forEach((delay, index) => {
      setTimeout(() => {
        setCandlesOut(index + 1);
      }, delay);
    });

    // Complete after all candles are out
    setTimeout(() => {
      onBlowComplete();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-[hsl(var(--muted))] to-background">
      <div className="relative flex flex-col items-center gap-8 p-8">
        {/* Cake Image */}
        <div className="relative w-full max-w-2xl animate-fade-in">
          <img
            src={cakeImage}
            alt="Birthday Cake"
            className={`w-full rounded-3xl shadow-2xl transition-all duration-700 ${
              isBlowing ? "scale-110 blur-sm" : ""
            }`}
          />
          
          {/* Candle flames overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-16 w-16 transition-all duration-500 ${
                  candlesOut > i ? "animate-blow-out" : "animate-glow"
                }`}
                style={{
                  background: candlesOut > i 
                    ? "transparent" 
                    : "radial-gradient(circle, hsl(35 95% 65%) 0%, hsl(35 95% 55%) 50%, transparent 70%)",
                  filter: candlesOut > i ? "none" : "blur(8px)",
                  opacity: candlesOut > i ? 0 : 1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        {!isBlowing && (
          <Button
            variant="hero"
            size="lg"
            onClick={handleBlow}
            className="animate-scale-in text-xl px-12 py-8 h-auto"
          >
            🎂 Начать
          </Button>
        )}

        {isBlowing && (
          <p className="text-2xl font-semibold text-primary animate-fade-in">
            ✨ Загадайте желание...
          </p>
        )}
      </div>
    </div>
  );
};

export default CandleBlow;
