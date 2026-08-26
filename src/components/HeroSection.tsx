```jsx
import { ChevronDown, Instagram, Phone, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundColor: "transparent",
      }}
    >
      {/* CLEAR ORIGINAL HERO IMAGE */}
      <img
        src="/images/hero.jpg"
        alt="Kevin Kariuki - Professional Bicycle Mechanic"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          opacity: 1,
          filter: "none",
          mixBlendMode: "normal",
        }}
      />

      {/* Hero Content */}
      <div
        className="relative z-10 px-6 max-w-4xl mx-auto"
        style={{
          textShadow: "0 3px 8px rgba(0, 0, 0, 0.8)",
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Kevin Kariuki
        </h1>

        <p className="text-xl md:text-2xl mb-3 text-white font-medium">
          Professional Bicycle Mechanic | Event Support
        </p>

        <p className="text-lg flex items-center justify-center gap-2 text-white mb-8">
          <MapPin className="w-5 h-5" />
          Nairobi, Kenya
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">

          <a
            href="https://instagram.com/kevinkariuki_ke"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black/20 border border-white/60 rounded-full hover:bg-black/40 hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="https://wa.me/254715244402"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black/20 border border-white/60 rounded-full hover:bg-black/40 hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <Phone className="w-6 h-6" />
          </a>

          <a
            href="mailto:kevvkariuki@icloud.com"
            className="p-3 bg-black/20 border border-white/60 rounded-full hover:bg-black/40 hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-white animate-bounce cursor-pointer z-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </header>
  );
};

export default HeroSection;
```