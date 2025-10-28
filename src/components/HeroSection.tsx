import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import oceanHero from "@/assets/ocean-hero.jpg";
import WaveBackground from "./WaveBackground";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${oceanHero})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
      </div>

      {/* Animated Waves */}
      <WaveBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Save Water, Secure Our Future
        </h1>
        <p
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Every drop counts in preserving our planet's most precious resource.
          Join us in making a difference for generations to come.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <Button
            size="lg"
            onClick={() => {
              const ctaSection = document.getElementById("cta-section");
              ctaSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Take Action Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const statsSection = document.getElementById("stats-section");
              statsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 transition-all duration-300 cursor-pointer"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
