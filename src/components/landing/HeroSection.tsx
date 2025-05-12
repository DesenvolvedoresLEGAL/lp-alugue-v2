import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, CheckCircleIcon, Clock } from "lucide-react";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    dataEvento: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // This would be replaced with actual Supabase code when integrated
      console.log("Submitting form data:", formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Track form submission (would use real tracking when implemented)
      console.log("Tracking event: lead_lp_highconv");
      toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.", {
        duration: 5000
      });

      // Reset form
      setFormData({
        nome: "",
        email: "",
        celular: "",
        dataEvento: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar o formulário. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="relative min-h-[90vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster="/placeholder.svg" // Would be replaced with actual poster image
      >
          <source src="#" type="video/mp4" /> {/* Would add actual video source */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container-custom relative z-20 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Internet para eventos, instalada em até 1h</h1>
            
            <p className="text-xl md:text-2xl">
              Velocidade 10× maior que a rede oficial do pavilhão, sem burocracia.
            </p>
            
            <div className="flex items-center space-x-4 text-lg mt-8">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-legal-cyan mr-2" />
                <span>NPS 90</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-legal-cyan mr-2" />
                <span>Suporte 24 × 7</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Garanta a internet do seu evento</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-white">Nome</Label>
                  <Input id="nome" name="nome" placeholder="Seu nome completo" value={formData.nome} onChange={handleChange} required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="celular" className="text-white">Celular</Label>
                  <Input id="celular" name="celular" placeholder="(11) 98765-4321" value={formData.celular} onChange={handleChange} required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dataEvento" className="text-white">Data do Evento</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-white/50" />
                    <Input id="dataEvento" name="dataEvento" type="date" value={formData.dataEvento} onChange={handleChange} required className="bg-white/20 border-white/30 text-white pl-10" />
                  </div>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-legal-cyan hover:bg-legal-cyan/90 text-legal-blue font-bold text-lg py-6">
                {isSubmitting ? "Enviando..." : "Reservar Minha Data"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;