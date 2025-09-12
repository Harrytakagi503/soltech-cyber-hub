import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logo1Image from "@/assets/techincside-logo1.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 cyber-grid" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-6 mb-6">
          <img 
            src={logo1Image} 
            alt="TECHINCSIDE Logo" 
            className="h-16 w-auto md:h-20"
          />
          <h1 className="text-6xl md:text-8xl font-bold glow-text text-primary">
            TECHINCSIDE
          </h1>
        </div>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Layanan Service Komputer Profesional dengan Teknologi Terdepan
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="neon-glow hover:scale-105 transition-all duration-300">
            <Phone className="mr-2 h-5 w-5" />
            Hubungi Sekarang
          </Button>
          <Button variant="outline" size="lg" className="glow-border hover:scale-105 transition-all duration-300">
            <MapPin className="mr-2 h-5 w-5" />
            Lokasi Kami
          </Button>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg glow-border">
            <div className="text-primary font-semibold">Jam Operasional</div>
            <div className="text-muted-foreground">Sabtu - Kamis</div>
            <div className="text-foreground">09:00 - 21:00</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg glow-border">
            <div className="text-primary font-semibold">Kontak</div>
            <div className="text-foreground">089508129920</div>
            <div className="text-muted-foreground">Respons Cepat</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
