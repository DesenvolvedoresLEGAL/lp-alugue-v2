import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, CheckCircleIcon, Clock, MessageCircle } from "lucide-react";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    dataEvento: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const CONTACT_EMAIL = 'gustavo@operadora.legal';
  const WHATSAPP_NUMBER = "5511999572394";
  const WHATSAPP_MESSAGE_GENERAL = "LEGAL, quero alugar agora.";
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

      const data = new FormData(e.currentTarget);

      const name = data.get('nome');
      const email = data.get('email');
      const phone = data.get('celular');
      const eventDate = data.get('dataEvento');

      const subject = encodeURIComponent("Reserva de Evento");
      const body = encodeURIComponent(
        `📅 *Solicitação de Reserva de Evento*%0D%0A
          Nome: ${name}%0D%0A
          Email: ${email}%0D%0A
          Celular: ${phone}%0D%0A
          Data do Evento: ${eventDate}
          `
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

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
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_GENERAL)}`, "_blank");
  };
  return <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
        <img src="/lovable-uploads/7ef35a50-b7b8-4255-9522-f7dca476a652.png" alt="Smart city with 5G connectivity" className="w-full h-full object-cover" />
      </div>

      {/* Company Logo at the top */}
      <div className="absolute top-6 left-0 right-0 z-30 container-custom">
        <div className="flex justify-start">
          <img src="https://alugue.operadora.legal/wp-content/webp-express/webp-images/uploads/2023/06/Logo-Alugue-Branco.png.webp" alt="LEGAL - Internet 5G para eventos" className="max-w-[165px] h-auto" />
        </div>
      </div>

      <div className="container-custom relative z-20 py-12">
        <div className="text-center mb-8 md:mb-12">
            
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-white">
            {/* Company Logo */}
            <div className="mb-6">
              
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Internet 5G para eventos, instalada em até 60 min</h1>
            
            <p className="text-xl md:text-2xl">
              Velocidade 10× maior que a rede oficial do pavilhão, sem burocracia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-lg mt-8">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-legal-cyan mr-2" />
                <span>NPS 90</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-legal-cyan mr-2" />
                <span>Suporte 24 × 7</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <Button variant="outline" onClick={handleWhatsAppClick} className="bg-transparent hover:bg-white/10 border-legal-cyan text-legal-cyan hover:text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Alugue Agora
              </Button>
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