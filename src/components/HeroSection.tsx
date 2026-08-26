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

      {/* Hero Background Image */}
      <img
        src="/images/hero.jpg"
        alt="Kevin Kariuki"
        className="absolute inset-0 w-full h-full object-cover object-center animate-hero-pop"
      />

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto animate-fade-in">

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Kevin Kariuki
        </h1>

        <p className="text-xl md:text-2xl mb-3 text-white/95">
          Professional Bicycle Mechanic | Event Support
        </p>

        <p className="text-lg flex items-center justify-center gap-2 text-white/85 mb-8">
          <MapPin className="w-5 h-5" />
          Nairobi, Kenya
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">

          <a
            href="https://instagram.com/kevinkariuki_ke"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="https://wa.me/254715244402"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <Phone className="w-6 h-6" />
          </a>

          <a
            href="mailto:kevvkariuki@icloud.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-bounce cursor-pointer z-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>

    </header>
  );
};

export default HeroSection;
```
