import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, HardDrive, Zap, Shield, Wrench, Cpu } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "JASA RAKIT PC",
    description: "Rakit PC sesuai kebutuhanmu, untuk Gaming, Editing, Office dan lain-lain",
    color: "text-primary"
  },
  {
    icon: HardDrive,
    title: "Backup Data System dan Instal Ulang",
    description: "Pemulihan data yang hilang dari storage yang rusak dan rebuild Operating system PC",
    color: "text-cyber-blue"
  },
  {
    icon: Zap,
    title: "Upgrade Komputer",
    description: "Upgrade performa komputer untuk kebutuhan modern",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Pembersihan Virus",
    description: "Pembersihan malware dan optimasi sistem operasi",
    color: "text-cyber-green"
  },
  {
    icon: Wrench,
    title: "Maintenance Rutin",
    description: "Perawatan berkala untuk menjaga performa optimal",
    color: "text-cyber-purple"
  },
  {
    icon: Cpu,
    title: "Instalasi Software",
    description: "Instalasi OS, driver, dan software aplikasi",
    color: "text-primary"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            LAYANAN <span className="text-accent">KAMI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan teknologi komputer Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm glow-border hover:neon-glow transition-all duration-300 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:glow-text transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
