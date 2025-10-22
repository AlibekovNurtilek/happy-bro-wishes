import { useState, useEffect, useRef } from "react";
import CandleBlow from "@/components/CandleBlow";
import BirthdayContent from "@/components/BirthdayContent";
import Confetti from "@/components/Confetti";

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Prepare audio (you can replace this URL with actual birthday music)
    audioRef.current = new Audio("happy-birthday-to-you-piano-version-13976.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
  }, []);

  const handleBlowComplete = () => {
    setShowContent(true);
    setShowConfetti(true);
    
    // Play music
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }

    // Hide confetti after some time
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  return (
    <>
      {!showContent && <CandleBlow onBlowComplete={handleBlowComplete} />}
      {showContent && (
        <>
          {showConfetti && <Confetti />}
          <BirthdayContent />
        </>
      )}
    </>
  );
};

export default Index;
