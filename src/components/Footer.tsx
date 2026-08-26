import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-background/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/254700000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-background/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a 
            href="mailto:kevin@example.com"
            className="p-3 bg-background/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-lg font-semibold mb-2">© 2026 Kevin Kariuki</p>
        <p className="text-background/80">Bicycle Mechanic | Event Support | Community</p>
      </div>
    </footer>
  );
};

export default Footer;
