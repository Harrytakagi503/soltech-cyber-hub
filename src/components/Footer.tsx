import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">SOL</span>
              <span className="text-accent">TECH</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Menyediakan layanan service komputer profesional dengan teknologi terdepan untuk semua kebutuhan IT Anda.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Layanan</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Perbaikan Hardware</li>
              <li>Recovery Data</li>
              <li>Upgrade Komputer</li>
              <li>Pembersihan Virus</li>
              <li>Maintenance Rutin</li>
              <li>Instalasi Software</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Kontak</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span className="text-sm">
                  Jl. Raya Parung Jahe, Suka Manah, Kec. Jambe, Kabupaten Tangerang, Banten 15720
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>089508129920</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-cyber-green" />
                <span>Sabtu - Kamis: 09:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 SolTech TechInside. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;