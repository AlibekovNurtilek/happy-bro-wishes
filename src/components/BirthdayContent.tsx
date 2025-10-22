import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import photo1 from "@/assets/1.jpg";
import photo2 from "@/assets/2.jpg";
import photo3 from "@/assets/3.jpg";

const BirthdayContent = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  const photos = [photo1, photo2, photo3];

  const message = `Камкорум агам🤍 
Бир тууганым, бир боорум бүгүнкү өздүк майрамыңыз кут болсун✨ 
Сиз эң мыкты агасыз, сиз менен сыймыктанам🥰 Сизге көп айтпасам да сизди абдан жакшы көрөм😘Ар бир суранычыма "макул, боптур укам" дегениңиз эле баа жеткис🫂 Аллахым сизге бекем ден соолук, берекелүү өмүр берсин🤲 Ин Шаа Аллах кийинки туулган күнүңүздө жаныңызда жеңем болсун☺️ Аллахым ыймандуу, боорукер, мээримдүү жубай туш кылсын сизге🤲 Мээримдүү ата, камкор жубай болуңуз🥰 Сизди жакшы көрөм💖`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[hsl(var(--muted))] to-background py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div 
          className={`text-center space-y-4 transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up">
            Туулган күнүңүз менен агатайым!
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Бул өзгөчө күнү сизге чын жүрөктөн бактылуулук, ден соолук жана ийгилик каалайм!
          </p>
        </div>

        {/* Photo Gallery */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {photos.map((photo, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-2 border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_hsl(var(--primary)/0.3)] transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={photo} 
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Card>
          ))}
        </div>

        {/* Message Card */}
        <Card 
          className={`p-8 md:p-12 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border-2 border-primary/30 shadow-[0_20px_60px_hsl(var(--primary)/0.2)] transition-all duration-1000 delay-500 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="text-6xl animate-float">🎂</div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-foreground/90 font-medium text-center">
              {message}
            </p>
            <div className="flex justify-center gap-4 text-4xl animate-fade-in pt-6">
              <span className="animate-float" style={{ animationDelay: "0s" }}>✨</span>
              <span className="animate-float" style={{ animationDelay: "0.5s" }}>🎈</span>
              <span className="animate-float" style={{ animationDelay: "1s" }}>🎁</span>
              <span className="animate-float" style={{ animationDelay: "1.5s" }}>🎊</span>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div 
          className={`text-center text-muted-foreground transition-all duration-1000 delay-700 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg">
            Сүйүү менен Аселядан 💖
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayContent;
