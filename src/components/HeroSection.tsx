```jsx
import { ChevronDown, Instagram, Phone, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* Clear Hero Image */}
      <img
        src="/images/hero.jpg"
        alt="Kevin Kariuki - Professional Bicycle Mechanic"
        className="absolute inset-0 w-full h-full object-cover object-center animate-hero-pop"
      />

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto animate-fade-in">

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)]"
        >
          Kevin Kariuki
        </h1>

        {/* Professional Title */}
        <p
          className="text-xl md:text-2xl mb-3 text-white font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        >
          Professional Bicycle Mechanic | Event Support
        </p>

        {/* Location */}
        <p
          className="text-lg flex items-center justify-center gap-2 text-white mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        >
          <MapPin className="w-5 h-5" />
          Nairobi, Kenya
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">

          {/* Instagram */}
          <a
            href="https://instagram.com/kevinkariuki_ke"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black/20 rounded-full border border-white/50 hover:bg-black/40 hover:border-white hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254715244402"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black/20 rounded-full border border-white/50 hover:bg-black/40 hover:border-white hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <Phone className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:kevvkariuki@icloud.com"
            className="p-3 bg-black/20 rounded-full border border-white/50 hover:bg-black/40 hover:border-white hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-white animate-bounce cursor-pointer z-20 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>

    </header>
  );
};

export default HeroSection;
```
