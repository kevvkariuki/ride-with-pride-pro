import { ChevronDown, Instagram, Phone, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Kevin Kariuki
        </h1>
        <p className="text-xl md:text-2xl mb-2 text-white/90">
          Professional Bicycle Mechanic | Event Support | Community Rider
        </p>
        <p className="text-lg flex items-center justify-center gap-2 text-white/80 mb-8">
          <MapPin className="w-5 h-5" />
          Nairobi, Kenya
        </p>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://wa.me/254700000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a 
            href="mailto:kevin@example.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </header>
  );
};

export default HeroSection;
