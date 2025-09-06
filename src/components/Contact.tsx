import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6289508129920", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:089508129920";
  };

  const handleMaps = () => {
    window.open("https://maps.google.com/?q=Jl. Raya Parung Jahe, Suka Manah, Kec. Jambe, Kabupaten Tangerang, Banten 15720", "_blank");
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            HUBUNGI <span className="text-accent">KAMI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siap membantu menyelesaikan masalah teknologi Anda kapan saja
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm glow-border hover:neon-glow transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Lokasi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground mb-4">
                Jl. Raya Parung Jahe, Suka Manah, Kec. Jambe, Kabupaten Tangerang, Banten 15720
              </CardDescription>
              <Button variant="outline" onClick={handleMaps} className="glow-border">
                Buka Maps
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm glow-border hover:neon-glow transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-accent">Telepon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-foreground text-lg font-semibold mb-4">
                089508129920
              </CardDescription>
              <Button variant="outline" onClick={handleCall} className="glow-border">
                Telepon Langsung
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm glow-border hover:neon-glow transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyber-green/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-cyber-green" />
              </div>
              <CardTitle className="text-cyber-green">Jam Buka</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground mb-2">
                Sabtu - Kamis
              </CardDescription>
              <CardDescription className="text-foreground text-lg font-semibold mb-4">
                09:00 - 21:00
              </CardDescription>
              <div className="text-xs text-muted-foreground">
                Tutup Hari Jumat
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleWhatsApp}
            className="neon-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Chat WhatsApp
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Respons cepat dalam 1-2 menit
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;