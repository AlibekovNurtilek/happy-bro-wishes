import { useEffect, useState } from "react";

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; left: string; delay: string; color: string }>>([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      color: [
        "hsl(35 95% 55%)",
        "hsl(15 85% 65%)",
        "hsl(340 85% 65%)",
        "hsl(200 85% 65%)",
        "hsl(280 85% 65%)",
      ][Math.floor(Math.random() * 5)],
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 w-2 h-2 rounded-full animate-confetti"
          style={{
            left: piece.left,
            backgroundColor: piece.color,
            animationDelay: piece.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
